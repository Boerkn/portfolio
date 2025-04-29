'use client';

import { projects } from '@/data/projects';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.featured;
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesFilter && matchesTag;
  });

  return (
    <section id="projects" className="section-container bg-secondary/5">
      <h2 className="section-title">{t('title')}</h2>
      <p className="text-center text-text/60 mb-8">{t('subtitle')}</p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`button ${filter === 'all' ? 'bg-accent/20' : 'bg-secondary/10'}`}
        >
          {t('all')}
        </button>
        <button
          onClick={() => setFilter('featured')}
          className={`button ${filter === 'featured' ? 'bg-accent/20' : 'bg-secondary/10'}`}
        >
          {t('featured')}
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTag === tag
                ? 'bg-accent text-background'
                : 'bg-secondary/10 hover:bg-secondary/20'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="group relative bg-background rounded-lg overflow-hidden border border-secondary/20 hover:border-accent/50 transition-colors"
          >
            {/* Project Image */}
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-text/60 text-sm mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button text-sm"
                  >
                    {t('viewProject')}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button text-sm"
                  >
                    {t('viewCode')}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}