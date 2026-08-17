import { Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';

const Testimonials = () => (
  <section id="testimonials" className="section-shell" aria-labelledby="testimonials-title">
    <div className="container">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Collaboration</p>
          <h2 id="testimonials-title" className="section-heading text-balance">Trusted by people I’ve built alongside.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-stone-500 dark:text-stone-400">The work is personal; making it work with a team is just as important.</p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <figure key={testimonial.id} className={`flex min-h-60 flex-col rounded-[1.5rem] border p-6 ${index % 4 === 0 ? 'border-pink-200 bg-pink-50/50 dark:border-pink-400/20 dark:bg-pink-400/5' : 'border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900'}`}>
            <Quote size={23} className="text-pink-500" aria-hidden="true" />
            <blockquote className="mt-5 flex-1 text-base leading-7 text-stone-700 dark:text-stone-200">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-stone-200 pt-4 dark:border-stone-700">
              <img src={testimonial.image.src} alt="" width={testimonial.image.width} height={testimonial.image.height} loading="lazy" decoding="async" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-50">{testimonial.name}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">{testimonial.position}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
