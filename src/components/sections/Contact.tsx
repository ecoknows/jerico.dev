import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emptyForm: FormValues = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState<FormValues>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      await emailjs.send('service_zedphwv', 'template_dh9dtbj', formData, {
        publicKey: 'OdHmhLomcMMNeSjh4',
      });
      setFormData(emptyForm);
      setSubmitMessage({ type: 'success', text: 'Thanks—your message is on its way.' });
    } catch {
      setSubmitMessage({
        type: 'error',
        text: 'Your message could not be sent right now. Please email me directly instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title" className="section-heading text-balance">Have a product worth putting on someone’s home screen?</h2>
          <p className="section-copy">
            Whether you’re hiring, building something useful, or comparing notes on product craft, I’d be glad to hear from you.
          </p>

          <div className="mt-9 space-y-3">
            <a href="mailto:eco.villaraza@gmail.com" className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white/60 p-4 transition hover:border-indigo-400 hover:bg-white dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-indigo-500 dark:hover:bg-stone-900">
              <span className="flex items-center gap-3"><Mail size={18} className="text-pink-500" aria-hidden="true" /> eco.villaraza@gmail.com</span>
              <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <p className="flex items-center gap-3 px-4 py-2 text-sm text-stone-500 dark:text-stone-400">
              <MapPin size={18} className="text-emerald-500" aria-hidden="true" /> Manila, Philippines
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(31,31,25,0.06)] dark:border-stone-800 dark:bg-stone-900 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-stone-800 dark:text-stone-100">
              Your name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base font-normal text-stone-950 transition placeholder:text-stone-400 focus:border-indigo-500 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50 dark:focus:border-indigo-400"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-semibold text-stone-800 dark:text-stone-100">
              Email address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base font-normal text-stone-950 transition placeholder:text-stone-400 focus:border-indigo-500 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50 dark:focus:border-indigo-400"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold text-stone-800 dark:text-stone-100">
            What’s this about?
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base font-normal text-stone-950 transition placeholder:text-stone-400 focus:border-indigo-500 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50 dark:focus:border-indigo-400"
              placeholder="A role, a product, or a hello"
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-stone-800 dark:text-stone-100">
            Your message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base font-normal text-stone-950 transition placeholder:text-stone-400 focus:border-indigo-500 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50 dark:focus:border-indigo-400"
              placeholder="Tell me a little about what you’re working on."
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={isSubmitting} className="button-primary disabled:cursor-wait disabled:opacity-60">
              <Send size={17} aria-hidden="true" /> {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
            {submitMessage && (
              <p role="status" aria-live="polite" className={`text-sm font-medium ${submitMessage.type === 'success' ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
                {submitMessage.text}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
