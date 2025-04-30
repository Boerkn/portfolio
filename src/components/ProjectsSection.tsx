'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {projects} from '@/data/projects';
import {AnimateOnScroll} from './AnimateOnScroll';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';

export function ProjectsSection() {
    const t = useTranslations();
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll
        ? projects
        : projects.filter(project => project.featured);

    const uniqueTags = Array.from(
        new Set(projects.flatMap(project => project.tags))
    ).sort();

    return (
        <section id="projects" className="py-20 bg-secondary/5">
            <div className="container px-4 mx-auto">
                <AnimateOnScroll>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('projects.title')}
                        </h2>
                        <p className="text-text/60 text-lg">
                            {t('projects.subtitle')}
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {displayedProjects.map((project, index) => (
                            <AnimateOnScroll key={project.id} delay={index * 0.1}>
                                <motion.div
                                    layout
                                    className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-text/60 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs"
                                                >
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                                                >
                                                    {t('projects.viewProject')} →
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-medium text-text/60 hover:text-accent transition-colors"
                                                >
                                                    {t('projects.viewCode')} →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimateOnScroll>
                        ))}
                    </AnimatePresence>
                </div>

                {!showAll && projects.length > 3 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                        >
                            {t('common.viewAll')}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}