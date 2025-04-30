import "../globals.css"
import {hasLocale, Locale, NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ThemeProvider} from 'next-themes';
import {ReactNode} from "react";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

type Props = {
    children: ReactNode;
    params: Promise<{ locale: Locale }>;
};

export default async function Layout({children, params}: Props) {
    const {locale} = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <head>
            <title>Portfolio Berkan Öztürk</title>
        </head>
        <body className="bg-background text-text min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Navbar/>
                <main className="flex-grow pt-16">
                    {children}
                </main>
                <Footer/>
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}