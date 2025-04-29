import {notFound} from 'next/navigation';
import {Locale, NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import {routing} from '@/i18n/routing';
import { Navbar } from '@/components/Navbar';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>next-intl & next-auth</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen bg-background text-text">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <footer className="mt-auto py-6 text-center text-sm text-text/60">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}