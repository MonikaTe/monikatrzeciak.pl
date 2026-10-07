import React from 'react';

interface PricingProps {
  onOpenBooking: (type?: 'single' | 'package') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-[#fcf7f5] text-[#261b16] border-t border-[#cfbea7]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#261b16] mb-14 text-center">
          Oferta
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Sesja pojedyncza (Centered on mobile & tablet, left-aligned on desktop lg:) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-[#cfbea7]/60 shadow-sm flex flex-col justify-between transition-all hover:shadow-md text-center lg:text-left">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#261b16] mb-3">
                Sesja pojedyncza
              </h3>
              <p className="text-base sm:text-lg text-[#39251d] font-normal mb-10 font-sans">
                250 zł · 50 minut online
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('single')}
              className="w-full py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#261b16] bg-[#fff852] hover:bg-[#faef3d] transition-all cursor-pointer text-center shadow-md hover:shadow-lg active:scale-[0.99] font-sans"
            >
              REZERWUJĘ SESJĘ
            </button>
          </div>

          {/* Card 2: Pakiet 4 sesji (Bestseller) */}
          <div className="bg-[#261b16] text-[#fcf7f5] rounded-[32px] p-8 sm:p-10 border border-[#39251d] shadow-2xl flex flex-col justify-between transition-all hover:shadow-3xl text-center lg:text-left">
            <div>
              <div className="flex justify-center lg:justify-start mb-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff852] text-[#261b16] text-xs font-bold uppercase tracking-wider font-sans">
                  BESTSELLER
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#fcf7f5] mb-3">
                Pakiet 4 sesji
              </h3>
              <p className="text-base sm:text-lg text-[#fcf7f5] font-normal mb-10 flex items-center justify-center lg:justify-start flex-wrap gap-2 font-sans">
                <span className="line-through text-[#7d6c5b]">1000 zł</span>
                <span className="text-[#fff852] font-bold text-xl sm:text-2xl">800 zł</span>
                <span className="text-xs sm:text-sm text-[#cfbea7] font-light">· oszczędzasz 200 zł</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('package')}
              className="w-full py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#261b16] bg-[#fff852] hover:bg-[#faef3d] transition-all cursor-pointer text-center shadow-md hover:shadow-lg active:scale-[0.99] font-sans"
            >
              WYBIERAM PAKIET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
