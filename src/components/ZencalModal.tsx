import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';

interface ZencalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'single' | 'package';
}

export const ZencalModal: React.FC<ZencalModalProps> = ({
  isOpen,
  onClose,
  initialType = 'single',
}) => {
  const [activeType, setActiveType] = useState<'single' | 'package'>(initialType);
  const singleEmbedRef = useRef<HTMLDivElement>(null);
  const packageEmbedRef = useRef<HTMLDivElement>(null);

  // Sync activeType when initialType changes upon opening
  useEffect(() => {
    if (isOpen) {
      setActiveType(initialType);
    }
  }, [isOpen, initialType]);

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Ensure Zencal script initializes both embeds if shadowRoot is missing
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const needsInit =
          (singleEmbedRef.current && !singleEmbedRef.current.shadowRoot) ||
          (packageEmbedRef.current && !packageEmbedRef.current.shadowRoot);

        if (needsInit) {
          const script = document.createElement('script');
          script.async = true;
          script.setAttribute('data-cookieconsent', 'ignore');
          script.src = `https://app.zencal.io/js/embed.js?v=4.3.0&_ts=${Date.now()}`;
          document.body.appendChild(script);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeType]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 flex items-center justify-center p-3 sm:p-6 ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 bg-[#fcf7f5] text-[#261b16] rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#cfbea7]/60 overflow-hidden">
        {/* Header with Option Switcher */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-[#cfbea7]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#261b16] text-[#fff852] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-[#261b16] leading-tight">
                {activeType === 'single' ? 'Pojedyncza sesja EFT' : 'Pakiet 4 sesji EFT'}
              </h3>
              <p className="text-xs sm:text-sm text-[#7d6c5b]">
                {activeType === 'single'
                  ? '250 zł · 50 minut online'
                  : '800 zł · 4 sesje po 50 minut (oszczędzasz 200 zł)'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            {/* Tabs to easily toggle between Single Session and Package */}
            <div className="inline-flex p-1 bg-[#ede4db] rounded-full text-xs font-medium font-sans">
              <button
                type="button"
                onClick={() => setActiveType('single')}
                className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeType === 'single'
                    ? 'bg-[#261b16] text-[#fff852] shadow-sm font-semibold'
                    : 'text-[#39251d] hover:text-[#261b16]'
                }`}
              >
                1 sesja
              </button>
              <button
                type="button"
                onClick={() => setActiveType('package')}
                className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeType === 'package'
                    ? 'bg-[#261b16] text-[#fff852] shadow-sm font-semibold'
                    : 'text-[#39251d] hover:text-[#261b16]'
                }`}
              >
                Pakiet 4 sesji
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#7d6c5b] hover:text-[#261b16] hover:bg-[#cfbea7]/20 transition-colors cursor-pointer shrink-0"
              aria-label="Zamknij okno rezerwacji"
            >
              <X className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Content with Zencal Embeds */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6">
          {/* Calendar 1: Sesja pojedyncza */}
          <div className={activeType === 'single' ? 'block' : 'hidden'}>
            <div
              ref={singleEmbedRef}
              data-type="t"
              data-owner="monika-trzeciak"
              data-slug="sesja-eft"
              data-primary="#39251d"
              data-secondary="#fff852"
              data-avatar="https://meetendly.fra1.digitaloceanspaces.com/embed-logos/95ce78f55b510f4af297915fb0bd4d103ece06177c2fd79ea9b04b9a0f86f8d1/a4e028d7-76ef-4d79-a728-42575a8fa9b5.png"
              data-lang="pl"
              data-ampm="0"
              data-text-color="#fcf7f5"
              data-content-bg="#fcf7f5"
              data-content-text="#261b16"
              className="zencal-embed w-full min-h-[560px]"
            />
          </div>

          {/* Calendar 2: Pakiet 4 sesji */}
          <div className={activeType === 'package' ? 'block' : 'hidden'}>
            <div
              ref={packageEmbedRef}
              data-type="t"
              data-owner="monika-trzeciak"
              data-slug="pakiet"
              data-primary="#39251d"
              data-secondary="#fff852"
              data-avatar="https://meetendly.fra1.digitaloceanspaces.com/embed-logos/95ce78f55b510f4af297915fb0bd4d103ece06177c2fd79ea9b04b9a0f86f8d1/99178fe7-bc06-4f37-b6e3-afaa89307093.png"
              data-lang="pl"
              data-ampm="0"
              data-text-color="#fcf7f5"
              data-content-bg="#fcf7f5"
              data-content-text="#261b16"
              className="zencal-embed w-full min-h-[560px]"
            />
          </div>

          {/* AdBlocker / Direct Link Fallback */}
          <div className="mt-4 pt-4 border-t border-[#cfbea7]/30 text-center">
            <a
              href={
                activeType === 'single'
                  ? 'https://app.zencal.io/u/monika-trzeciak/sesja-eft'
                  : 'https://app.zencal.io/u/monika-trzeciak/pakiet'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#7d6c5b] hover:text-[#261b16] underline underline-offset-2 transition-colors"
            >
              <span>Nie widzisz kalendarza? Otwórz rezerwację bezpośrednio w nowej karcie</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[1.5]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
