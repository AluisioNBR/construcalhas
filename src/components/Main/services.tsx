import Image from 'next/image';

export function Services() {
	return (
		<article
			className="flex flex-row md:justify-end justify-center w-full bg-red-700 text-white"
			id="services"
		>
			<div className="md:block hidden relative h-[32rem] overflow-hidden">
				<Image
					src="/images/services-img.jpg"
					alt=""
					width={256 * 4}
					height={256 * 2}
				/>
			</div>

			<div className="flex flex-col gap-4 items-center lg:w-2/5 md:p-24 p-16">
				<h2 className="text-3xl font-bold lg:text-left text-center">
					CONSTRUÇÃO E MANUTENÇÃO DE TELHADOS E CALHAS
				</h2>

				<p className="text-lg lg:text-left text-center">
					<b>O QUE FAZEMOS</b>
					<br />
					<br />
					Construção e reforma de telhados e fabricação, manutenção e instalação
					de calhas
				</p>
			</div>
		</article>
	);
}
