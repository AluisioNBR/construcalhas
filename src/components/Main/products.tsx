import Image from 'next/image';

export function Products() {
	return (
		<article
			className="flex flex-col"
			id="products"
		>
			<div className="grid grid-cols-4">
				<Image
					src="/images/1.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
				<Image
					src="/images/2.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
				<Image
					src="/images/3.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
				<Image
					src="/images/4.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
				<Image
					src="/images/5.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
				<Image
					src="/images/6.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
				<Image
					src="/images/7.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
				<Image
					src="/images/8.png"
					alt="apenas teste"
					width={64}
					height={64}
				/>
			</div>

			<h2>Nossos Produtos</h2>

			<p>
				Trabalhamos com produtos de alta qualidade que fornecem durabilidade e
				segurança para seu imóvel.
			</p>
		</article>
	);
}
