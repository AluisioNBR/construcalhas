import { Html, Head, Main, NextScript } from 'next/document';

/**
 * The _document component is a custom Next.js document that wraps the entire application.
 * It is used to add custom <html>, <head>, and <body> elements to the rendered HTML.
 *
 * @returns {JSX.Element} The custom _document component.
 */
export default function Document() {
	return (
		<Html>
			<Head>
				<link
					rel="icon"
					href="/icon.png"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
