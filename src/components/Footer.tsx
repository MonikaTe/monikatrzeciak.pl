import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1410] text-[#fcf7f5] py-8 border-t border-[#39251d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Social Icons matching mockup */}
          <div className="flex items-center justify-center gap-3 text-[#cfbea7]">
            <a
              href="https://www.instagram.com/monikatrzeciak.eft/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-[#fff852] hover:bg-[#39251d] transition-all"
              aria-label="Instagram Moniki Trzeciak"
            >
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61594672153861"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-[#fff852] hover:bg-[#39251d] transition-all"
              aria-label="Facebook Moniki Trzeciak"
            >
              <Facebook className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a
              href="mailto:kontakt@monikatrzeciak.pl"
              className="p-2 rounded-full hover:text-[#fff852] hover:bg-[#39251d] transition-all"
              aria-label="Napisz e-mail do Moniki Trzeciak"
            >
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </a>
          </div>

          {/* Copyright & Legal Links */}
          <div className="text-[11px] sm:text-xs text-[#cfbea7] tracking-wider uppercase flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 font-sans text-center">
            {/* On mobile: Legal links in one single line above copyright */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 order-1 sm:order-2">
              <span className="hidden sm:inline text-[#7d6c5b]">•</span>
              <a
                href="/polityka-prywatnosci"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '/polityka-prywatnosci');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo(0, 0);
                }}
                className="hover:text-[#fcf7f5] transition-colors"
              >
                POLITYKA PRYWATNOŚCI
              </a>
              <span className="text-[#7d6c5b]">•</span>
              <a
                href="/regulamin"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '/regulamin');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo(0, 0);
                }}
                className="hover:text-[#fcf7f5] transition-colors"
              >
                REGULAMIN
              </a>
            </div>

            {/* On mobile: Copyright is at the very bottom (order-2); on sm+ it sits at the start (order-1) */}
            <div className="order-2 sm:order-1 text-center">
              <span>© MONIKA TRZECIAK 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
