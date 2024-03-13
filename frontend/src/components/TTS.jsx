import React, { useEffect } from "react";
import Speech from "react-speech";
import axios from "axios";

export default function TTS() {
	const translate = async (text, lang) => {
		let url = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${lang}`;
		let data = [{ Text: text }];
		let config = {
			headers: {
				"Ocp-Apim-Subscription-Key": "ea89c26c6a294d708457de739a84dc9d",
				"Content-Type": "application/json",
				"Ocp-Apim-Subscription-Region": "eastus",
			},
		};
		let res = await axios.post(url, data, config).then((e) => {
			return e.data[0].translations[0].text;
		});
		console.log(res);
		return res;
	};

	useEffect(() => {
		translate("मेरा नाम जॉय है", "en");
	});
	return (
		<div className="">
			<Speech
				textAsButton={true}
				text="Welcome to react speech. my name is joy, im a boy, i play with toy. my name is joy, im a boy, i play with toy. my name is joy, im a boy, i play with toy. my name is joy, im a boy, i play with toy"
			/>
		</div>
	);
}
