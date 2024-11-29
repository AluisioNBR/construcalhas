import { Main } from './main';

export function Footer() {
	return (
		<footer
			id="contact"
			className="flex flex-col items-center justify-center w-full"
		>
			<Main />

			<Rights />
		</footer>
	);
}

function Rights() {
	return (
		<div className="flex items-center md:justify-start justify-center bg-gray-300 w-full p-4">
			<p className="text-gray-800 text-sm text-center md:ml-24 md:w-full">
				Construcalhas @ Todos os direitos reservados
			</p>
		</div>
	);
}
