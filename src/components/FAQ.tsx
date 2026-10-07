import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'Jak wygląda sesja?',
      answer:
        'Sesja trwa 50 minut i odbywa się online na Google Meet. Po zakupie dostajesz potwierdzenie i wszystkie informacje, w tym link do umówienia się na spotkanie. Najlepiej połącz się z laptopa, tak jest wygodniej niż na telefonie.',
    },
    {
      question: 'Czym jest EFT?',
      answer:
        'EFT (Emotional Freedom Techniques) to technika, w której opukujesz wybrane punkty na ciele i jednocześnie skupiasz się na konkretnej emocji albo sytuacji. Dzięki temu napięcie w ciele spada, a emocja traci swoją siłę. Nie musisz znać metody przed sesją, poprowadzę Cię krok po kroku.',
    },
    {
      question: 'Czy jedna sesja wystarczy?',
      answer:
        'Czasem po jednej sesji puszcza bardzo dużo. Przy tematach, które wracają od dawna, lepiej sprawdza się pakiet 4 sesji, bo możemy pracować z różnymi aspektami danego schematu.',
    },
    {
      question: 'Czy mogę się z Tobą skontaktować po sesji?',
      answer: (
        <div className="space-y-3">
          <p>
            Tak. Jeśli po sesji pojawią się dodatkowe pytania, przemyślenia albo będziesz chciała się czymś podzielić, możesz napisać do mnie mailowo lub przez Instagram.
          </p>
          <div className="space-y-1 pt-1 text-[#fcf7f5]">
            <p>
              E-mail:{' '}
              <a
                href="mailto:monikatrzeciak92@gmail.com"
                className="text-[#fff852] hover:underline"
              >
                monikatrzeciak92@gmail.com
              </a>
            </p>
            <p>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/monikatrzeciak.eft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fff852] hover:underline"
              >
                @monikatrzeciak.eft
              </a>
            </p>
          </div>
        </div>
      ),
    },
    {
      question: 'Czy sesja EFT zastąpi terapię?',
      answer:
        'Sesja EFT nie zastępuje terapii ani pomocy lekarskiej. Jeśli jesteś w trakcie leczenia, daj mi znać przed sesją albo na początku spotkania.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#261b16] text-[#fcf7f5] border-t border-[#39251d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fcf7f5] mb-14 text-center">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#39251d] rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#fcf7f5]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#261b16] text-[#cfbea7] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#fff852]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-[#cfbea7] text-sm sm:text-base leading-relaxed font-light font-sans">
                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
