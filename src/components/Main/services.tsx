export function Services() {
	return (
		<article
			className="flex flex-col w-full"
			id="service"
		>
			<ServiceSection
				style="bg-red-700 items-end"
				title="CONSTRUÇÃO E MANUTENÇÃO DE TELHADOS E CALHAS"
			>
				<>
					<b>O QUE FAZEMOS</b>
					<br />
					<br />
					Construção e reforma de telhados e fabricação, manutenção e instalação
					de calhas, rufos, pingadeiras e outros
				</>
			</ServiceSection>

			<ServiceSection
				style="bg-stone-800 items-center"
				title="CONSTRUÇÃO CIVIL E REFORMA EM GERAL"
				titleCenter
			>
				Construção e reforma de casas e sobrados até 4 andares, acabamentos,
				pinturas, colocação de pisos e porcelanatos, entre outros
			</ServiceSection>

			<ServiceSection
				style="bg-gray-300 items-start text-black"
				title="CONSTRUÇÃO DE COBERTURAS E BARRACÕES DE ESTRUTURAS METÁLICAS"
			>
				<>
					<b>O QUE FAZEMOS</b>
					<br />
					<br />
					Reforma e construção da fundação a cobertura de barracões de
					estruturas metálicas.
				</>
			</ServiceSection>
		</article>
	);
}

interface ServiceSectionType {
	title: string;
	titleCenter?: boolean;
	style: string;
	children: string | JSX.Element | JSX.Element[];
}

function ServiceSection({
	title,
	titleCenter,
	style,
	children,
}: ServiceSectionType) {
	return (
		<div className={`flex flex-col gap-4 p-28 w-full ${style}`}>
			<h2
				className={`text-3xl font-bold w-2/5 ${
					titleCenter ? 'text-center' : 'text-left'
				}`}
			>
				{title}
			</h2>
			<p className="text-lg w-2/5">{children}</p>
		</div>
	);
}
