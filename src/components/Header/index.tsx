import { Main } from './main';
import { NavBar } from './navBar';

/**
 * This function represents the Header component of an application.
 * It renders a header element with a blue background color, white text color, and full width.
 * The header contains two child components: Main and NavBar.
 *
 * @returns {JSX.Element} - A JSX element representing the Header component.
 */
export function Header() {
	return (
		<header className="flex flex-col justify-start items-center bg-blue-800 text-white w-full">
			<Main />

			<NavBar />
		</header>
	);
}
