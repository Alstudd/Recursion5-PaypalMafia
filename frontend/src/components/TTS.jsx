import React from "react";
import Speech from "react-speech";

export default function TTS() {
	return (
		<div className="">
			<Speech
				textAsButton={true}
				text="Welcome to react speech. my name is joy, im a boy, i play with toy. my name is joy, im a boy, i play with toy. my name is joy, im a boy, i play with toy. my name is joy, im a boy, i play with toy"
			/>
		</div>
	);
}
