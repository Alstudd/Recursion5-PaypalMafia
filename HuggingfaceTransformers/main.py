# from transformers import pipeline

# import torch
# import torch.nn.functional as F

# classifier = pipeline('sentiment-analysis')
# result = classifier('We are very happy to show you the 🤗 Transformers library.')
# print(result)\
# [{'label': 'POSITIVE', 'score': 0.9997795224189758}]

from transformers import pipeline
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F
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

x_train =["i am stressed"]

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

