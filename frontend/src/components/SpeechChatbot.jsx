import { useEffect, useState } from "react";
import * as speechsdk from "microsoft-cognitiveservices-speech-sdk";

function SpeechChatbot() {
	const [displayText, setDisplayText] = useState(
		"Speak into your microphone..."
	);

	useEffect(() => {
		const setupSpeechRecognition = async () => {
			const tokenObj = await getTokenOrRefresh();
			const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
				tokenObj.authToken,
				tokenObj.region
			);
			speechConfig.speechRecognitionLanguage = "auto";

			const audioConfig =
				speechsdk.AudioConfig.fromDefaultMicrophoneInput();

			const recognizer = new speechsdk.SpeechRecognizer(
				speechConfig,
				audioConfig
			);

			recognizer.recognizeOnceAsync((result) => {
				if (result.reason === speechsdk.ResultReason.RecognizedSpeech) {
					setDisplayText(`RECOGNIZED: Text=${result.text}`);
				} else {
					setDisplayText(
						"ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
					);
				}
			});
		};

		setupSpeechRecognition();
	}, []);

	return (
		<div className="">
			<h1>Speech-to-Text Example</h1>
			<p>{displayText}</p>
		</div>
	);
}

export default SpeechChatbot;
