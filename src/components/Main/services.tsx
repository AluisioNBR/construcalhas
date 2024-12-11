import Image from 'next/image';

/**
 * This function represents the Services section of a website. It returns a React component
 * that displays an image, a title, and a description of the services offered.
 *
 * @returns {React.ReactElement} - A React component representing the Services section.
 */
export function Services() {
	return (
		<article
			className="flex flex-row md:justify-end justify-center w-full bg-blue-800 text-white"
			id="services"
		>
			<div className="md:block hidden relative h-[35rem] overflow-hidden">
				<Image
					src="/images/services-img.jpg"
					alt=""
					width={256 * 4}
					height={256 * 2}
				/>
			</div>

			<div className="flex flex-col gap-4 items-center lg:w-2/5 md:p-24 p-16">
				<h2 className="text-3xl font-bold lg:text-left text-center">
					CONSTRUÇÃO E MANUTENÇÃO DE CALHAS E TELHADOS
				</h2>

				<p className="text-lg lg:text-left text-center">
					<b>O QUE FAZEMOS</b>
					<br />
					<br />
					Construção e reforma de telhados e fabricação, manutenção e instalação
					de calhas, rufos, pingadeiras , coifas e outros.
				</p>
			</div>
		</article>
	);
}
