import Link from 'next/link';
import Image from 'next/image';

export function WhatsappButton() {
	return (
		<Link
			target="_blank"
			href="https://api.whatsapp.com/send?phone=5541999615698"
			className="fixed bottom-4 right-4"
		>
			<button className="bg-green-500 rounded-full p-4 hover:opacity-80">
				<Image
					src="/images/whatsapp-logo.png"
					alt="(41) 999615698 - Guilherme"
					width={40}
					height={40}
				/>
			</button>
		</Link>
	);
}
