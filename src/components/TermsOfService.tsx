import React, { useEffect } from 'react';

export const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Regulamin świadczenia usług | Monika Trzeciak';
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#fcf7f5] text-[#261b16] font-sans antialiased py-12 px-5 sm:px-8 selection:bg-[#fff852] selection:text-[#261b16]">
      <div className="max-w-3xl mx-auto">
        {/* Powrót do strony głównej */}
        <div className="mb-8">
          <a
            href="/"
            onClick={handleBack}
            className="text-xs sm:text-sm font-semibold text-[#7d6c5b] hover:text-[#261b16] transition-colors inline-flex items-center gap-1.5"
          >
            ← Wróć do strony głównej
          </a>
        </div>

        <header className="mb-10 pb-6 border-b border-[#cfbea7]/50">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#261b16] mb-3">
            Regulamin świadczenia usług
          </h1>
          <p className="text-sm text-[#7d6c5b]">
            Monika Trzeciak · www.monikatrzeciak.pl · obowiązuje od 8 października 2026 r.
          </p>
        </header>

        <div className="space-y-8 text-[15px] sm:text-base leading-relaxed text-[#39251d]">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §1. Postanowienia ogólne
            </h2>
            <p>
              Regulamin określa zasady świadczenia usług przez Sprzedawcę za pośrednictwem strony internetowej www.monikatrzeciak.pl, w tym zasady rezerwacji i opłacania Sesji, reklamacji oraz odstąpienia od Umowy.
            </p>
            <p>
              Regulamin jest udostępniany nieodpłatnie na Stronie internetowej w sposób umożliwiający jego pozyskanie, odtwarzanie i utrwalanie.
            </p>
            <p>
              Przed dokonaniem rezerwacji Klient jest zobowiązany zapoznać się z Regulaminem i go zaakceptować.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §2. Definicje
            </h2>
            <p>
              Sprzedawca – Monika Trzeciak, prowadząca jednoosobową działalność gospodarczą pod firmą Monika Trzeciak, adres: ul. Jurowiecka 13/166, 15-101 Białystok, NIP: 9662065411.
            </p>
            <p>
              Klient – osoba fizyczna posiadająca pełną zdolność do czynności prawnych, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność prawną, która zawiera lub zamierza zawrzeć Umowę ze Sprzedawcą.
            </p>
            <p>
              Konsument – osoba fizyczna zawierająca ze Sprzedawcą Umowę w celu niezwiązanym bezpośrednio z jej działalnością gospodarczą lub zawodową.
            </p>
            <p>
              Przedsiębiorca na prawach konsumenta – osoba fizyczna zawierająca ze Sprzedawcą Umowę bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści Umowy wynika, że nie ma ona dla niej charakteru zawodowego, wynikającego w szczególności z przedmiotu wykonywanej przez nią działalności gospodarczej, udostępnionego na podstawie przepisów o Centralnej Ewidencji i Informacji o Działalności Gospodarczej.
            </p>
            <p>
              Strona internetowa – serwis dostępny pod adresem www.monikatrzeciak.pl.
            </p>
            <p>
              Sesja – usługa świadczona indywidualnie online, w szczególności sesja EFT, indywidualna sesja coachingowa lub konsultacja indywidualna, opisana na Stronie internetowej.
            </p>
            <p>
              Formularz rezerwacji – formularz w systemie rezerwacji ZenCal, dostępny ze Strony internetowej, umożliwiający wybór Sesji i terminu, podanie danych niezbędnych do realizacji Umowy oraz złożenie zamówienia z obowiązkiem zapłaty.
            </p>
            <p>
              Operator płatności – Stripe Payments Europe, Limited z siedzibą w Irlandii, obsługujący płatności online.
            </p>
            <p>
              Umowa – umowa o świadczenie Sesji zawierana na odległość, bez jednoczesnej fizycznej obecności stron, z wyłącznym wykorzystaniem środków porozumiewania się na odległość.
            </p>
            <p>
              Środowisko cyfrowe – urządzenie z dostępem do internetu, przeglądarką, kamerą i mikrofonem oraz aktywnym adresem e-mail, niezbędne do rezerwacji i uczestnictwa w Sesji.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §3. Dane Sprzedawcy i kontakt
            </h2>
            <p>
              Sprzedawca jest dostępny:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>e-mail: monikatrzeciak92@gmail.com,</li>
              <li>telefon: +48 500 587 408, od poniedziałku do piątku w godzinach 9:00–14:00,</li>
              <li>adres do korespondencji: ul. Jurowiecka 13/166, 15-101 Białystok.</li>
            </ul>
            <p>
              Rachunek bankowy Sprzedawcy (mBank): 94 1140 2004 0000 3102 8535 9915.
            </p>
            <p>
              Sprzedawca odpowiada na wiadomości w dni robocze.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §4. Wymagania techniczne
            </h2>
            <p>
              Do rezerwacji i uczestnictwa w Sesji niezbędne są: urządzenie z dostępem do internetu, aktualna przeglądarka internetowa, kamera i mikrofon (lub urządzenie umożliwiające udział w rozmowie wideo), aktywny adres e-mail oraz możliwość korzystania z usługi Google Meet.
            </p>
            <p>
              Sesje odbywają się za pośrednictwem Google Meet. Klient nie musi zakładać konta Google, o ile nie wymaga tego jego urządzenie lub ustawienia.
            </p>
            <p>
              Sprzedawca nie ponosi odpowiedzialności za zakłócenia wynikające z awarii łącza lub sprzętu po stronie Klienta, siły wyższej albo działań osób trzecich, chyba że wynikają one z okoliczności, za które Sprzedawca odpowiada.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §5. Oferta
            </h2>
            <p>
              Sprzedawca świadczy indywidualne Sesje EFT, sesje coachingowe i konsultacje online. Opis każdej Sesji, w tym jej zakres, czas trwania i cena, znajduje się na Stronie internetowej lub w kalendarzu rezerwacji.
            </p>
            <p>
              Sesje są prowadzone w języku polskim.
            </p>
            <p>
              Sesje są realizowane w terminach dostępnych w kalendarzu rezerwacji albo uzgodnionych ze Sprzedawcą wiadomością e-mail.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §6. Charakter Sesji
            </h2>
            <p>
              EFT (Emotional Freedom Techniques) to technika samopomocowa i rozwojowa. Sesje EFT i sesje coachingowe nie są świadczeniem zdrowotnym, nie są psychoterapią ani leczeniem i nie zastępują konsultacji z lekarzem, psychologiem lub psychoterapeutą.
            </p>
            <p>
              Sprzedawca nie gwarantuje osiągnięcia określonego rezultatu Sesji. Efekty zależą m.in. od zaangażowania i indywidualnej sytuacji Klienta.
            </p>
            <p>
              Jeżeli Klient leczy się z powodu choroby psychicznej lub somatycznej, jest w kryzysie psychicznym lub jest w ciąży, powinien skonsultować udział w Sesji z lekarzem prowadzącym i poinformować o tym Sprzedawcę przed Sesją.
            </p>
            <p>
              Sprzedawca może przerwać Sesję albo jej nie rozpocząć, jeżeli uzna, że jej kontynuowanie może zaszkodzić Klientowi, i wskazać właściwą formę pomocy. W takim przypadku Klient otrzymuje zwrot ceny za niewykonaną część Sesji.
            </p>
            <p>
              Sesje nie są nagrywane. Klient również nie jest uprawniony do nagrywania Sesji bez pisemnej zgody Sprzedawcy.
            </p>
            <p>
              Informacje przekazane podczas Sesji są poufne. Sprzedawca nie udostępnia ich nikomu, chyba że obowiązek ujawnienia wynika z przepisów prawa albo ujawnienie jest niezbędne dla ochrony życia lub zdrowia Klienta lub innej osoby.
            </p>
            <p>
              Zasady przetwarzania danych, w tym danych dotyczących zdrowia, opisuje Polityka prywatności.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §7. Rezerwacja i zawarcie Umowy
            </h2>
            <p>
              Rezerwacji Sesji można dokonywać przez całą dobę.
            </p>
            <p>
              W celu rezerwacji Klient:
            </p>
            <p>
              a) wybiera Sesję i termin w kalendarzu na Stronie internetowej,
            </p>
            <p>
              b) wypełnia Formularz rezerwacji, podając imię, nazwisko, adres e-mail oraz inne dane wymagane w formularzu,
            </p>
            <p>
              c) akceptuje Regulamin i zapoznaje się z Polityką prywatności,
            </p>
            <p>
              d) wyraża wyraźną zgodę na przetwarzanie danych dotyczących zdrowia, jeżeli takie dane będą ujawniane podczas Sesji (zgoda jest niezbędna do realizacji Sesji, może być w każdej chwili wycofana, co uniemożliwia jednak prowadzenie kolejnych Sesji),
            </p>
            <p>
              e) jeżeli jest Konsumentem lub Przedsiębiorcą na prawach konsumenta – składa oświadczenia, o których mowa w ust. 5,
            </p>
            <p>
              f) wybiera metodę płatności i klika przycisk „Zapłać” (lub „Pay”), co oznacza zamówienie z obowiązkiem zapłaty.
            </p>
            <p>
              Płatność jest dokonywana online za pośrednictwem Operatora płatności. Dostępne metody płatności to aktualnie: BLIK, karta płatnicza i Apple Pay. Aktualna lista metod jest widoczna w trakcie płatności.
            </p>
            <p>
              Umowa zostaje zawarta z chwilą opłacenia rezerwacji i otrzymania przez Klienta potwierdzenia rezerwacji. Rezerwacja, za którą nie dokonano płatności, nie prowadzi do zawarcia Umowy.
            </p>
            <p>
              Jeżeli termin Sesji przypada przed upływem 14 dni od zawarcia Umowy, Konsument i Przedsiębiorca na prawach konsumenta oświadczają w Formularzu rezerwacji, że wyraźnie żądają rozpoczęcia świadczenia przed upływem terminu do odstąpienia od Umowy oraz że wiedzą, iż po pełnym wykonaniu usługi utracą prawo odstąpienia od Umowy.
            </p>
            <p>
              Po zawarciu Umowy Klient otrzymuje na podany adres e-mail potwierdzenie zawarcia Umowy zawierające m.in. termin Sesji, link do spotkania lub informację o jego przekazaniu, treść Regulaminu oraz wzór oświadczenia o odstąpieniu, a także potwierdzenie złożonych oświadczeń, o których mowa w ust. 5.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §8. Ceny i płatności
            </h2>
            <p>
              Ceny Sesji są podane w polskich złotych na Stronie internetowej lub w kalendarzu rezerwacji i obowiązują w chwili złożenia zamówienia.
            </p>
            <p>
              Sprzedawca jest podatnikiem zwolnionym podmiotowo z podatku od towarów i usług na podstawie art. 113 ust. 1 ustawy o podatku od towarów i usług. Podane ceny są cenami końcowymi, zawierającymi wszystkie obowiązkowe składniki, i nie wiążą się z dodatkowymi kosztami po stronie Klienta.
            </p>
            <p>
              Sprzedawca nie stosuje indywidualnego dostosowywania cen na podstawie zautomatyzowanego podejmowania decyzji.
            </p>
            <p>
              Faktury (bez VAT) są wystawiane na żądanie Klienta, a w przypadku Klientów będących przedsiębiorcami – w terminach przewidzianych przepisami. Klient wyraża zgodę na przesyłanie faktur i ich korekt w formie elektronicznej na podany adres e-mail.
            </p>
            <p>
              Płatność kartą, BLIK-iem lub Apple Pay jest realizowana przez Operatora płatności. Sprzedawca nie ma dostępu do pełnych danych karty płatniczej Klienta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §9. Realizacja Sesji, zmiana terminu i odwołanie
            </h2>
            <p>
              Sesje odbywają się online przez Google Meet, w języku polskim, w terminie wybranym w kalendarzu albo uzgodnionym wiadomością e-mail. Czas trwania Sesji jest wskazany w jej opisie.
            </p>
            <p>
              Link do spotkania Klient otrzymuje wiadomością e-mail przed Sesją.
            </p>
            <p>
              Klient może bezpłatnie przenieść lub odwołać Sesję najpóźniej na 24 godziny przed jej rozpoczęciem, wiadomością e-mail lub za pomocą linku zawartego w potwierdzeniu rezerwacji. Przeniesienie terminu możliwe jest, jeżeli w kalendarzu są dostępne wolne terminy.
            </p>
            <p>
              Późniejsze odwołanie Sesji albo niepojawienie się na niej oznacza, że Sesja przepada bez zwrotu płatności.
            </p>
            <p>
              Jeżeli Klient nie dołączy do spotkania w ciągu 15 minut od jego planowanego rozpoczęcia, Sesję uważa się za odbytą. Czas Sesji nie ulega wówczas przedłużeniu.
            </p>
            <p>
              Jeżeli Sprzedawca odwoła Sesję lub nie będzie mógł jej przeprowadzić (np. z powodu choroby lub awarii po swojej stronie), zaproponuje nowy termin. Jeżeli żaden termin nie odpowiada Klientowi, Klient otrzyma zwrot pełnej ceny za tę Sesję w ciągu 14 dni od zgłoszenia.
            </p>
            <p>
              Postanowienia ust. 4 i 5 nie ograniczają prawa Konsumenta i Przedsiębiorcy na prawach konsumenta do odstąpienia od Umowy na zasadach opisanych w §11.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §10. Reklamacje
            </h2>
            <p>
              Sprzedawca odpowiada za należyte wykonanie Sesji zgodnie z Umową i przepisami prawa.
            </p>
            <p>
              Klient może zgłosić reklamację dotyczącą Sesji lub działania Strony internetowej wiadomością e-mail na adres monikatrzeciak92@gmail.com lub pisemnie na adres Sprzedawcy.
            </p>
            <p>
              Reklamacja powinna zawierać dane Klienta, wskazanie Sesji, opis zastrzeżeń oraz oczekiwany sposób rozwiązania sprawy.
            </p>
            <p>
              Sprzedawca rozpatruje reklamację i udziela odpowiedzi w terminie 14 dni od jej otrzymania. Jeżeli reklamacja jest niekompletna, Sprzedawca wezwie Klienta do jej uzupełnienia, wskazując, czego brakuje.
            </p>
            <p>
              Reklamacja nie wyłącza prawa Klienta do dochodzenia roszczeń na ogólnych zasadach.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §11. Prawo odstąpienia od Umowy
            </h2>
            <p>
              Konsument i Przedsiębiorca na prawach konsumenta mogą odstąpić od Umowy zawartej na odległość bez podania przyczyny w terminie 14 dni od dnia jej zawarcia.
            </p>
            <p>
              Aby zachować termin, wystarczy wysłać oświadczenie o odstąpieniu przed jego upływem.
            </p>
            <p>
              Oświadczenie można złożyć:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>wiadomością e-mail na adres monikatrzeciak92@gmail.com,</li>
              <li>pisemnie na adres: ul. Jurowiecka 13/166, 15-101 Białystok,</li>
              <li>za pomocą wzoru stanowiącego załącznik do Regulaminu (jego użycie nie jest obowiązkowe).</li>
            </ul>
            <p>
              Prawo odstąpienia nie przysługuje w odniesieniu do umowy o świadczenie usług, jeżeli Sprzedawca wykonał w pełni usługę za wyraźną i uprzednią zgodą Konsumenta lub Przedsiębiorcy na prawach konsumenta, który został poinformowany przed rozpoczęciem świadczenia, że po spełnieniu świadczenia przez Sprzedawcę utraci prawo odstąpienia od umowy, i przyjął to do wiadomości.
            </p>
            <p>
              Jeżeli Konsument lub Przedsiębiorca na prawach konsumenta zażądał rozpoczęcia świadczenia przed upływem terminu do odstąpienia, a następnie odstąpił od Umowy przed pełnym wykonaniem usługi, jest zobowiązany do zapłaty za usługi spełnione do chwili odstąpienia. Kwota jest obliczana proporcjonalnie do zakresu spełnionego świadczenia, z uwzględnieniem uzgodnionej ceny.
            </p>
            <p>
              Sprzedawca zwraca otrzymane płatności niezwłocznie, nie później niż w terminie 14 dni od dnia, w którym otrzymał oświadczenie o odstąpieniu. Zwrot następuje tą samą metodą płatności, jakiej użył Klient, chyba że Klient wyraźnie zgodził się na inną metodę, która nie wiąże się dla niego z żadnymi kosztami.
            </p>
            <p>
              Prawo odstąpienia, o którym mowa w tym paragrafie, nie przysługuje Klientowi będącemu przedsiębiorcą innym niż Przedsiębiorca na prawach konsumenta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §12. Klienci spoza Polski
            </h2>
            <p>
              Sesje są prowadzone w języku polskim niezależnie od miejsca, z którego Klient się łączy. Klient może uczestniczyć w Sesji z dowolnego kraju, jeżeli ma dostęp do Środowiska cyfrowego określonego w §4.
            </p>
            <p>
              Umowa podlega prawu polskiemu. Wybór prawa polskiego nie pozbawia Konsumenta ochrony wynikającej z przepisów, od których nie można odstąpić w drodze umowy, obowiązujących w państwie jego zwykłego pobytu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §13. Pozasądowe rozwiązywanie sporów
            </h2>
            <p>
              Sprzedawca zachęca do polubownego rozwiązywania sporów i gotów jest rozważyć mediację na zasadach uzgodnionych przez strony.
            </p>
            <p>
              Konsument może skorzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, w szczególności:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>zwrócić się do stałego polubownego sądu konsumenckiego przy właściwym wojewódzkim inspektorze Inspekcji Handlowej,</li>
              <li>zwrócić się do wojewódzkiego inspektora Inspekcji Handlowej z wnioskiem o wszczęcie postępowania mediacyjnego,</li>
              <li>skorzystać z pomocy powiatowego (miejskiego) rzecznika konsumentów lub organizacji społecznej, do której zadań statutowych należy ochrona konsumentów.</li>
            </ul>
            <p>
              Informacje o pozasądowych sposobach rozwiązywania sporów są dostępne na stronie Urzędu Ochrony Konkurencji i Konsumentów: www.uokik.gov.pl.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §14. Dane osobowe
            </h2>
            <p>
              Zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies opisuje Polityka prywatności i plików cookies, dostępna na Stronie internetowej.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §15. Prawa autorskie
            </h2>
            <p>
              Treści zamieszczone na Stronie internetowej oraz materiały przekazywane podczas Sesji są utworami chronionymi prawem autorskim, a prawa do nich przysługują Sprzedawcy, chyba że wskazano inaczej.
            </p>
            <p>
              Klient może z nich korzystać wyłącznie na własny użytek. Rozpowszechnianie, kopiowanie i udostępnianie ich osobom trzecim wymaga uprzedniej zgody Sprzedawcy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              §16. Postanowienia końcowe
            </h2>
            <p>
              Umowy są zawierane w języku polskim.
            </p>
            <p>
              W sprawach nieuregulowanych Regulaminem stosuje się przepisy prawa polskiego, w szczególności Kodeksu cywilnego, ustawy o prawach konsumenta oraz ustawy o świadczeniu usług drogą elektroniczną.
            </p>
            <p>
              Sprzedawca może zmienić Regulamin z ważnych przyczyn, takich jak zmiana przepisów prawa, zmiana oferty lub sposobu świadczenia usług, zmiana metod płatności albo względy techniczne lub bezpieczeństwa. O zmianach informuje przez publikację nowej wersji na Stronie internetowej z podaniem daty jej wejścia w życie.
            </p>
            <p>
              Zmiany nie dotyczą Umów zawartych przed ich wprowadzeniem, które nie zostały wykonane, chyba że Klient wyrazi zgodę na nowe warunki. Zmiany nie wpływają na prawa nabyte przez Klienta.
            </p>
            <p>
              W przypadku Klientów będących przedsiębiorcami, innymi niż Przedsiębiorcy na prawach konsumenta, sądem właściwym do rozstrzygania sporów jest sąd właściwy dla siedziby Sprzedawcy. Odpowiedzialność Sprzedawcy jest ograniczona do ceny zapłaconej za daną Sesję, z wyłączeniem szkody wyrządzonej umyślnie.
            </p>
            <p>
              Regulamin obowiązuje od dnia 8 października 2026 r.
            </p>
            <p>
              Poprzednie wersje Regulaminu będą dostępne na Stronie internetowej wraz z datami ich obowiązywania.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#cfbea7]/50">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#261b16]">
              Załącznik: wzór oświadczenia o odstąpieniu od umowy
            </h2>
            <p className="text-sm italic text-[#7d6c5b]">
              (formularz ten należy wypełnić i odesłać tylko w przypadku chęci odstąpienia od umowy)
            </p>
            <div className="bg-white p-6 rounded-2xl border border-[#cfbea7]/60 space-y-3 text-sm sm:text-base">
              <p>
                Adresat: Monika Trzeciak, ul. Jurowiecka 13/166, 15-101 Białystok, e-mail: monikatrzeciak92@gmail.com
              </p>
              <p>
                Ja/My (*) niniejszym informuję/informujemy (*) o moim/naszym (*) odstąpieniu od umowy o świadczenie następującej usługi (Sesji): …………………………………………
              </p>
              <p>
                Data zawarcia umowy: ………………… Termin Sesji: …………………
              </p>
              <p>
                Imię i nazwisko konsumenta(-ów): …………………………………………
              </p>
              <p>
                Adres konsumenta(-ów): …………………………………………
              </p>
              <p>
                Data: ………………… Podpis konsumenta(-ów) (tylko jeżeli formularz jest przesyłany w wersji papierowej): …………………
              </p>
              <p className="text-xs text-[#7d6c5b] pt-2">
                (*) Niepotrzebne skreślić.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
