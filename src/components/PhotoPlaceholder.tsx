import React from 'react';
import { Camera } from 'lucide-react';

interface PhotoPlaceholderProps {
  description: string;
  recommendedSize?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide' | 'tall';
  className?: string;
  altText: string;
  theme?: 'light' | 'dark';
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  description,
  recommendedSize = '4:5',
  aspectRatio = 'portrait',
  className = '',
  altText,
  theme = 'light',
}) => {
  const aspectClasses = {
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    wide: 'aspect-[16/9]',
    tall: 'aspect-[3/4]',
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl border-2 border-dashed p-6 flex flex-col items-center justify-center text-center transition-all ${
        isDark
          ? 'border-[#7d6c5b]/60 bg-[#39251d] text-[#fcf7f5]'
          : 'border-[#cfbea7] bg-white text-[#261b16]'
      } ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={altText}
    >
      <div className="flex flex-col items-center gap-2 max-w-xs font-sans">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isDark ? 'bg-[#261b16] text-[#fff852]' : 'bg-[#fcf7f5] text-[#7d6c5b]'
          }`}
        >
          <Camera className="w-6 h-6" />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-[#fcf7f5]' : 'text-[#261b16]'}`}>
          Miejsce na zdjęcie
        </span>
        <p className={`text-xs leading-relaxed ${isDark ? 'text-[#cfbea7]' : 'text-[#7d6c5b]'}`}>
          {description}
        </p>
        {recommendedSize && (
          <span className={`text-[11px] font-mono ${isDark ? 'text-[#cfbea7]/70' : 'text-[#7d6c5b]/80'}`}>
            Format: {recommendedSize}
          </span>
        )}
      </div>
    </div>
  );
};
