import Link from 'next/link';
import { ContactType } from './types';

export function Main() {
	return (
		<div>
			<h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>

			<Contact
				adress={{ name: 'Rua sei lá', link: '#' }}
				form1={{ name: '9986860021', link: '#' }}
				form2={{ name: '9986860021', link: '#' }}
			>
				Local 1
			</Contact>
		</div>
	);
}

function Contact({ children, adress, form1, form2 }: ContactType) {
	return (
		<div>
			<h3>{children}</h3>
			<Link
				target="_blank"
				href={adress.link}
			>
				{adress.name}
			</Link>

			{form1 ? (
				<Link
					target="_blank"
					href={form1.link}
				>
					{form1.name}
				</Link>
			) : null}
			{form2 ? (
				<Link
					target="_blank"
					href={form2.link}
				>
					{form2.name}
				</Link>
			) : null}
		</div>
	);
}
