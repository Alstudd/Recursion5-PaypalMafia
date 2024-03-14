import streamlit as st
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F

def analyze_sentiments(texts):
    model_name = 'Kaludi/Reviews-Sentiment-Analysis'
    model = AutoModelForSequenceClassification.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)

    # Tokenize and prepare the input batch
    batch = tokenizer(texts, padding=True, truncation=True, return_tensors="pt")

    # Perform inference
    with torch.no_grad():
        outputs = model(**batch)
        predictions = F.softmax(outputs.logits, dim=1)
        labels = torch.argmax(predictions, dim=1)
        labels = [model.config.id2label[label_id] for label_id in labels.tolist()]

    return labels

def main():
    st.title("Sentiment Analysis using Transformers")
    st.write("Enter a list of sentences and perform sentiment analysis.")

    input_text = st.text_area("Enter sentences (one per line)", height=200)

    if st.button("Analyze Sentiments"):
        if input_text.strip() == "":
            st.warning("Please enter some text.")
        else:
            texts = input_text.split("\n")
            labels = analyze_sentiments(texts)
            st.write("Sentiment Analysis Results:")
            for text, label in zip(texts, labels):
                st.write(f"Text: {text}")
                st.write(f"Sentiment: {label}")
                st.write("---")

if __name__ == "__main__":
    main()
