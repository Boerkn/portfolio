'use client';

import {useTranslations} from 'next-intl';
import {skills} from '@/data/skills';
import {motion} from 'framer-motion';

export function SkillsSection() {
    const t = useTranslations();

    return (
        <section id="skills" className="py-20 bg-secondary/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('skills.title')}
                    </h2>
                    <p className="text-text/60 text-lg">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="bg-background rounded-xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>{skill.name}</span>
                                            <span className="text-text/60">
                        {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? t('skills.yearExp') : t('skills.yearsExp')}
                      </span>
                                        </div>
                                        <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{width: 0}}
                                                whileInView={{width: `${(skill.level / 5) * 100}%`}}
                                                transition={{duration: 1, ease: "easeOut"}}
                                                viewport={{once: true}}
                                                className="h-full bg-accent rounded-full"
                                            />
                                        </div>
                                        <div className="text-xs text-text/60">
                                            {getSkillLevelText(skill.level, t)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function getSkillLevelText(level: number, t: any) {
    if (level === 5) return t('skills.expert');
    if (level === 4) return t('skills.advanced');
    if (level === 3) return t('skills.intermediate');
    return t('skills.beginner');
}