export interface FeedbackType {
	client: string;
	feedback: string;
}

export interface FeedbackSelectorType {
	onClick: () => void;
	checked?: boolean;
}
