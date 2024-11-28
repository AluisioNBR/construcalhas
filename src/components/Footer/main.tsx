import Link from 'next/link';
import { ContactType } from './types';
import Image from 'next/image';

export function Main() {
	return (
		<div className="flex flex-col md:items-start items-center gap-4 bg-red-700 p-12 md:px-32 w-full text-white">
			<h2 className="text-4xl">Título</h2>

			<div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between w-full">
				<Contact
					adress={{ name: 'Endereço exemplo', link: '#' }}
					form1={{
						name: '(41) 99615698',
						link: 'https://api.whatsapp.com/send?phone=554199615698',
					}}
				>
					Cidade exemplo 1
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
					<span className="text-lg">{adress.name}</span>
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
						<span className="text-lg">{form1.name}</span>
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
						<span className="text-lg">{form2.name}</span>
					</Link>
				) : null}
			</div>
		</div>
	);
}
