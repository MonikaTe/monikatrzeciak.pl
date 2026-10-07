import React from 'react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-32 bg-[#fcf7f5] text-[#261b16] text-center border-t border-[#cfbea7]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.2] tracking-tight text-[#261b16] mb-12 text-balance">
          Nie odkładaj życia, którego pragniesz, na „kiedyś”.
          <br />
          Zacznij <span className="italic font-normal">już dziś.</span>
        </h2>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-10 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#fff852] text-[#261b16] hover:bg-[#faef3d] transition-all cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] font-sans"
          >
            Umów sesję
          </button>
        </div>
      </div>
    </section>
  );
};
