import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { featuredProjects } from '../../data/portfolio';

const releaseAccents = [
  {
    selected: 'border-pink-500 bg-pink-50/80 shadow-pink-500/10 dark:border-pink-400 dark:bg-pink-400/10',
    indicator: 'bg-pink-500 dark:bg-pink-400',
  },
  {
    selected: 'border-indigo-500 bg-indigo-50/80 shadow-indigo-500/10 dark:border-indigo-400 dark:bg-indigo-400/10',
    indicator: 'bg-indigo-500 dark:bg-indigo-400',
  },
  {
    selected: 'border-amber-500 bg-amber-50/80 shadow-amber-500/10 dark:border-amber-300 dark:bg-amber-300/10',
    indicator: 'bg-amber-500 dark:bg-amber-300',
  },
  {
    selected: 'border-emerald-500 bg-emerald-50/80 shadow-emerald-500/10 dark:border-emerald-400 dark:bg-emerald-400/10',
    indicator: 'bg-emerald-500 dark:bg-emerald-400',
  },
] as const;

type Release = (typeof featuredProjects)[number];

const ReleaseShelf = () => {
  const [selectedId, setSelectedId] = useState(() => featuredProjects[0]?.id ?? '');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelId = useId();

  const selectedRelease = featuredProjects.find((release) => release.id === selectedId) ?? featuredProjects[0];

  const focusRelease = (index: number) => {
    const nextRelease = featuredProjects[index];

    if (!nextRelease) {
      return;
    }

    setSelectedId(nextRelease.id);
    requestAnimationFrame(() => tabRefs.current[index]?.focus());
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (featuredProjects.length < 2) {
      return;
    }

    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % featuredProjects.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + featuredProjects.length) % featuredProjects.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = featuredProjects.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    focusRelease(nextIndex);
  };

  if (!selectedRelease) {
    return null;
  }

  return (
    <section id="selected-work" aria-labelledby="releases-heading" className="section-shell bg-white/45 dark:bg-stone-900/30">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Independent iOS releases
          </p>
          <h2 id="releases-heading" className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Selected releases
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Three small, focused products designed and shipped with a native iOS mindset.
          </p>
        </div>

        <div
          aria-label="Select an iOS release"
          aria-orientation="horizontal"
          className="-mx-4 mb-8 flex snap-x gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3"
          role="tablist"
        >
          {featuredProjects.map((release, index) => {
            const isSelected = release.id === selectedRelease.id;
            const accent = releaseAccents[index % releaseAccents.length];

            return (
              <button
                key={release.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                aria-controls={panelId}
                aria-selected={isSelected}
                className={`group relative min-w-[15.5rem] snap-start overflow-hidden rounded-2xl border p-3 text-left outline-none transition motion-reduce:transition-none lg:min-w-0 ${
                  isSelected
                    ? `${accent.selected} shadow-lg`
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-900/80'
                } focus-visible:ring-4 focus-visible:ring-slate-950/20 dark:focus-visible:ring-white/25`}
                id={`release-tab-${release.id}`}
                onClick={() => setSelectedId(release.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                type="button"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                    decoding="async"
                    height={release.image.height}
                    loading="lazy"
                    src={release.image.src}
                    width={release.image.width}
                    style={{ objectPosition: release.image.objectPosition }}
                  />
                  <span className={`absolute left-3 top-3 h-2.5 w-2.5 rounded-full ${accent.indicator}`} />
                </div>
                <span className="mt-4 flex items-start justify-between gap-3">
                  <span>
                    <span className="block text-base font-semibold text-slate-950 dark:text-white">{release.title}</span>
                    <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">{release.platform}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full transition motion-reduce:transition-none ${
                      isSelected ? accent.indicator : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <ReleaseDetail panelId={panelId} release={selectedRelease} />
      </div>
    </section>
  );
};

interface ReleaseDetailProps {
  panelId: string;
  release: Release;
}

const ReleaseDetail = ({ panelId, release }: ReleaseDetailProps) => (
  <div
    aria-labelledby={`release-tab-${release.id}`}
    className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    id={panelId}
    role="tabpanel"
    tabIndex={0}
  >
    <div className="relative min-h-72 bg-slate-100 dark:bg-slate-800">
      <img
        alt={release.image.alt}
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
        height={release.image.height}
        src={release.image.src}
        width={release.image.width}
        style={{ objectPosition: release.image.objectPosition }}
      />
    </div>

    <div className="p-6 sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {release.platform}
        </span>
        {release.ownership ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {release.ownership}
          </span>
        ) : null}
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">{release.title}</h3>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">{release.summary}</p>

      <dl className="mt-7 grid gap-5 border-y border-slate-200 py-6 dark:border-slate-800 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Role</dt>
          <dd className="mt-2 font-medium text-slate-900 dark:text-white">{release.role}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Built with</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {release.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {technology}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-7 flex flex-wrap gap-3">
        {release.links.appStore ? (
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white outline-none transition hover:bg-slate-700 focus-visible:ring-4 focus-visible:ring-slate-950/25 motion-reduce:transition-none dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 dark:focus-visible:ring-white/30"
            href={release.links.appStore}
            rel="noopener noreferrer"
            target="_blank"
          >
            View on the App Store
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        ) : null}
        {release.links.code ? (
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 outline-none transition hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-4 focus-visible:ring-slate-950/15 motion-reduce:transition-none dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:focus-visible:ring-white/25"
            href={release.links.code}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={17} />
            View code
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

export default ReleaseShelf;
