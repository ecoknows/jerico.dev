import { useEffect, useRef, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/theme';

const navLinks = [
  { name: 'Work', href: '#selected-work' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const mobileNavigationId = 'mobile-navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia('(min-width: 768px)');
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopBreakpoint.addEventListener('change', closeMenuOnDesktop);
    return () => desktopBreakpoint.removeEventListener('change', closeMenuOnDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const themeToggleLabel = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-white dark:text-slate-950"
      >
        Skip to content
      </a>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5">
          <a
            href="#top"
            aria-label="Jerico Villaraza, back to top"
            onClick={closeMenu}
            className="group flex items-center gap-2 rounded-md text-lg font-bold tracking-tight text-slate-950 outline-none transition-colors hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 dark:text-white dark:hover:text-violet-300 dark:focus-visible:ring-offset-slate-950"
          >
            <img src="/logo.svg" alt="" width="30" height="30" className="h-7 w-7" />
            <span>Jerico V.</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 dark:text-slate-300 dark:hover:text-violet-300 dark:focus-visible:ring-offset-slate-950"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Jerico-Villaraza-Resume.pdf"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200 dark:focus-visible:ring-offset-slate-950"
            >
              Résumé
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950"
              aria-label={themeToggleLabel}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="mr-1 rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950"
              aria-label={themeToggleLabel}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls={mobileNavigationId}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id={mobileNavigationId}
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-950 md:hidden"
        >
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-200 dark:hover:bg-violet-950/50 dark:hover:text-violet-200"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Jerico-Villaraza-Resume.pdf"
              className="mt-2 block rounded-md bg-slate-950 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200 dark:focus-visible:ring-offset-slate-950"
              onClick={closeMenu}
            >
              Download résumé
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
