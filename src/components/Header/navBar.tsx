'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function NavBar() {
	const [windowSize, setWindowSize] = useState(800);
	const [isNavActive, setIsNavActive] = useState(
		windowSize > 767 ? true : false
	);
	const menuClick = () => setIsNavActive((prevState) => !prevState);

	useEffect(
		() => setIsNavActive(windowSize > 767 ? true : false),
		[windowSize]
	);

	useEffect(() => {
		window.addEventListener('resize', () => setWindowSize(window.innerWidth));
	}, []);

	return (
		<div className="flex flex-col md:items-center items-end md:block w-full py-4 border-t-[1px] border-[#fff5]">
			<button
				className="md:hidden block md:mx-0 mx-8"
				onClick={menuClick}
			>
				<Image
					className="hover:opacity-50 active:opacity-25 hover:animate-hoverLink"
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

function NavButton({ link, children }: NavButtonType) {
	return (
		<Link
			className="text-xl font-bold hover:text-black"
			href={link}
		>
			{children}
		</Link>
	);
}
