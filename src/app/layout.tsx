import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

const montserrat = localFont({
	src: './fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
	variable: '--font-montserrat-sans',
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Construcalhas',
	description:
		'Especialistas em calhas e telhados, a Construcalhas oferece soluções completas e de alta qualidade para proteção e acabamento do seu imóvel. Confiança e durabilidade em cada projeto!',
};

/**
 * The RootLayout component is the main layout wrapper for the entire application.
 * It sets up the HTML structure, global styles, and integrates the Speed Insights component.
 *
 * @param children - The React children components to be rendered within the layout.
 *
 * @returns The RootLayout component with the specified children and layout structure.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-br"
			suppressHydrationWarning
		>
			<body
				className={`${montserrat.variable} ${geistMono.variable} antialiased`}
			>
				<SpeedInsights />

				{children}
			</body>
		</html>
	);
}
