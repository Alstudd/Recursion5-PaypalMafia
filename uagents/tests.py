from transformers import pipeline

pipe = pipeline("text-classification", model="Rishi-19/Profanity_Detection_Model_2")
# print(pipe("the movie was nice"))

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('./cred.json')

firebase_admin.initialize_app(cred)

db = firestore.client()
collection_ref = db.collection('unfiltered_review')
docs = collection_ref.get()
flagged = []

for doc in docs:
    review = doc.to_dict().get('text')
    owner = doc.to_dict().get('owner')

    status = pipe(review)[0]['label']

    if status == "Profanity_detected":
        flagged.append(owner)

print(flagged)