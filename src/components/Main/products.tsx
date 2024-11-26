import Image from 'next/image';

export function Products() {
	return (
		<article
			className="flex md:flex-row flex-col-reverse items-center justify-evenly w-full"
			id="products"
		>
			<div className="grid md:grid-cols-4 grid-cols-2">
				<Image
					src="/images/1.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
				<Image
					src="/images/2.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
				<Image
					src="/images/3.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
				<Image
					src="/images/4.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
				<Image
					src="/images/5.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
				<Image
					src="/images/6.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
				<Image
					src="/images/7.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
				<Image
					src="/images/8.png"
					alt="apenas teste"
					width={128}
					height={128}
				/>
			</div>

			<div className="w-1/4">
				<h2 className="text-3xl font-bold">Nossos Produtos</h2>

				<p>
					Trabalhamos com produtos de alta qualidade que fornecem durabilidade e
					segurança para seu imóvel.
				</p>
			</div>
		</article>
	);
}
