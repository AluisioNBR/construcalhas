import { Main } from './main';
import { NavBar } from './navBar';

export function Header() {
	return (
		<header className="flex flex-col justify-start items-center bg-blue-800 text-white w-full">
			<Main />

			<NavBar />
		</header>
	);
}
