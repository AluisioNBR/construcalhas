// lib/gtag.ts
export const GA_TRACKING_ID = 'AW-11505106929';

// Rastreia visualizações de página
export const pageview = (url: string) => {
	// @ts-ignore
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

// Rastreia eventos específicos
interface GTagEvent {
	action: string;
	category: string;
	label: string;
	value: number;
}

export const event = ({ action, category, label, value }: GTagEvent) => {
	// @ts-ignore
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
