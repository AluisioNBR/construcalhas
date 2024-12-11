'use client';
import { useState, useEffect } from 'react';
import {
	FeedbackSelectorType,
	FeedbackType,
} from './feedbacksComplements/types';
import { feedbacks } from './feedbacksComplements';

/**
 * The Feedbacks component is responsible for displaying feedbacks from clients and allowing users to select a specific feedback.
 * It uses React hooks to manage state and perform side effects.
 *
 * @returns A JSX element representing the Feedbacks component.
 */
export function Feedbacks() {
	// State variables for managing the selected feedback index and the current feedback.
	const [feedbackIndex, setFeedbackIndex] = useState(0);
	const selectFeedback = (selected: number) => setFeedbackIndex(selected);

	const [currentFeedback, setCurrentFeedback] = useState<FeedbackType>(
		feedbacks[feedbackIndex]
	);

	// State variable for managing the animation class for the feedback display.
	const [animateFeedback, setAnimateFeedback] = useState(
		'animate-fade-left animate-duration-500 animate-delay-100 animate-ease-out'
	);

	// Effect hook to update the current feedback and reset the animation class when the feedback index changes.
	useEffect(() => {
		setCurrentFeedback(feedbacks[feedbackIndex]);
		setTimeout(() => setAnimateFeedback(''), 600);
	}, [feedbackIndex]);

	// Array to store the FeedbackSelector components.
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

	// JSX element representing the Feedbacks component.
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
				<p className="text-white text-center md:text-lg text-base bg-blue-600 p-4">
					"{currentFeedback?.feedback}"
				</p>
			</div>

			<p className={animateFeedback}>{currentFeedback?.client}</p>

			<div className="flex gap-2">{selectors}</div>
		</article>
	);
}

/**
 * A component that renders a radio button for selecting feedback.
 *
 * @param props - The properties for the FeedbackSelector component.
 * @param props.onClick - A function to be called when the radio button is clicked.
 * @param props.checked - A boolean indicating whether the radio button is checked.
 *
 * @returns A JSX element representing the FeedbackSelector component.
 */
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
