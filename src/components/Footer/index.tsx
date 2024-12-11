import { Main } from './main';

/**
 * Renders the footer component of the application.
 *
 * This component includes the main content of the footer and a rights section.
 * It uses the 'contact' id for potential scroll targeting or styling purposes.
 *
 * @returns {JSX.Element} A footer element containing the Main component and Rights component.
 */
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

/**
 * Renders the rights section of the footer.
 *
 * This component displays a copyright notice or rights reservation text.
 * It's styled to be responsive, adjusting its layout and alignment based on screen size.
 *
 * @returns {JSX.Element} A div element containing the rights text.
 */
function Rights() {
	return (
		<div className="flex items-center md:justify-start justify-center bg-gray-300 w-full p-4">
			<p className="text-gray-800 text-sm text-center md:ml-24 md:w-full">
				Construcalhas @ Todos os direitos reservados
			</p>
		</div>
	);
}
