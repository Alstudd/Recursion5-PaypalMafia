import azure.functions as func
import logging
import boto3
import base64
import gzip
import json

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

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