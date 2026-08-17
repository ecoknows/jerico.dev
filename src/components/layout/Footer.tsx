import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ecoknows', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jerico-villaraza-95a195231/', icon: Linkedin },
  { label: 'X', href: 'https://x.com/ecovillaraza32', icon: Twitter },
  { label: 'Email', href: 'mailto:eco.villaraza@gmail.com', icon: Mail },
];

const Footer = () => (
  <footer className="border-t border-stone-200 py-9 dark:border-stone-800">
    <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
        <div className="dot-mark h-7 w-7 rounded-lg p-1" aria-hidden="true"><span /><span /><span /><span /></div>
        <p>© {new Date().getFullYear()} Jerico Villaraza</p>
      </div>
      <div className="flex items-center gap-2">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={label} className="rounded-full p-2.5 text-stone-600 transition hover:bg-stone-200 hover:text-indigo-600 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-indigo-300">
            <Icon size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
