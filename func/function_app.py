import azure.functions as func
import logging
import boto3
import base64
import gzip
import json
from transformers import pipeline
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

def sentimentAnalysis(text):
    model_name = 'distilbert-base-uncased-finetuned-sst-2-english'
    # model_name = 'Kaludi/Reviews-Sentiment-Analysis'
    model =AutoModelForSequenceClassification.from_pretrained(model_name)
    tokenizer=AutoTokenizer.from_pretrained(model_name)
    classifier = pipeline('sentiment-analysis',model=model,tokenizer=tokenizer)
    # result = classifier(['We are very happy to show you the 🤗 Transformers library.',"Second sentence and I am really stressed"])
    # print(result)

    # tokens=tokenizer.tokenize("We are very happy to show you the 🤗 Transformers library.")
    # token_ids=tokenizer.convert_tokens_to_ids(tokens)
    # input_ids=tokenizer("We are very happy to show you the 🤗 Transformers library.")

    # print(f"tokens: {tokens}")
    # print(f"token_ids: {token_ids}")
    # print(f"input_ids: {input_ids}")

    x_train = [text]

    batch=tokenizer(x_train, padding=True, truncation=True, return_tensors="pt")
    # print(batch)

    #passing batch to the model

    #inferencing
    with torch.no_grad():
        #unpacking the dictionary
        outputs=model(**batch)
        # print(outputs)
        predictions=F.softmax(outputs.logits,dim=1)
        print(predictions)
        labels=torch.argmax(predictions,dim=1)
        #here we are converting the label ids to the actual labels
        # print(labels)
        labels=[model.config.id2label[label_id] for label_id in labels.tolist()]
        print(labels)

def get_utterance(compressed_interpretations_string):
    decoded_data = base64.b64decode(compressed_interpretations_string)
    decompressed_data = gzip.decompress(decoded_data)
    return decompressed_data.decode("utf-8") 

def get_intent(text):
    access_key = "AKIAQ6DRLSHDL5G3EC42"
    access_secret = "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"
    region = "us-east-1"

    client = boto3.client('lexv2-runtime', region_name=region,
                        aws_access_key_id=access_key,
                        aws_secret_access_key=access_secret)

    bot_id = 'SN0WUY4X6A'
    bot_alias_id = 'TSTALIASID'
    locale_id = 'en_IN'

    user_input = text

    response = client.recognize_utterance(
        botId=bot_id,
        botAliasId=bot_alias_id,
        localeId=locale_id,
        sessionId=text.replace(' ', ''),
        inputStream=user_input,
        requestContentType="text/plain; charset=utf-8"
    )

    intent = get_utterance(response["interpretations"])
    print(intent)
    intent = json.loads(intent)[0]["intent"]["name"]

    return intent

@app.route(route="getUt")
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    text = req.params.get('text')
    if not text:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            text = req_body.get('text')

    if text:
        return get_intent(text)
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )