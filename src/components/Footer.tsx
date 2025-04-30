'use client';

import { useTranslations } from 'next-intl';
import { profile } from '@/data/profile';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="py-8 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-text/60">
              © {new Date().getFullYear()} {profile.name}. {t('common.allRightsReserved')}
            </p>
          </div>
          <div className="flex gap-6">
            {Object.entries(profile.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text/60 hover:text-accent transition-colors"
              >
                <span className="capitalize">{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}