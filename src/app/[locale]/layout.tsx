import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/ui/footer/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
    variable: "--font-ibm-plex-sans-arabic",
    subsets: ["arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "MAZ",
	description: "Mohammed-Azzam Ahdab",
};

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: Promise<{locale: string}>;
}) {
	const {locale} = await params;

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	const messages = await getMessages();
    
    // Select the primary font variable based on locale
    const fontVariable = locale === 'ar' ? ibmPlexSansArabic.variable : geistSans.variable;

	return (
		<html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
			<body
				className={`${fontVariable} ${geistMono.variable} antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
