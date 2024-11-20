import Link from 'next/link';

export function Main() {
	return (
		<div className="flex flex-row items-center justify-evenly">
			<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

			<Contact
				local="Rua sei lá"
				link="#"
			>
				9986860021
			</Contact>

			<Contact
				local="Rua sei lá"
				link="#"
			>
				9986860021
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
			<p>{local}</p>

			<p>
				<Link
					target="_blank"
					href={link}
				>
					{children}
				</Link>
			</p>
		</div>
	);
}
