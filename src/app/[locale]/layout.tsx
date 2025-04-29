import {hasLocale, Locale, NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ThemeProvider} from 'next-themes'
import {ReactNode} from "react";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";

type Props = {
    children: ReactNode;
    params: Promise<{ locale: Locale }>;
};

export default async function Layout({children, params}: Props) {
    const {locale} = await params;
    console.log(locale);
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <head>
            <title></title>
        </head>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}