import Link from 'next/link';
import { ContactType } from './types';
import Image from 'next/image';

/**
 * The `Main` component represents the main section of Footer component, which includes a title and contact information.
 *
 * @returns {JSX.Element} A JSX element containing the main section with a title and contact details.
 */
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
						phone: '(41) 999615698',
						link: 'https://api.whatsapp.com/send?phone=5541999615698',
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

/**
 * The `Contact` component displays contact information, including an address and optional contact forms.
 *
 * @param {Object} props - The props for the component.
 * @param {ReactNode} props.children - The child content, typically the location name.
 * @param {Object} props.adress - The address details.
 * @param {string} props.adress.phone - The address or phone number to display.
 * @param {string} props.adress.link - The link to the address location (e.g., Google Maps).
 * @param {Object} [props.form1] - The first contact form details (optional).
 * @param {string} props.form1.owner - The name of the contact owner.
 * @param {string} props.form1.phone - The contact phone number.
 * @param {string} props.form1.link - The link to reach the contact, typically via WhatsApp.
 * @param {Object} [props.form2] - The second contact form details (optional).
 * @param {string} props.form2.owner - The name of the second contact owner.
 * @param {string} props.form2.phone - The second contact phone number.
 * @param {string} props.form2.link - The link to reach the second contact, typically via WhatsApp.
 *
 * @returns {JSX.Element} A JSX element displaying contact information and links.
 */

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
