import { capabilities } from '../../data/portfolio';

const capabilityAccents = [
  'border-pink-200 bg-pink-50 text-pink-700 dark:border-pink-400/25 dark:bg-pink-400/10 dark:text-pink-200',
  'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-400/25 dark:bg-indigo-400/10 dark:text-indigo-200',
  'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-300/25 dark:bg-amber-300/10 dark:text-amber-100',
  'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-200',
] as const;

const Capabilities = () => (
  <section id="about" aria-labelledby="capabilities-heading" className="section-shell bg-white/45 dark:bg-stone-900/30">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            How I work
          </p>
          <h2 id="capabilities-heading" className="max-w-md text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Product thinking, backed by dependable implementation.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">
            I focus on the details that make software feel considered: clear interaction design, native performance, and a resilient path from idea to release.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2" role="list">
          {capabilities.map((capability, index) => (
            <li
              key={capability.id}
              className="rounded-2xl border border-slate-200 bg-stone-50 p-5 dark:border-slate-800 dark:bg-slate-950"
            >
              <div
                aria-hidden="true"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg ${
                  capabilityAccents[index % capabilityAccents.length]
                }`}
              >
                {capability.icon}
              </div>
              {capability.eyebrow ? (
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                  {capability.eyebrow}
                </p>
              ) : null}
              <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{capability.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{capability.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Capabilities;
