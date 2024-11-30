import Link from 'next/link';
import Image from 'next/image';

export function Main() {
	return (
		<div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-evenly w-full py-4">
			<div className="flex flex-row items-center gap-2">
				<div className="flex items-center justify-center bg-[#fffb] rounded-2xl w-12 h-12 overflow-hidden">
					<Image src="/images/icon.png" alt="logo" width={32} height={32} />
				</div>
				<h2 className="text-4xl">Construcalhas</h2>
			</div>

			<Contact
				local="Curitiba - PR"
				link="https://api.whatsapp.com/send?phone=554199615698"
			>
				(41) 99615698
			</Contact>

			<Contact
				local="Curitiba - PR"
				link="https://api.whatsapp.com/send?phone=5541998761910"
			>
				(41) 998761910
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
				target="_blank"
			>
				<Image
					className="hover:opacity-50"
					width={48}
					height={48}
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
