import { experiences } from '../../data/portfolio';

const Experience = () => (
  <section id="experience" className="section-shell bg-white/45 dark:bg-stone-900/30" aria-labelledby="experience-title">
    <div className="container">
      <div className="max-w-2xl">
        <p className="eyebrow">Career</p>
        <h2 id="experience-title" className="section-heading text-balance">Built in teams where the details matter.</h2>
        <p className="section-copy">A record of product, platform, and performance work across banking, e-commerce, and business systems.</p>
      </div>

      <ol className="relative mt-14 space-y-5 border-l border-stone-300 pl-6 dark:border-stone-700 sm:ml-3 sm:pl-10">
        {experiences.map((experience, index) => (
          <li key={experience.id} className="relative">
            <span className={`absolute -left-[1.94rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-stone-50 dark:border-[#121311] sm:-left-[2.69rem] ${index === 0 ? 'bg-emerald-400' : 'bg-indigo-400'}`} aria-hidden="true" />
            <article className="grid gap-5 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:grid-cols-[4rem_1fr] sm:p-7">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 dark:border-stone-700 dark:bg-stone-50">
                <img src={experience.logo.src} alt={experience.logo.alt} width={experience.logo.width} height={experience.logo.height} loading="lazy" decoding="async" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl text-stone-950 dark:text-stone-50">{experience.position}</h3>
                    <p className="mt-1 font-semibold text-indigo-700 dark:text-indigo-300">{experience.company}</p>
                  </div>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400">{experience.period}</p>
                </div>
                <p className="mt-5 text-sm leading-7 text-stone-600 dark:text-stone-300 sm:text-base">{experience.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
