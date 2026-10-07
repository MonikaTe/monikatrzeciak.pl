import React from 'react';
import icon5 from '../assets/ikona5.png';
import monika3 from '../assets/monika3.jpg';

export const AboutMe: React.FC = () => {
  return (
    <section id="o-mnie" className="py-20 md:py-28 bg-[#fcf7f5] text-[#261b16] border-t border-[#cfbea7]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo monika3 (Order 2 on mobile/tablet, Order 1 on desktop lg:) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#cfbea7]/60 aspect-[4/5] bg-white group">
                <img
                  src={monika3}
                  alt="Monika Trzeciak - O mnie"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Copy (Order 1 on mobile/tablet, Order 2 on desktop lg:) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
            {/* Ikona marki - ikona5 */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={icon5}
                alt=""
                aria-hidden="true"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#261b16]">
              O mnie
            </h2>

            <div className="space-y-4 font-sans max-w-2xl mx-auto lg:mx-0">
              <p className="font-bold text-base sm:text-lg text-[#261b16] leading-relaxed">
                Nazywam się Monika Trzeciak. Jestem certyfikowaną trenerką EFT, praktyczką Matrix Reimprinting i coachem.
              </p>

              {/* Smaller font starting from "Pomagam kobietom..." */}
              <div className="space-y-4 text-sm sm:text-[0.95rem] text-[#39251d] font-light leading-relaxed">
                <p>
                  Pomagam kobietom pracować ze stresem, presją, napięciem i emocjami, które potrafią skutecznie odebrać lekkość w biznesie i codziennym życiu.
                </p>

                <p>
                  Kiedy poznałam EFT, od razu poczułam, że to coś więcej niż kolejna metoda pracy. Moje życie było wtedy pełne stresu, presji i zmęczenia. Byłam rozproszona na milion kierunków i trudno było mi naprawdę poczuć, że jestem tu, gdzie chcę być. Dzięki codziennej praktyce EFT w moim życiu stopniowo pojawiało się coraz więcej spokoju, radości i satysfakcji. Zaczęłam odważniej działać w biznesie, łatwiej podejmować decyzje, a sam biznes na nowo zaczął mnie ekscytować.
                </p>

                <p>
                  Dziś jako trenerka EFT pomagam kobietom pracować z tym, co powstrzymuje je przed realizacją tego, czego naprawdę chcą w życiu i biznesie. Warstwa po warstwie pracujemy z emocjami, schematami i przekonaniami, które stoją na drodze do większej lekkości, odwagi i życia po swojemu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
