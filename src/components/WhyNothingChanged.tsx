import React, { useState, useRef } from 'react';
import { Camera, Upload, CheckCircle2 } from 'lucide-react';

interface WhyNothingChangedProps {
  onOpenBooking?: () => void;
}

// Dynamically match any uploaded photo named monika1 or similar in assets
const imageModules = import.meta.glob<{ default: string }>(
  '../assets/{monika1,monika-1,monika_1,monika-dlaczego,foto1}.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);

const serverImage = Object.values(imageModules)[0]?.default;

export const WhyNothingChanged: React.FC<WhyNothingChangedProps> = ({ onOpenBooking }) => {
  const [localImage, setLocalImage] = useState<string | null>(() => {
    return localStorage.getItem('monika1_custom_image') || null;
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeImage = localImage || serverImage;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Immediately create local preview and persist
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setLocalImage(dataUrl);
        try {
          localStorage.setItem('monika1_custom_image', dataUrl);
        } catch {
          // Ignore quota limits if any
        }
      }
    };
    reader.readAsDataURL(file);

    // 2. Upload to server to persist permanently
    try {
      setIsUploading(true);
      const res = await fetch('/api/upload-image', {
        method: 'POST',
        body: file,
      });
      if (res.ok) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    } catch {
      // Local preview is already active
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="dlaczego" className="py-20 md:py-28 bg-[#261b16] text-[#fcf7f5] border-t border-[#39251d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy (Centered on mobile & tablet, left-aligned on desktop lg:) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.2] tracking-tight text-[#fcf7f5]">
              Dlaczego do tej pory
              <br />
              nic się nie zmieniło?
            </h2>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#cfbea7] font-light font-sans max-w-2xl mx-auto lg:mx-0">
              <p>
                Być może próbowałaś już poradzić sobie sama. Czytałaś książki, kupowałaś kursy, korzystałaś z mentoringów, próbowałaś bardziej się zmotywować albo po prostu <strong className="font-bold text-[#fcf7f5]">„wziąć się w garść”</strong>. Tylko że sama wiedza nie zawsze wystarcza, kiedy w środku wciąż działa ten sam lęk, stres, napięcie czy przekonania.
              </p>
              <p>
                Możesz doskonale wiedzieć, co chcesz zrobić, a mimo to odkładać ważne rzeczy, bać się decyzji, sabotować własne pomysły albo ciągle działać na granicy swoich możliwości.
              </p>
              <p>
                Bo jeśli wciąż próbujesz coś zmienić z tego samego poziomu napięcia, lęku i przekonań, sama kolejna porcja wiedzy niewiele zmieni. Czasem potrzebujesz zatrzymać się i popracować z tym, co uruchamia się w Tobie, kiedy próbujesz zrobić coś inaczej niż dotychczas.
              </p>
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

          {/* Right Column: Photo monika1 or Interactive Uploader */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Wgraj zdjęcie Moniki"
              />

              {activeImage ? (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#7d6c5b]/40 aspect-[4/5] bg-[#39251d] group">
                  <img
                    src={activeImage}
                    alt="Monika Trzeciak - Dlaczego nic się nie zmieniło"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle replace button on hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-full bg-[#1c1410]/90 text-xs text-[#fcf7f5] hover:text-[#fff852] backdrop-blur-sm border border-[#7d6c5b]/40 transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg"
                      title="Zmień zdjęcie"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Zmień zdjęcie</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-dashed border-[#7d6c5b]/50 aspect-[4/5] bg-[#39251d]/60 flex flex-col items-center justify-center p-8 text-center cursor-pointer hover:border-[#fff852]/60 hover:bg-[#39251d]/80 transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#261b16] group-hover:bg-[#1c1410] flex items-center justify-center mb-4 text-[#cfbea7] group-hover:text-[#fff852] shadow-inner transition-colors">
                    {uploadSuccess ? (
                      <CheckCircle2 className="w-8 h-8 text-[#fff852]" />
                    ) : (
                      <Camera className="w-8 h-8 opacity-85" />
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#fcf7f5] mb-2">
                    Zdjęcie Moniki
                  </h3>

                  <p className="text-xs text-[#cfbea7] leading-relaxed max-w-xs mb-5 font-light font-sans">
                    Kliknij tutaj lub przeciągnij plik <span className="text-[#fff852] font-mono">monika1.jpg</span>, aby natychmiast załadować zdjęcie w tym miejscu.
                  </p>

                  <button
                    type="button"
                    disabled={isUploading}
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fff852] text-[#261b16] group-hover:bg-[#faef3d] transition-all shadow-md flex items-center gap-2 cursor-pointer font-sans"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{isUploading ? 'Ładowanie...' : 'Wybierz zdjęcie z dysku'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
