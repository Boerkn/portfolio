'use client';

import { skills } from '@/data/skills';
import { useTranslations } from 'next-intl';

export function SkillsSection() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="section-container bg-secondary/5">
      <h2 className="section-title">{t('title')}</h2>
      <p className="text-center text-text/60 mb-12">{t('subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div
            key={category.name}
            className="p-6 rounded-lg bg-background border border-secondary/20 hover:border-accent/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-text/60">
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="h-2 bg-secondary/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent/60 rounded-full transition-all duration-500"
                      style={{
                        width: `${(skill.level / 5) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}