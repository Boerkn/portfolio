'use client';

import {useParams} from 'next/navigation';
import {Locale, useTranslations} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';

type Props = {
    children: ReactNode;
    defaultValue: string;
    value: string;
};

export default function LocaleSwitcherSelect({
                                                 children,
                                                 defaultValue,
                                                 value
                                             }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value as Locale;
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                {pathname, params},
                {locale: nextLocale}
            );
        });
    }

    return (
        <div className="relative">
            <select
                defaultValue={defaultValue}
                value={value}
                disabled={isPending}
                onChange={onSelectChange}
                className="appearance-none bg-secondary/10 rounded-md pl-3 pr-8 py-2 text-sm cursor-pointer hover:bg-secondary/20 transition-colors"
                aria-label={t('common.changeLanguage')}
            >
                {children}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text">
                <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
