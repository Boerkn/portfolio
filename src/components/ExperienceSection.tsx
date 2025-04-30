'use client';

import { useTranslations } from 'next-intl';
import { experience } from '@/data/experience';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';

export function ExperienceSection() {
  const t = useTranslations();

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-text/60 text-lg">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.startDate}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/20" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent" />

              <div className="bg-secondary/5 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    {job.role} @ {job.company}
                  </h3>
                  <div className="text-sm text-text/60">
                    {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : t('experience.present')}
                  </div>
                </div>
                
                <div className="text-sm text-text/60 mb-4">
                  📍 {job.location}
                </div>

                <ul className="list-disc list-inside space-y-2 mb-4 text-text/80">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="pl-2">{achievement}</li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-sm font-medium mb-2 text-text/60">
                    {t('experience.technologies')}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}