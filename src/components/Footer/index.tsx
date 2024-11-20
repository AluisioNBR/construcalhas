import { Main } from './main';

export function Footer() {
	return (
		<footer
			id="contact"
			className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
		>
			<Main />

			<Rights />
		</footer>
	);
}

function Rights() {
	return (
		<div>
			<p>Lorem @ Todos os direitos reservados</p>
		</div>
	);
}
