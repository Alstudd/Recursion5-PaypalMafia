import React, { useState, useEffect, useRef } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

const SPEECH_KEY = "e448f4b6437a42a1a35e480d8ab91628";
const SPEECH_REGION = "eastus";

export default function SpeechChatbot() {
	const [isListening, setIsListening] = useState(false);
	const speechConfig = useRef(null);
	const audioConfig = useRef(null);
	const recognizer = useRef(null);

	const [myTranscript, setMyTranscript] = useState("");
	const [recognizingTranscript, setRecTranscript] = useState("");

	useEffect(() => {
		speechConfig.current = sdk.SpeechConfig.fromSubscription(
			SPEECH_KEY,
			SPEECH_REGION
		);
		speechConfig.current.speechRecognitionLanguage = "hi-IN";

		audioConfig.current = sdk.AudioConfig.fromDefaultMicrophoneInput();
		recognizer.current = new sdk.SpeechRecognizer(
			speechConfig.current,
			audioConfig.current
		);

		const processRecognizedTranscript = (event) => {
			const result = event.result;
			console.log("Recognition result:", result);

			if (result.reason === sdk.ResultReason.RecognizedSpeech) {
				const transcript = result.text;
				console.log("Transcript: -->", transcript);
				// Call a function to process the transcript as needed

				setMyTranscript(transcript);
			}
		};

		const processRecognizingTranscript = (event) => {
			const result = event.result;
			console.log("Recognition result:", result);
			if (result.reason === sdk.ResultReason.RecognizingSpeech) {
				const transcript = result.text;
				console.log("Transcript: -->", transcript);
				// Call a function to process the transcript as needed

				setRecTranscript(transcript);
			}
		};

		recognizer.current.recognized = (s, e) =>
			processRecognizedTranscript(e);
		recognizer.current.recognizing = (s, e) =>
			processRecognizingTranscript(e);

		recognizer.current.startContinuousRecognitionAsync(() => {
			console.log("Speech recognition started.");
			setIsListening(true);
		});

		return () => {
			recognizer.current.stopContinuousRecognitionAsync(() => {
				setIsListening(false);
			});
		};
	}, []);

	const pauseListening = () => {
		setIsListening(false);
		recognizer.current.stopContinuousRecognitionAsync();
		console.log("Paused listening.");
	};

	const resumeListening = () => {
		if (!isListening) {
			setIsListening(true);
			recognizer.current.startContinuousRecognitionAsync(() => {
				console.log("Resumed listening...");
			});
		}
	};

	const stopListening = () => {
		setIsListening(false);
		recognizer.current.stopContinuousRecognitionAsync(() => {
			console.log("Speech recognition stopped.");
		});
	};

	return (
		<div>
			<button className="btn" onClick={pauseListening}>
				Pause Listening
			</button>
			<button className="btn" onClick={resumeListening}>
				Resume Listening
			</button>
			<button className="btn" onClick={stopListening}>
				Stop Listening
			</button>

			<div>
				<div>Recognizing Transcript : {recognizingTranscript}</div>

				<div>RecognizedTranscript : {myTranscript}</div>
			</div>
		</div>
	);
}
