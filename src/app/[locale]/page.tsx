import { profile } from '@/data/profile';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      {/* Hero Section */}
      <section className="section-container min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              {t('greeting')} 👋
              <br />
              {t('im')} <span className="text-accent">{profile.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-text/60">
              {profile.role}
            </h2>
            <p className="text-lg text-text/80 max-w-prose">
              {profile.bio}
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="button">
                {t('contact')}
              </a>
              <a 
                href={profile.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={400}
              height={400}
              className="relative rounded-full border-2 border-accent"
              priority
            />
          </div>
        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
