'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

/**
 * The NavBar component is responsible for rendering the navigation bar at the top of the application.
 * It includes a logo, menu button, and navigation links. The navigation bar changes its appearance based on
 * the window size and scroll position.
 *
 * @returns {JSX.Element} - The rendered NavBar component.
 */
export function NavBar() {
	const [windowSize, setWindowSize] = useState(800);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isNavActive, setIsNavActive] = useState(
		windowSize > 767 ? true : false
	);
	const menuClick = () => setIsNavActive((prevState) => !prevState);

	useEffect(() => {
		const userAgent = navigator.userAgent.toLocaleLowerCase();
		setIsNavActive(
			windowSize < 768 || userAgent.includes('mobile') ? false : true
		);
	}, [windowSize]);

	useEffect(() => {
		window.addEventListener('resize', () => setWindowSize(window.innerWidth));
		window.addEventListener('scroll', () => setScrollPosition(window.scrollY));
	}, []);

	return (
		<div
			className={`flex flex-col md:items-center items-end md:block w-full py-4 border-y-[1px] border-[#fff5] bg-blue-800 ${
				scrollPosition > 90 ? 'fixed top-0 z-10' : ''
			}`}
		>
			<button
				className="md:hidden block md:mx-0 mx-8"
				onClick={menuClick}
			>
				<Image
					className="hover:opacity-50 active:opacity-25"
					width={48}
					height={48}
					src="/images/menu.png"
					alt="Menu"
				/>
			</button>

			<nav
				className="md:flex md:flex-row flex-col items-center gap-4 hidden justify-evenly w-full"
				style={{ display: isNavActive ? 'flex' : 'none' }}
			>
				<NavButton link="#about">Sobre nós</NavButton>
				<NavButton link="#services">Serviços</NavButton>
				<NavButton link="#products">Produtos</NavButton>
				<NavButton link="#feedbacks">Depoimentos</NavButton>
				<NavButton link="#contact">Fale Conosco</NavButton>
			</nav>
		</div>
	);
}

interface NavButtonType {
	link: string;
	children: string;
}

/**
 * A functional component that renders a navigation button with a link and children.
 *
 * @param props - The properties of the NavButton component.
 * @param props.link - The URL to navigate when the button is clicked.
 * @param props.children - The text content of the button.
 *
 * @returns {JSX.Element} - The rendered NavButton component.
 */
function NavButton({ link, children }: NavButtonType) {
	return (
		<Link
			className="text-xl font-bold hover:text-black hover:animate-fade animate-duration-150 animate-delay-100 animate-ease-in"
			href={link}
		>
			{children}
		</Link>
	);
}
