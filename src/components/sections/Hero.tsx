import { ArrowDownRight, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-amber-50 via-stone-50 to-transparent dark:from-stone-900 dark:via-[#121311]" />
      <div className="container relative grid min-h-[min(46rem,calc(100vh-2rem))] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-20">
        <div className="max-w-2xl">
          <p className="eyebrow">iOS engineer · product builder</p>
          <h1 id="hero-title" className="text-balance text-5xl leading-[0.96] text-stone-950 dark:text-stone-50 sm:text-6xl lg:text-7xl">
            I turn useful ideas into focused, reliable apps.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-300 sm:text-xl">
            I’m Jerico Villaraza—an iOS engineer who cares about the detail between a clear product idea and a release people enjoy using.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#selected-work" className="button-primary">
              Explore selected releases <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a href="resume.pdf" download="Jerico-Villaraza-Resume.pdf" className="button-secondary">
              <Download size={17} aria-hidden="true" /> Download résumé
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
            <MapPin size={16} aria-hidden="true" /> Manila, Philippines
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-5 top-12 h-24 w-24 rounded-full bg-pink-400/20 blur-2xl" />
          <div className="absolute -right-5 bottom-8 h-28 w-28 rounded-full bg-indigo-400/20 blur-2xl" />
          <div className="surface-noise relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_24px_70px_rgba(31,31,25,0.12)] dark:border-stone-700 dark:bg-stone-900 sm:p-4">
            <div className="absolute left-7 top-7 z-10 flex items-center gap-2 rounded-full border border-white/40 bg-stone-950/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Building with care
            </div>
            <img
              src="me-hero.jpg"
              alt="Jerico Villaraza working on a MacBook"
              width="960"
              height="960"
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[1.3rem] object-cover object-[51%_48%]"
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between rounded-2xl border border-white/40 bg-white/85 p-4 backdrop-blur-md dark:bg-stone-950/80">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">Currently focused on</p>
                <p className="mt-1 text-base font-bold text-stone-950 dark:text-stone-50">SwiftUI product experiences</p>
              </div>
              <div className="dot-mark shrink-0" aria-hidden="true"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
