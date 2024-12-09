import Image from 'next/image';

export function Intro() {
	return (
		<article className="flex flex-col gap-4 md:p-[10.5rem] px-16 py-32 bg-blend-overlay bg-cover bg-no-repeat bg-left bg-[url('/images/telhado2-1.jpg')] bg-stone-800 w-full">
			<div className="flex flex-row items-center gap-2 m-4">
				<Image
					src="/images/icon.png"
					alt="logo"
					width={32}
					height={32}
				/>
				<p className="md:text-2xl text-xl text-blue-500">Calhas e telhados</p>
			</div>

			<h1 className="md:text-5xl text-4xl text-white font-bold m-4">
				ESPECIALISTAS
				<br />A MAIS DE 15 ANOS
			</h1>
		</article>
	);
}
