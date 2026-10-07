import React from 'react';
import icon1 from '../assets/ikona1.png';
import icon2 from '../assets/ikona2.png';
import icon3 from '../assets/ikona3.png';
import icon4 from '../assets/ikona4.png';

interface ForWhomProps {
  onOpenBooking?: () => void;
}

export const ForWhom: React.FC<ForWhomProps> = ({ onOpenBooking }) => {
  const situations = [
    {
      icon: icon1,
      linesDesktop: [
        '„Chcę założyć biznes,',
        'ale nie wiem,',
        'jak zacząć”',
      ],
      linesMobileTablet: [
        '„Chcę założyć biznes,',
        'ale nie wiem jak zacząć”',
      ],
      text: 'Chcesz założyć biznes albo zrobić kolejny krok, ale wątpisz w siebie. Boisz się oceny, porażki i tego, czy sobie poradzisz. Ciągle masz wrażenie, że masz za mało wiedzy i doświadczenia, żeby zacząć. Masz stabilną pracę, która daje Ci dobre zarobki, ale zupełnie nie daje Ci satysfakcji i spełnienia o jakim marzysz.',
    },
    {
      icon: icon2,
      linesDesktop: [
        '„Mój biznes miał',
        'dać mi wolność,',
        'a ja pracuję bez końca”',
      ],
      linesMobileTablet: [
        '„Mój biznes miał dać mi wolność,',
        'a ja pracuję bez końca”',
      ],
      text: 'Jesteś przeciążona, trudno Ci odpocząć i postawić granice. Biznes zamiast wspierać Twoje życie, zaczyna dominować nad każdym innym obszarem. Zastanawiasz się, jak to zmienić, ale gdy tylko próbujesz, wracasz do tego, co znane i bezpieczne - czyli do bycia wiecznie zarobioną.',
    },
    {
      icon: icon3,
      linesDesktop: [
        '„Chcę iść dalej,',
        'ale coś mnie',
        'blokuje”',
      ],
      linesMobileTablet: [
        '„Chcę iść dalej,',
        'ale coś mnie blokuje”',
      ],
      text: 'Utknęłaś na jakimś etapie biznesu albo w kółko przeżywasz tę samą sytuację. Inwestujesz, kończysz kursy, a zarobki stoją w miejscu albo się cofają. Odkładasz działanie, wszystko próbujesz zrobić perfekcyjnie, porównujesz się z innymi i frustruje Cię, że mimo wiedzy nadal nic się nie rusza.',
    },
    {
      icon: icon4,
      linesDesktop: [
        '„Moje życie',
        'mnie nie',
        'satysfakcjonuje”',
      ],
      linesMobileTablet: [
        '„Moje życie mnie',
        'nie satysfakcjonuje”',
      ],
      text: 'A może nie chodzi o biznes. Po prostu doszłaś do momentu, w którym czujesz, że nie jesteś zadowolona z życia, którym teraz żyjesz. Może tkwisz w relacji, która Ci nie służy. Wraca do Ciebie ten sam schemat. Trudno Ci postawić granicę, podjąć decyzję albo zrobić coś, co wiesz, że poprawi jakość Twojego życia. I czujesz, że w końcu chcesz się od tego uwolnić.',
    },
  ];

  return (
    <section id="dla-kogo" className="py-20 md:py-28 bg-[#261b16] text-[#fcf7f5] border-t border-[#39251d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading in Playfair Display */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fcf7f5] mb-6 text-center">
          Dla kogo jest sesja EFT?
        </h2>

        {/* Subhead */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-base sm:text-lg text-[#cfbea7] font-light leading-relaxed font-sans text-center">
          <p>
            Dla kobiet, które chcą więcej od życia. Pragną zbudować lub już prowadzą własny biznes i chcą, żeby dawał im więcej wolności, spełnienia i satysfakcji, a mniej chaosu, przeciążenia i presji.
          </p>
          <p className="font-bold text-[#fcf7f5]">
            Zobacz, czy któraś z tych sytuacji dotyczy Ciebie:
          </p>
        </div>

        {/* 4 Cards without borders, all text centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#39251d] rounded-3xl p-6 lg:p-7 shadow-lg flex flex-col justify-start text-center items-center"
            >
              <div className="h-16 sm:h-[72px] flex items-center justify-center mb-5">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Subheading: 2 lines on mobile/tablet (< lg), 3 lines on desktop (lg+) */}
              <h3 className="font-sans font-bold text-sm sm:text-base lg:text-[1.08rem] xl:text-[1.125rem] text-[#fff852] leading-snug mb-4 min-h-[48px] sm:min-h-[52px] lg:min-h-[82px] flex flex-col items-center justify-center text-center">
                {/* Mobile & Tablet (< lg): 2 lines */}
                <span className="lg:hidden flex flex-col items-center">
                  {item.linesMobileTablet.map((line, lIdx) => (
                    <span key={lIdx} className="block">{line}</span>
                  ))}
                </span>
                {/* Desktop (lg+): 3 lines */}
                <span className="hidden lg:flex flex-col items-center">
                  {item.linesDesktop.map((line, lIdx) => (
                    <span key={lIdx} className="block whitespace-nowrap">{line}</span>
                  ))}
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-[#cfbea7] leading-relaxed font-light text-center font-sans">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button in brand yellow */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-9 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#fff852] text-[#261b16] hover:bg-[#faef3d] transition-all cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] font-sans"
          >
            Umów sesję
          </button>
        </div>
      </div>
    </section>
  );
};
