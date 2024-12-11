'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * The Main component is responsible for rendering the main section of header of the application.
 * It displays the company logo, name, and contact information using the Contact component.
 * The Contact component is conditionally rendered based on the window size and user agent.
 *
 * @returns {JSX.Element} - The JSX element representing the Main component.
 */
export function Main() {
	return (
		<div className="flex md:flex-row flex-col md:gap-6 items-center justify-evenly w-full py-4">
			<div className="flex flex-row items-center gap-2">
				<Image
					src="/images/icon-2.png"
					alt="logo"
					width={52}
					height={52}
					className="rounded-2xl"
				/>
				<h2 className="text-4xl">Construcalhas</h2>
			</div>

			<Contact
				local="Curitiba - PR"
				link="https://api.whatsapp.com/send?phone=5541999615698"
			>
				(41) 999615698
			</Contact>

			<Contact
				local="Curitiba - PR"
				link="https://api.whatsapp.com/send?phone=5541998761910"
			>
				(41) 998761910
			</Contact>
		</div>
	);
}

interface ContactType {
	local: string;
	link: string;
	children: string;
}

/**
 * The Contact component is responsible for rendering a contact information block.
 * It conditionally renders based on the window size and user agent.
 *
 * @param local - The locality of the contact information.
 * @param link - The link to the contact information (e.g., WhatsApp number).
 * @param children - The contact information (e.g., phone number).
 *
 * @returns {JSX.Element} - The JSX element representing the Contact component.
 */
function Contact({ local, link, children }: ContactType) {
	const [windowSize, setWindowSize] = useState(800);
	const [isVisible, setisVisible] = useState(true);

	useEffect(
		() =>
			window.addEventListener('resize', () => setWindowSize(window.innerWidth)),
		[]
	);

	useEffect(() => {
		const userAgent = navigator.userAgent.toLocaleLowerCase();
		setisVisible(
			windowSize < 768 || userAgent.includes('mobile') ? false : true
		);
	}, [windowSize]);

	return (
		<div>
			<Link
				className={`${
					isVisible ? 'flex' : 'hidden absolute'
				} flex-row items-center gap-4`}
				href={link}
				target="_blank"
			>
				<Image
					className="hover:opacity-50"
					width={48}
					height={48}
					src="/images/whatsapp-logo.png"
					alt={children}
				/>

				<div className="flex flex-col items-start">
					<span className="text-sm">{local}</span>
					<span className="text-2xl font-bold">{children}</span>
				</div>
			</Link>
		</div>
	);
}
