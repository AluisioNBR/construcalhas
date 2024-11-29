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
		'Especialistas em telhados e calhas, a Construcalhas oferece soluções completas e de alta qualidade para proteção e acabamento do seu imóvel. Confiança e durabilidade em cada projeto!',
};

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
				{children}
			</body>
		</html>
	);
}
