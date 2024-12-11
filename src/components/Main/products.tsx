import Image from 'next/image';

/**
 * This function represents the Products section of a website. It displays a grid of images and a brief description.
 *
 * @returns {JSX.Element} - A React component that renders the Products section.
 */
export function Products() {
	return (
		<article
			className="flex md:flex-row flex-col-reverse items-center justify-evenly gap-4 p-16 w-full bg-gray-100 text-black"
			id="products"
		>
			<div className="grid md:grid-cols-4 grid-cols-2 gap-4">
				<Image
					src="/images/1.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
				<Image
					src="/images/2.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
				<Image
					src="/images/3.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
				<Image
					src="/images/4.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
				<Image
					src="/images/5.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
				<Image
					src="/images/6.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
				<Image
					src="/images/7.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
				<Image
					src="/images/8.png"
					alt="apenas teste"
					width={156}
					height={156}
				/>
			</div>

			<div className="md:w-1/4 w-full">
				<h2 className="text-3xl font-bold md:text-right text-center">
					Nossos Produtos
				</h2>

				<p className="md:text-right text-center">
					Trabalhamos com produtos de alta qualidade que fornecem durabilidade e
					segurança para seu imóvel.
				</p>
			</div>
		</article>
	);
}
