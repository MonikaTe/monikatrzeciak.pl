import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo from '../assets/logo-inicjaly-biale.svg';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Jak pracuję', href: '#jak-pracuje' },
    { name: 'Dla kogo', href: '#dla-kogo' },
    { name: 'O mnie', href: '#o-mnie' },
    { name: 'Opinie', href: '#opinie' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#261b16]/95 backdrop-blur-md border-b border-[#39251d] py-3 shadow-lg'
          : 'bg-transparent py-4 sm:py-5 lg:py-6'
      }`}
    >
      {/* Centered narrower container so logo & button are placed closer to the menu */}
      <div className="max-w-[min(1360px,88vw)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {/* Logo - inicjały białe */}
          <a href="#" className="flex items-center group shrink-0" aria-label="Monika Trzeciak - Strona główna">
            <img
              src={logo}
              alt="Monika Trzeciak"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] ${
                scrolled
                  ? 'h-10 sm:h-11 lg:h-12'
                  : 'h-12 sm:h-14 lg:h-16'
              }`}
            />
          </a>

          {/* Desktop Navigation Links (Visible on desktop lg:) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-semibold tracking-wider text-[#fcf7f5] font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#fcee21] transition-colors py-1 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button (Visible ONLY on desktop lg:) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#fcf7f5] border border-[#fcee21] hover:bg-[#fcee21] hover:text-[#261b16] transition-all cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md font-sans"
            >
              UMAWIAM SESJĘ
            </button>
          </div>

          {/* Mobile & Tablet menu toggle (Visible on all screens below lg) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#fcf7f5] hover:text-[#fcee21] cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8 stroke-[2.5]" />
              ) : (
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-5 block"
                  aria-hidden="true"
                >
                  <rect x="0" y="1" width="28" height="2.5" rx="1.25" fill="#fcf7f5" />
                  <rect x="0" y="8.75" width="28" height="2.5" rx="1.25" fill="#fcf7f5" />
                  <rect x="0" y="16.5" width="28" height="2.5" rx="1.25" fill="#fcf7f5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer (Visible on all screens below lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#261b16]/98 backdrop-blur-md border-b border-[#39251d] px-6 sm:px-10 pt-4 pb-8 space-y-4 font-sans mt-3 text-center">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base sm:text-lg font-medium text-[#fcf7f5] hover:text-[#fcee21] py-3 border-b border-[#39251d]/50 text-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* CTA button inside drawer for both mobile and tablet */}
          <div className="pt-3 max-w-sm mx-auto">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#fcee21] text-[#261b16] hover:bg-[#faef3d] transition-all cursor-pointer text-center font-sans shadow-lg"
            >
              UMAWIAM SESJĘ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
