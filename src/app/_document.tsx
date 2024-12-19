import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

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
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<Script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=AW-11505106929`}
				/>
				<Script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}

						gtag('js', new Date());
						gtag('config', 'AW-11505106929'
						gtag('event', 'conversion', {
							send_to: 'AW-11505106929/zyAiCM_Xo_kZEPH_h-4q',
							value: 1.0,
							currency: 'BRL',
						});
						`,
					}}
				/>
				<Script
					dangerouslySetInnerHTML={{
						__html: `
						function gtag_report_conversion(url) {
						var callback = function () {
							if (typeof(url) != 'undefined') {
								window.location = url;
							}
						};
						gtag('event', 'conversion', {
								'send_to': 'AW-11505106929/zyAiCM_Xo_kZEPH_h-4q',
								'value': 1.0,
								'currency': 'BRL',
								'event_callback': callback
						});
						return false;
					}
					`,
					}}
				/>
			</Head>
			<body>
				<Main />
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<Script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=AW-11505106929`}
				/>
				<Script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}

						gtag('js', new Date());
						gtag('config', 'AW-11505106929'
						gtag('event', 'conversion', {
							send_to: 'AW-11505106929/zyAiCM_Xo_kZEPH_h-4q',
							value: 1.0,
							currency: 'BRL',
						});
						`,
					}}
				/>
				<Script
					dangerouslySetInnerHTML={{
						__html: `
						function gtag_report_conversion(url) {
						var callback = function () {
							if (typeof(url) != 'undefined') {
								window.location = url;
							}
						};
						gtag('event', 'conversion', {
								'send_to': 'AW-11505106929/zyAiCM_Xo_kZEPH_h-4q',
								'value': 1.0,
								'currency': 'BRL',
								'event_callback': callback
						});
						return false;
					}
					`,
					}}
				/>
				<NextScript />
			</body>
		</Html>
	);
}
