'use client';

import { experience } from '@/data/experience';
import { useTranslations } from 'next-intl';

function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
  });
}

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="text-center text-text/60 mb-12">{t('subtitle')}</p>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-secondary/20 transform -translate-x-1/2" />

          {experience.map((job, index) => (
            <div
              key={`${job.company}-${job.startDate}`}
              className={`mb-12 md:flex ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 mt-1.5" />
                
                {/* Content */}
                <div className={`pl-6 md:px-8 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-6 rounded-lg bg-background border border-secondary/20 hover:border-accent/50 transition-colors">
                    <h3 className="text-xl font-semibold text-accent">{job.title}</h3>
                    <p className="text-lg font-medium mt-1">{job.company}</p>
                    <p className="text-sm text-text/60 mt-1">
                      {formatDate(job.startDate, 'en')} -{' '}
                      {job.endDate ? formatDate(job.endDate, 'en') : t('present')}
                    </p>
                    <p className="text-sm text-text/60 mt-1">{job.location}</p>

                    <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="text-text/80">
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}