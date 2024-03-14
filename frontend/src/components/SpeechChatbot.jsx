import React, { useState, useEffect, useRef } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { FaMicrophone, FaStop } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SPEECH_KEY = "e448f4b6437a42a1a35e480d8ab91628";
const SPEECH_REGION = "eastus";

export default function SpeechChatbot({ getSpeechValue }) {
	const [isListening, setIsListening] = useState(false);
	const speechConfig = useRef(null);
	const audioConfig = useRef(null);
	const recognizer = useRef(null);

	const [myTranscript, setMyTranscript] = useState("");
	const [recognizingTranscript, setRecTranscript] = useState("");
	let [isOpen, setIsOpen] = useState(false);

	const [selectedLanguage, setSelectedLanguage] = useState("en-IN");

	const languages = {
		English: "en-IN",
		Hindi: "hi-IN",
		Marathi: "mr-IN",
		Tamil: "ta-IN",
		Telugu: "te-IN",
		Bengali: "bn-IN",
		Gujarati: "gu-IN",
		Kannada: "kn-IN",
		Malayalam: "ml-IN",
		Punjabi: "pa-IN",
		Odia: "or-IN",
		Assamese: "as-IN",
	};

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const handleLanguageChange = (event) => {
		const selectedLanguageValue = event.target.value;
		setSelectedLanguage(selectedLanguageValue);
	};

	useEffect(() => {
		speechConfig.current = sdk.SpeechConfig.fromSubscription(
			SPEECH_KEY,
			SPEECH_REGION
		);
		speechConfig.current.speechRecognitionLanguage = selectedLanguage;

		audioConfig.current = sdk.AudioConfig.fromDefaultMicrophoneInput();
		recognizer.current = new sdk.SpeechRecognizer(
			speechConfig.current,
			audioConfig.current
		);

		const processRecognizedTranscript = (event) => {
			const result = event.result;

			if (result.reason === sdk.ResultReason.RecognizedSpeech) {
				const transcript = result.text;
				setMyTranscript(transcript);
			}
		};

		const processRecognizingTranscript = (event) => {
			const result = event.result;
			console.log("Recognition result:", result);
			if (result.reason === sdk.ResultReason.RecognizingSpeech) {
				const transcript = result.text;
				console.log("Transcript: -->", transcript);

				setRecTranscript(transcript);
			}
		};

		recognizer.current.recognized = (s, e) =>
			processRecognizedTranscript(e);
		recognizer.current.recognizing = (s, e) =>
			processRecognizingTranscript(e);
	}, [selectedLanguage]);

	const startListening = () => {
		recognizer.current.startContinuousRecognitionAsync(() => {
			console.log("Speech recognition started.");
			setIsListening(true);
		});

		// Automatically stop listening after 30 seconds (adjust as needed)
		const stopListeningTimer = setTimeout(() => {
			stopListening();
		}, 30000); // 30 seconds

		return () => {
			clearTimeout(stopListeningTimer); // Clear the timer
			recognizer.current.stopContinuousRecognitionAsync(() => {
				setIsListening(false);
				getSpeechValue({ text: myTranscript, lang: selectedLanguage });
			});
		};
	};

	const stopListening = () => {
		setIsListening(false);
		recognizer.current.stopContinuousRecognitionAsync(() => {
			console.log("Speech recognition stopped.");
			getSpeechValue({ text: myTranscript, lang: selectedLanguage });
		});
		setIsOpen(false);
	};

	return (
		<div>
			<button onClick={openModal}>
				<FaMicrophone className="text-black" />
			</button>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="relative flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Speech To Text
									</Dialog.Title>
									<form className="max-w-sm mx-auto">
										<label
											for="countries"
											className="block mt-3 mb-1 text-sm font-medium text-gray-900"
										>
											Select a Language
										</label>
										<select
											id="countries"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
											onChange={handleLanguageChange}
											value={selectedLanguage}
										>
											<option disabled>
												Choose a Language
											</option>
											{Object.keys(languages).map(
												(key, index) => {
													return (
														<option
															key={index}
															value={
																languages[key]
															}
														>
															{key}
														</option>
													);
												}
											)}
										</select>

										<div className="flex justify-between">
											<button
												onClick={startListening}
												type="button"
												className="flex my-3 gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												<FaMicrophone size={20} />
												Start Listening...
											</button>
											<button
												onClick={stopListening}
												type="button"
												className="flex my-3 gap-3 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
											>
												<FaStop size={20} />
												Stop Listening...
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
}
