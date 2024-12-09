import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { WhatsappButton } from '@/components/WhatsappButton/WhatsppButton';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header />

			<Main />

			<Footer />

			<WhatsappButton />
		</div>
	);
}
