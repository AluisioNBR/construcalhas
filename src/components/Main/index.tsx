import { Intro } from './intro'
import { About } from './about'
import { Feedbacks } from './feedbacks'
import { Products } from './products'
import { Services } from './services'

export function Main() {
	return (
		<main className="flex flex-col row-start-2 items-center sm:items-start">
			<Intro />

			<About />

			<Services />

			<Products />

			<Feedbacks />
		</main>
	)
}
