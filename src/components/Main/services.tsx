export function Services() {
	return (
		<article
			className="flex flex-col"
			id="service"
		>
			<ServiceSection title="Construção e manutenção de telhados e calhas">
				<>
					<b>O QUE FAZEMOS</b>
					<br />
					Construção e reforma de telhados e fabricação, manutenção e instalação
					de calhas, rufos, pingadeiras e outros
				</>
			</ServiceSection>

			<ServiceSection title="Construção civil e reforma em geral">
				Construção e reforma de casas e sobrados até 4 andares, acabamentos,
				pinturas, colocação de pisos e porcelanatos, entre outros
			</ServiceSection>

			<ServiceSection title="Construção de coberturas e barracões de estruturas metálicas">
				<>
					<b>O QUE FAZEMOS</b>
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
	children: string | JSX.Element | JSX.Element[];
}

function ServiceSection({ title, children }: ServiceSectionType) {
	return (
		<div className="flex flex-col">
			<h2>{title}</h2>
			<p>{children}</p>
		</div>
	);
}
