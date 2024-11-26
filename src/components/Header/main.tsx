import Link from 'next/link';

export function Main() {
	return (
		<div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-evenly w-full py-4">
			<h2 className="text-4xl">Título</h2>

			<Contact
				local="Cidade exemplo - SLA"
				link="#"
			>
				(90)9986860021
			</Contact>

			<Contact
				local="Cidade exemplo - SLA"
				link="#"
			>
				(90)9986860021
			</Contact>
		</div>
	);
}

interface ContactType {
	local: string;
	link: string;
	children: string;
}

function Contact({ local, link, children }: ContactType) {
	return (
		<div>
			<Link
				className="flex flex-row items-center gap-4"
				href={link}
			>
				<img
					className="w-[48px] h-[48px] hover:opacity-50"
					src="/images/whatsapp-logo.png"
					alt={children}
				/>

				<div className="flex flex-col items-start">
					<span className="text-sm">{local}</span>
					<span className="text-2xl font-bold">{children}</span>
				</div>
			</Link>
		</div>
	);
}
