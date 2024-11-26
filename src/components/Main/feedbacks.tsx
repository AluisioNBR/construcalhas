'use client';
import { useState, useEffect } from 'react';
import {
	FeedbackSelectorType,
	FeedbackType,
} from './feedbacksComplements/types';
import { feedbacks } from './feedbacksComplements';

export function Feedbacks() {
	const [feedbackIndex, setFeedbackIndex] = useState(0);
	const selectFeedback = (selected: number) => setFeedbackIndex(selected);

	const [currentFeedback, setCurrentFeedback] = useState<FeedbackType>(
		feedbacks[feedbackIndex]
	);

	useEffect(
		() => setCurrentFeedback(feedbacks[feedbackIndex]),
		[feedbackIndex]
	);

	const selectors: JSX.Element[] = [];
	for (let index = 0; index < feedbacks.length; index++) {
		selectors.push(
			<FeedbackSelector
				key={`selector-${index}`}
				onClick={() => selectFeedback(index)}
				checked={index == 0}
			/>
		);
	}

	return (
		<article
			className="flex flex-col items-center gap-4 p-16 bg-gray-200 w-full text-black"
			id="feedbacks"
		>
			<h2 className="text-3xl font-bold">
				O QUE NOSSOS CLIENTES DIZEM SOBRE NÓS
			</h2>

			<div className="flex flex-col items-center w-1/2 h-80">
				<p className="text-white text-center text-lg bg-red-500 p-4">
					{currentFeedback?.feedback}
				</p>
			</div>

			<p>{currentFeedback?.client}</p>

			<div className="flex gap-2">{selectors}</div>
		</article>
	);
}

function FeedbackSelector({ onClick, checked }: FeedbackSelectorType) {
	return (
		<input
			onClick={onClick}
			defaultChecked={checked}
			type="radio"
			name="feedback"
			id=""
		/>
	);
}
