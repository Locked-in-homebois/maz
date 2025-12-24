import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"; // Note the extra '../' since we moved deeper
import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/ui/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MAZ",
	description: "Mohammed-Azzam Ahdab",
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	// Ensure the params are awaited
	const { locale } = await params;

	// Validate that the incoming `locale` parameter is valid
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Provide all messages to the client side is the easiest way to get started
	const messages = await getMessages();

	// Set direction based on locale
	const dir = locale === "ar" ? "rtl" : "ltr";

	return (
		<html lang={locale} dir={dir}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
