import { Intro } from './intro';
import { About } from './about';
import { Feedbacks } from './feedbacks';
import { Products } from './products';
import { Services } from './services';

/**
 * The Main component is the main container for the application,
 * displaying different sections such as Intro, About, Services, Products, and Feedbacks.
 *
 * @returns {JSX.Element} - The Main component with its child sections.
 */
export function Main() {
	return (
		<main className="flex flex-col row-start-2 items-center sm:items-start w-full">
			<Intro />

			<About />

			<Services />

			<Products />

			<Feedbacks />
		</main>
	);
}
