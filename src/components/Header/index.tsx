import { Main } from './main';
import { NavBar } from './navBar';

export function Header() {
	return (
		<header className="flex flex-col justify-start items-center bg-red-700 w-full">
			<Main />

			<NavBar />
		</header>
	);
}