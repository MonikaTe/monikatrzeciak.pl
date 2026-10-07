import React from 'react';
import icon5 from '../assets/ikona5.png';

export const ProblemSection: React.FC = () => {
  return (
    <section id="znasz-to" className="py-20 md:py-28 bg-[#fcf7f5] text-[#261b16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ikona marki - ikona5 */}
        <div className="flex justify-center mb-6">
          <img
            src={icon5}
            alt=""
            aria-hidden="true"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#261b16] mb-8 text-center">
          Znasz to?
        </h2>

        {/* Lead Bold Text in Open Sans Bold */}
        <div className="max-w-3xl mx-auto space-y-4 mb-8 font-sans text-center">
          <p className="font-bold text-lg sm:text-xl text-[#261b16] leading-snug">
            Masz wrażenie, że utknęłaś w tym samym punkcie.
            <br className="hidden sm:inline" />
            {' '}Problem wraca do Ciebie zupełnie jak bumerang. A myślałaś, że już to przepracowałaś.
          </p>

          <p className="text-base sm:text-lg text-[#39251d] leading-relaxed font-light">
            Może Twoja praca nie daje Ci już satysfakcji. Albo marzysz o własnym biznesie z misją, ale kiedy przychodzi do działania, pojawia się lęk i milion wątpliwości. A może prowadzisz już biznes, ale wciąż nie działa to tak, jak byś chciała. Dużo pracujesz i towarzyszy Ci znajomy stres, chaos i presja. Brakuje Ci czasu, energii oraz wolności, o którą tak się starałaś. Coraz częściej czujesz frustrację, napięcie i zmęczenie.
          </p>
        </div>

        {/* Soft Rounded Card without border, centered text */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-base sm:text-lg text-[#261b16] leading-relaxed font-sans font-light">
            Wyobraź sobie, że przychodzisz na sesję EFT, gdzie w bezpiecznej i wspierającej atmosferze przyglądamy się temu, co naprawdę stoi za Twoim problemem. Schodzimy głębiej, warstwa po warstwie, zamiast próbować przykryć objawy kolejną poradą, strategią czy tekstem w stylu: „muszę się w końcu ogarnąć”. Napięcie puszcza, wraca energia i klarowność kierunku. Na sytuację, która do tej pory Cię blokowała, patrzysz z zupełnie innej perspektywy oraz łatwiej Ci podjąć działania.{' '}
            <strong className="font-bold text-[#261b16]">
              Robisz kolejny krok, tym razem bez presji.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};
