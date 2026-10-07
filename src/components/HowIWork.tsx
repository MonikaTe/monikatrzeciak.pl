import React from 'react';

export const HowIWork: React.FC = () => {
  const steps = [
    {
      num: 1,
      text: 'Przychodzisz z konkretnym tematem: blokadą, powracającym schematem, stresem związanym z biznesem albo emocją, która przytłacza Cię na co dzień.',
    },
    {
      num: 2,
      text: 'Zadaję Ci pytania i łączę kropki, także tam, gdzie się tego nie spodziewasz.',
    },
    {
      num: 3,
      text: 'Opukujemy oraz uwalniamy niewspierające emocje, przekonania i historie, które stoją za problemem.',
    },
    {
      num: 4,
      text: 'Wychodzisz z większym dystansem, spokojem i energią do działania.',
    },
  ];

  return (
    <section id="jak-pracuje" className="py-20 md:py-28 bg-[#fcf7f5] text-[#261b16] border-t border-[#cfbea7]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#261b16] mb-6">
          Jak pracuję?
        </h2>

        {/* Intro */}
        <div className="max-w-3xl mx-auto space-y-4 mb-14 text-base sm:text-lg leading-relaxed text-[#39251d]">
          <p className="font-bold font-sans text-[#261b16]">
            Łączę EFT (Techniki Emocjonalnej Wolności) i Matrix Reimprinting z coachingiem.
          </p>
          <p className="font-light font-sans">
            Na sesji przyglądamy się temu, co sprawia, że mimo chęci nadal stoisz w miejscu. Schodzimy pod powierzchnię i pracujemy z emocjami, żeby dotrzeć do tego, co naprawdę Cię blokuje.
          </p>
        </div>

        {/* Subtitle */}
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#261b16] mb-10">
          Jak to wygląda w praktyce:
        </h3>

        {/* 2x2 Steps Grid without borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-3xl p-8 pt-10 text-center shadow-sm flex flex-col items-center justify-center min-h-[170px]"
            >
              {/* Circular Number Badge in lighter warm brown, perfectly centered */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#af957f] text-[#fcf7f5] font-sans font-bold text-base flex items-center justify-center text-center leading-none shadow-sm select-none">
                <span className="flex items-center justify-center leading-none">{step.num}</span>
              </div>

              <p className="text-base text-[#261b16] leading-relaxed font-normal font-sans">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
