import { useMemo, useState } from 'react';
import { ArrowUpRight, Github, Play } from 'lucide-react';
import { archiveCategories, archiveProjects, type ProjectCategory } from '../../data/portfolio';

type Filter = 'All' | ProjectCategory;

const filterLabels: Record<Filter, string> = {
  All: 'All work',
  Mobile: 'Mobile',
  Web: 'Web',
  Other: 'Other',
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const visibleProjects = useMemo(
    () => archiveProjects.filter((project) => activeFilter === 'All' || project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Beyond the shelf</p>
            <h2 id="projects-title" className="section-heading text-balance">A broader record of shipped work.</h2>
            <p className="section-copy">Mobile, web, and product systems built across teams, freelance work, and independent experiments.</p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter project archive">
            {(['All', ...archiveCategories] as Filter[]).map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-stone-950 text-white dark:bg-stone-50 dark:text-stone-950'
                    : 'border border-stone-300 bg-white/50 text-stone-600 hover:border-stone-500 hover:text-stone-950 dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:text-stone-50'
                }`}
              >
                {filterLabels[filter]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article key={project.id} className="group flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_18px_42px_rgba(31,31,25,0.09)] dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-stone-100 p-4 dark:bg-stone-950">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none ${project.image.className ?? ''}`}
                  style={{ objectPosition: project.image.objectPosition }}
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-stone-700 shadow-sm backdrop-blur dark:bg-stone-900/90 dark:text-stone-200">
                  {project.platform}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                  {project.role && <span>{project.role}</span>}
                  {project.role && project.ownership && <span aria-hidden="true">•</span>}
                  {project.ownership && <span>{project.ownership}</span>}
                </div>
                <h3 className="mt-3 text-xl text-stone-950 dark:text-stone-50">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((technology) => (
                    <span key={technology} className="rounded-md bg-stone-100 px-2 py-1 text-[0.68rem] font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                      {technology}
                    </span>
                  ))}
                  {project.stack.length > 4 && <span className="rounded-md bg-stone-100 px-2 py-1 text-[0.68rem] font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">+{project.stack.length - 4}</span>}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                  {project.links.code && <ProjectLink href={project.links.code} label="Code" icon={Github} />}
                  {project.links.website && <ProjectLink href={project.links.website} label="Visit" icon={ArrowUpRight} />}
                  {project.links.demo && <ProjectLink href={project.links.demo} label="Demo" icon={Play} />}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

type ProjectLinkProps = {
  href: string;
  label: string;
  icon: typeof Github;
};

const ProjectLink = ({ href, label, icon: Icon }: ProjectLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-stone-700 transition hover:text-indigo-600 dark:text-stone-200 dark:hover:text-indigo-300">
    <Icon size={15} aria-hidden="true" /> {label}
  </a>
);

export default Projects;
