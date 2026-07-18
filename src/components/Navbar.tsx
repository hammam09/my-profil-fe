import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Saya', href: '#about' },
    { name: 'Portofolio', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-md border-b border-zinc-200/50 dark:border-zinc-800/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#home" className="group flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
              <span className="p-2 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:rotate-12 transition-transform duration-300">
                <Cpu className="w-6 h-6" />
              </span>
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                Hammam
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md font-sans text-sm font-medium text-zinc-600 hover:text-cyan-500 dark:text-zinc-300 dark:hover:text-cyan-400 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation-drawer"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md font-sans text-base font-medium text-zinc-600 hover:text-cyan-500 dark:text-zinc-300 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
