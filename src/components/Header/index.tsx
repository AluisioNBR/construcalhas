import { Main } from './main';
import { NavBar } from './navBar';

export function Header() {
	return (
		<header className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<Main />

			<br />

			<NavBar />
		</header>
	);
}
