import Link from 'next/link';

export function NavBar() {
	return (
		<nav className="flex flex-row items-center justify-between">
			<NavButton link="#about">Sobre nós</NavButton>
			<NavButton link="#services">Serviços</NavButton>
			<NavButton link="#products">Produtos</NavButton>
			<NavButton link="#feedbacks">Depoimentos</NavButton>
			<NavButton link="#contact">Fale Conosco</NavButton>
		</nav>
	);
}

interface NavButtonType {
	link: string;
	children: string;
}

function NavButton({ link, children }: NavButtonType) {
	return (
		<Link
			className="text-2xl"
			href={link}
		>
			{children}
		</Link>
	);
}
