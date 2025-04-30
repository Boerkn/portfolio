import {HeroSection} from '@/components/HeroSection';
import {SkillsSection} from '@/components/SkillsSection';
import {ExperienceSection} from '@/components/ExperienceSection';
import {ProjectsSection} from '@/components/ProjectsSection';
import {ContactSection} from '@/components/ContactSection';
import {Locale} from 'next-intl';

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default async function Page({}: Props) {
    return (
        <>
            <HeroSection/>
            <SkillsSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <ContactSection/>
        </>
    );
}