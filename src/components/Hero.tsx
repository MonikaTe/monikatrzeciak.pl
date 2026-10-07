import React from 'react';
import heroMobile from '../assets/hero-mobile.webp';
import hero1920 from '../assets/hero-1920.webp';
import hero2560 from '../assets/hero-2560.webp';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full min-h-screen min-h-[100vh] bg-[#261b16] text-[#fcf7f5] overflow-hidden flex flex-col justify-end min-[769px]:justify-center">
      {/* Background Graphic using <picture> */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <picture className="w-full h-full block">
          {/* Ekrany od 1921px: hero-2560 */}
          <source media="(min-width: 1921px)" srcSet={hero2560} type="image/webp" />
          {/* Ekrany do 768px: hero-mobile */}
          <source media="(max-width: 768px)" srcSet={heroMobile} type="image/webp" />
          {/* Domyślny <img> oraz ekrany od 769px do 1920px: hero-1920 */}
          <img
            src={hero1920}
            alt="Monika Trzeciak, trenerka EFT"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] min-[769px]:object-[right_top] select-none block"
          />
        </picture>

        {/* Desktop Left Dark Overlay under text to keep white typography crisp over background */}
        <div className="hidden min-[769px]:block absolute inset-y-0 left-0 w-full min-[769px]:w-3/5 lg:w-1/2 bg-gradient-to-r from-black/35 via-black/15 to-transparent pointer-events-none"></div>
      </div>

      {/* MOBILE HERO CONTENT (Visible on <= 768px) - Positioned at bottom over the photo's natural dark gradient */}
      <div className="min-[769px]:hidden relative z-10 w-full px-5 pb-16 xs:pb-20 sm:pb-24 pt-20 flex flex-col items-center text-center space-y-4 pointer-events-auto">
        {/* Headline */}
        <h1 className="font-serif text-[1.85rem] xs:text-[2.1rem] sm:text-[2.35rem] font-medium leading-[1.14] tracking-tight text-white drop-shadow-sm">
          Stwórz biznes i życie,
          <br />
          które dają Ci <span className="italic font-normal">wolność.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[0.9rem] xs:text-[0.95rem] text-[#f4ece4] font-normal leading-[1.5] max-w-[340px] sm:max-w-md mx-auto font-sans drop-shadow-xs">
          Sesje EFT online dla kobiet, które
          <br />
          wiedzą, że chcą WIĘCEJ - od życia, od
          <br />
          siebie i od swojego biznesu, ale coś w
          <br />
          środku wciąż je zatrzymuje.
        </p>

        {/* Yellow Button */}
        <div className="w-full max-w-[320px] pt-1">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full py-3.5 sm:py-4 rounded-full text-xs xs:text-sm font-bold uppercase tracking-wider bg-[#fcee21] text-[#1c140f] hover:bg-[#fff852] active:scale-[0.99] transition-all cursor-pointer shadow-xl font-sans"
          >
            UMAWIAM SESJĘ
          </button>
        </div>
      </div>

      {/* TABLET & DESKTOP HERO CONTENT (Visible on >= 769px) - Shifted ~20% inward towards center away from left edge */}
      <div className="hidden min-[769px]:flex relative z-10 w-full min-h-screen py-24 min-[769px]:py-28 items-center max-w-[min(1440px,90vw)] mx-auto px-8 sm:px-12 lg:px-16 pointer-events-auto">
        <div className="w-full max-w-[44%] space-y-5 lg:space-y-6 text-left mt-8 lg:mt-12 min-[769px]:ml-[6%] lg:ml-[8%]">
          {/* Main Headline */}
          <h1 className="font-serif text-[clamp(2.1rem,3.2vw,3.9rem)] font-medium leading-[1.14] tracking-tight text-[#fcf7f5] drop-shadow-sm">
            Stwórz biznes i życie,
            <br />
            które dają Ci <span className="italic font-normal">wolność.</span>
          </h1>

          {/* Subheading text */}
          <p className="text-[clamp(0.875rem,1.05vw,1.15rem)] text-[#f4ece4] font-normal leading-[1.65] font-sans drop-shadow-xs">
            Sesje EFT online dla kobiet, które wiedzą, że chcą WIĘCEJ
            <br />
            - od życia, od siebie i od swojego biznesu, ale coś
            <br />
            w środku wciąż je zatrzymuje.
          </p>

          {/* Yellow CTA Button */}
          <div className="pt-2 sm:pt-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#fcee21] text-[#1c140f] hover:bg-[#fff852] transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] font-sans inline-block"
            >
              UMAWIAM SESJĘ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
