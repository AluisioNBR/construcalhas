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
	const [animateFeedback, setAnimateFeedback] = useState(
		'animate-fade-left animate-duration-500 animate-delay-100 animate-ease-out'
	);

	useEffect(() => {
		setCurrentFeedback(feedbacks[feedbackIndex]);
		setTimeout(() => setAnimateFeedback(''), 600);
	}, [feedbackIndex]);

	const selectors: JSX.Element[] = [];
	for (let index = 0; index < feedbacks.length; index++) {
		selectors.push(
			<FeedbackSelector
				key={`selector-${index}`}
				onClick={() => {
					selectFeedback(index);
					setAnimateFeedback(
						'animate-fade-left animate-duration-500 animate-delay-100 animate-ease-out'
					);

					setTimeout(() => setAnimateFeedback(''), 600);
				}}
				checked={index == 0}
			/>
		);
	}

	return (
		<article
			className="flex flex-col items-center gap-4 p-16 px-2 bg-gray-200 w-full text-black"
			id="feedbacks"
		>
			<h2 className="text-3xl text-center font-bold">
				O QUE NOSSOS CLIENTES DIZEM SOBRE NÓS
			</h2>

			<div
				className={`flex flex-col items-center md:w-3/4 w-full h-80 ${animateFeedback}`}
			>
				<p className="text-white text-center md:text-lg text-base bg-red-500 p-4">
					"{currentFeedback?.feedback}"
				</p>
			</div>

			<p className={animateFeedback}>{currentFeedback?.client}</p>

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
