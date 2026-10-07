import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'single' | 'package';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'single',
}) => {
  const [selectedType, setSelectedType] = useState<'single' | 'package'>(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs font-sans"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-[#fcf7f5] rounded-3xl shadow-2xl border border-[#cfbea7]/60 overflow-hidden">
        {/* Header */}
        <div className="bg-[#261b16] text-[#fcf7f5] px-6 py-5 flex items-center justify-between">
          <h3 className="font-serif text-xl sm:text-2xl font-medium">
            Zarezerwuj sesję
          </h3>
          <button
            type="button"
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-[#39251d] text-[#fcf7f5] hover:text-[#fff852] flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#39251d] text-[#fff852] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#261b16]">
                Dziękuję
              </h4>
              <p className="text-sm text-[#39251d] leading-relaxed">
                Po zakupie dostajesz potwierdzenie zapłaty oraz link do umówienia spotkania w kalendarzu.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-4 px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#261b16] text-[#fcf7f5] hover:bg-[#39251d] cursor-pointer transition-colors"
              >
                Zamknij
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedType('single')}
                  className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedType === 'single'
                      ? 'bg-[#261b16] text-[#fcf7f5] border-[#261b16] shadow-sm'
                      : 'bg-white text-[#261b16] border-[#cfbea7]/70'
                  }`}
                >
                  <div className="text-xs">Sesja pojedyncza</div>
                  <div className="font-serif text-lg font-bold">250 zł</div>
                  <div className="text-[11px] opacity-80">50 minut online</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedType('package')}
                  className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedType === 'package'
                      ? 'bg-[#261b16] text-[#fcf7f5] border-[#261b16] shadow-sm'
                      : 'bg-white text-[#261b16] border-[#cfbea7]/70'
                  }`}
                >
                  <div className="text-xs">Pakiet 4 sesji · BESTSELLER</div>
                  <div className="font-serif text-lg font-bold text-[#fff852]">800 zł</div>
                  <div className="text-[11px] opacity-80">oszczędzasz 200 zł</div>
                </button>
              </div>

              <div>
                <label htmlFor="name-input" className="block text-xs font-semibold text-[#261b16] mb-1 font-sans">
                  Imię
                </label>
                <input
                  id="name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#cfbea7]/80 text-sm text-[#261b16] focus:border-[#261b16] focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-semibold text-[#261b16] mb-1 font-sans">
                  E-mail
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#cfbea7]/80 text-sm text-[#261b16] focus:border-[#261b16] focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="msg-input" className="block text-xs font-semibold text-[#261b16] mb-1 font-sans">
                  Wiadomość
                </label>
                <textarea
                  id="msg-input"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#cfbea7]/80 text-sm text-[#261b16] focus:border-[#261b16] focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fff852] text-[#261b16] hover:bg-[#faef3d] transition-all cursor-pointer shadow-md font-sans"
                >
                  {selectedType === 'single' ? 'Rezerwuję sesję' : 'Wybieram pakiet'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
