import React from 'react';
import monika2 from '../assets/monika2.jpg';

interface TopicsSectionProps {
  onOpenBooking?: () => void;
}

export const TopicsSection: React.FC<TopicsSectionProps> = ({ onOpenBooking }) => {
  const topics = [
    'Blokady w finansach, pracy lub biznesie',
    'Brak klientów',
    'Brak jasnej misji lub niszy',
    'Strach przed porażką i sukcesem',
    'Blokady w skalowaniu biznesu',
    'Prokrastynacja i odkładanie działań',
    'Opór w ciele i autosabotaż',
    'Chaos w biznesie i rozproszenie',
    'Układ nerwowy, który „nie nadąża” za pomysłami',
    'Utknięcie w powtarzających się schematach',
    'Konflikty wewnętrzne',
    'Niska samoocena i brak pewności siebie',
    'Lęk przed widocznością w sieci',
    'Poczucie chaosu w głowie i napięcia w ciele',
    'Przewlekły stres i syndrom oszusta',
    'Trudności w relacjach (w pracy lub związkach)',
    'Ogólny brak satysfakcji z życia',
  ];

  return (
    <section id="tematy" className="py-20 md:py-28 bg-[#261b16] text-[#fcf7f5] border-t border-[#39251d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo monika2 */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#7d6c5b]/40 aspect-[4/5] bg-[#39251d] group">
                <img
                  src={monika2}
                  alt="Monika Trzeciak - Z czym pracujemy na sesjach"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Topics List (Centered on mobile & tablet, left-aligned on desktop lg:) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.2] tracking-tight text-[#fcf7f5]">
              Z czym pracujemy na sesjach?
            </h2>

            <p className="text-base sm:text-lg text-[#cfbea7] font-light font-sans">
              Przykładowe tematy pracy to między innymi:
            </p>

            <div className="flex justify-center lg:justify-start">
              <ul className="space-y-2.5 text-sm sm:text-base text-[#cfbea7] font-light font-sans text-left inline-block max-w-md">
                {topics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fff852] shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-9 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#fff852] text-[#261b16] hover:bg-[#faef3d] transition-all cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] font-sans"
              >
                Umów sesję
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
