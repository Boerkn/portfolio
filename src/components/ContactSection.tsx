'use client';

import { useTranslations } from 'next-intl';
import { profile } from '@/data/profile';
import { AnimateOnScroll } from './AnimateOnScroll';

export function ContactSection() {
  const t = useTranslations();

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-text/60 text-lg">
              {t('contact.subtitle')}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll delay={0.1}>
            <div className="bg-secondary/5 rounded-xl p-8">
              <form
                action={`mailto:${profile.email}`}
                method="GET"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.name')} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.email')} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.message')} <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    rows={5}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-accent rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    {t('contact.send')}
                  </button>
                </div>
              </form>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="mt-12 text-center text-text/60">
              <p className="mb-4">{t('contact.or')}</p>
              <div className="flex justify-center gap-6">
                {Object.entries(profile.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    <span className="capitalize">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}