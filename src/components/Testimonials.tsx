import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      author: 'Zuza',
      content:
        'Na EFT z Moniką zdecydowałam się ze względu na powracającą blokadę, która pojawia się w momencie skalowania mojego biznesu - opór w ciele, sabotaż i rozproszenie działań + olbrzymia niecierpliwość co do efektów. To wszystko spowodowało, że czułam, że mój układ nerwowy nie nadąża za moimi pomysłami i sabotuje po drodze działania, które prowadzą do ich realizacji. Podczas sesji przeszłyśmy przez zablokowane emocje praktyką, dużym plusem były też wglądy teoretyczne, dzięki którym byłam w stanie połączyć kropki jeszcze lepiej w głowie. Pod koniec Monika sama zauważyła i zasugerowała zajęcie się jeszcze jednym podtematem (mój opór co do robienia rzeczy operacyjnych w biznesie), co dało mi dużo dystansu, spokoju, poczułam jak opór się zminimalizował, a zaraz po sesji czułam dawkę energii do zajęcia się rzeczami, które odkładałam od kilku tygodni.',
    },
    {
      author: 'Sylwia',
      content:
        'Monika ma niesamowitą intuicję i ciekawą perspektywę. Szybko łączy kropki - nawet tam, gdzie nie podejrzewałam, że jest co łączyć. Zadając kilka, niezwykle trafnych pytań pomogła mi dostrzec zależności i dojść w rozumieniu i czuciu mojego problemu głębiej, niż wcześniej było to dla mnie możliwe. Monika prowadziła sesję w sposób bardzo empatyczny. Czułam się bezpieczna i zaopiekowana. Niesamowite, że po jednej sesji uwolniłam aż tyle! Wzruszenie i integracja tego, co się zadziało w ciągu godzinnej sesji trwają nadal. Serdecznie POLECAM Monikę!',
    },
    {
      author: 'Marta',
      content:
        'Podczas sesji została stworzona przestrzeń, w której mogłam spokojnie sprawdzić, czy ta metoda jest dla mnie i czy ze mną rezonuje. To było naprawdę wartościowe, pełne energii doświadczenie, momentami trudne do opisania, ale bardzo wyraźnie odczuwalne. W trakcie sesji pojawiały się różne odczucia, jakby "wymiatanie miotełką", mrowienie czy uczucie przebiegających mrówek. Dużo działo się na poziomie energii. Po sesji czuję się naprawdę dobrze, jestem pełna optymizmu i wiary w to, że pójdę naprzód, że w końcu coś się odblokuje i zacznie się rozwijać.',
    },
    {
      author: 'Ania',
      content:
        'Sesja pomogła mi uporządkować metodę, którą już wcześniej znałam i sporadycznie stosowałam. Dzięki niej mogłam spojrzeć szerzej na problem, z którym przyszłam, i przypomnieć sobie, że mam konkretne, skuteczne narzędzie do pracy z własnymi emocjami. Czułam Twoje zaangażowanie Monika podczas sesji, co było dla mnie bardzo wspierające. ❤️ Wychodzę z tej sesji z poczuciem, że każdy problem jest do rozwiązania i to tylko kwestia czasu. 😊',
    },
    {
      author: 'Sonia',
      content:
        'Na sesje do Moniki zapisałam się przypadkiem, coś mnie zawołało i to była bardzo dobra decyzja. Jej ciepło, naturalność i spokój pozwoliło zaufać i dać się poprowadzić już na pierwszym spotkaniu. Wyszły ciekawe rzeczy, których sama bym nie połączyła. Polecam serdecznie ❤️',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const toggleExpand = (author: string) => {
    setExpandedMap((prev) => ({ ...prev, [author]: !prev[author] }));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Visible items in circular carousel (1 on mobile, 2 on md, 3 on lg)
  const getVisibleTestimonials = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      list.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return list;
  };

  const PREVIEW_CHAR_LIMIT = 240;

  return (
    <section id="opinie" className="py-20 md:py-28 bg-[#261b16] text-[#fcf7f5] border-t border-[#39251d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fcf7f5] mb-12 md:mb-14 text-center">
          Co mówią klientki po sesjach ze mną:
        </h2>

        {/* Carousel Container */}
        <div
          className="relative flex items-center gap-2 sm:gap-4 md:gap-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Poprzednia opinia"
            className="shrink-0 p-1.5 sm:p-2 md:p-3 text-[#fcf7f5]/80 hover:text-[#fff852] hover:scale-110 transition-all cursor-pointer focus-visible:outline-hidden"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 stroke-[1.5]" />
          </button>

          {/* Cards Display - Exactly 1 card on mobile, 2 on md, 3 on lg */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {getVisibleTestimonials().map((item, idx) => {
                const isLong = item.content.length > PREVIEW_CHAR_LIMIT;
                const isExpanded = !!expandedMap[item.author];
                const displayText =
                  isLong && !isExpanded
                    ? `${item.content.slice(0, PREVIEW_CHAR_LIMIT).trim()}...`
                    : item.content;

                return (
                  <div
                    key={`${item.author}-${idx}`}
                    className={`bg-[#39251d] rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl flex-col justify-between transition-all duration-300 min-h-[300px] md:min-h-[320px] ${
                      idx === 0 ? 'flex' : idx === 1 ? 'hidden md:flex' : 'hidden lg:flex'
                    }`}
                  >
                    <div className="text-center lg:text-left">
                      <p className="text-sm sm:text-base text-[#cfbea7] leading-relaxed font-light whitespace-pre-line font-sans">
                        {displayText}
                      </p>

                      {isLong && (
                        <div className="flex justify-center lg:justify-start">
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.author)}
                            className="mt-3 text-xs font-semibold text-[#fff852] hover:text-[#fcee21] transition-colors cursor-pointer inline-flex items-center gap-1 font-sans focus:outline-none"
                          >
                            <span>{isExpanded ? 'Zwiń' : 'Rozwiń opinię'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Author name without divider line */}
                    <div className="pt-6 mt-auto text-center lg:text-left">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#fcf7f5]">
                        {item.author}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Następna opinia"
            className="shrink-0 p-1.5 sm:p-2 md:p-3 text-[#fcf7f5]/80 hover:text-[#fff852] hover:scale-110 transition-all cursor-pointer focus-visible:outline-hidden"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 stroke-[1.5]" />
          </button>
        </div>

        {/* Counter indicator for mobile & dots for all devices */}
        <div className="text-center mt-6 text-xs text-[#cfbea7] font-sans md:hidden">
          {currentIndex + 1} / {testimonials.length}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4 md:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i ? 'w-8 bg-[#fff852]' : 'w-2 bg-[#7d6c5b]/50 hover:bg-[#7d6c5b]'
              }`}
              aria-label={`Opinia ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
