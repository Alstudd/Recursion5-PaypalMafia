from uagents import Agent, Context
from transformers import pipeline
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

pipe = pipeline("text-classification", model="Rishi-19/Profanity_Detection_Model_2")
good_guy = Agent(name="good_guy")

with open("cred.json", "r") as file:
  json_data = file.read()

creds_dict = json.loads(json_data)

cred = credentials.Certificate('./cred.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

@good_guy.on_interval(10)
async def clean(ctx: Context):
    ctx.logger.info(f'hello, I am a {ctx.name}')
    
    collection_ref = db.collection('unfiltered_review')
    docs = collection_ref.get()
    flagged = []

    for doc in docs:
        review = doc.to_dict().get('text')
        owner = doc.to_dict().get('owner')

        status = pipe(review)[0]['label']

        if status == "Profanity_detected":
            flagged.append(owner)
            
        # doc.reference.delete()

    print(flagged)
 
if __name__ == "__main__":
    good_guy.run()