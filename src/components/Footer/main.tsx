import Link from 'next/link';
import { ContactType } from './types';
import Image from 'next/image';

export function Main() {
	return (
		<div className="flex flex-col md:items-start items-center gap-8 bg-blue-800 p-12 md:px-32 w-full text-white">
			<h2 className="text-4xl">Construcalhas</h2>

			<div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center md:justify-start justify-center w-full">
				<Contact
					adress={{
						phone: 'Rua Rodolfo Paulo Herz n°09',
						link: 'https://maps.app.goo.gl/1Zfi1RC4S8sjMYg57',
					}}
					form1={{
						owner: 'Guilherme',
						phone: '(41) 99615698',
						link: 'https://api.whatsapp.com/send?phone=554199615698',
					}}
					form2={{
						owner: 'Maicon',
						phone: '(41) 998761910',
						link: 'https://api.whatsapp.com/send?phone=5541998761910',
					}}
				>
					Curitiba - PR
				</Contact>
			</div>
		</div>
	);
}

function Contact({ children, adress, form1, form2 }: ContactType) {
	return (
		<div>
			<h3 className="text-3xl">{children}</h3>

			<div className="flex flex-col gap-4">
				<Link
					target="_blank"
					href={adress.link}
					className="flex flex-row items-center gap-1"
				>
					<Image
						className="hover:opacity-50"
						width={20}
						height={20}
						src="/images/location-pin.png"
						alt={children}
					/>
					<span className="text-lg">{adress.phone}</span>
				</Link>

				{form1 ? (
					<Link
						target="_blank"
						href={form1.link}
						className="flex flex-row items-center gap-1"
					>
						<Image
							className=" hover:opacity-50"
							width={20}
							height={20}
							src="/images/whatsapp-logo.png"
							alt={children}
						/>
						<span className="text-lg">
							{form1.phone} - {form1.owner}
						</span>
					</Link>
				) : null}
				{form2 ? (
					<Link
						target="_blank"
						href={form2.link}
						className="flex flex-row items-center gap-1"
					>
						<Image
							className="hover:opacity-50"
							width={20}
							height={20}
							src="/images/whatsapp-logo.png"
							alt={children}
						/>
						<span className="text-lg">
							{form2.phone} - {form2.owner}
						</span>
					</Link>
				) : null}
			</div>
		</div>
	);
}
