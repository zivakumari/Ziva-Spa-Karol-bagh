import React from 'react';
import logoCircle from '../assets/images/ziva_spa_logo_circle.png';

interface ZivaLogoProps {
  variant?: 'light' | 'dark' | 'gold' | 'monochrome';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked' | 'icon-only';
  showSubtitle?: boolean;
  show247Badge?: boolean;
  className?: string;
}

export const ZivaLogo: React.FC<ZivaLogoProps> = ({
  variant = 'dark',
  size = 'md',
  layout = 'horizontal',
  showSubtitle = true,
  show247Badge = false,
  className = '',
}) => {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  // Dimension scaling ensuring exact 1:1 aspect ratio without distortion
  const iconSizes = {
    xs: 'w-7 h-7 sm:w-8 sm:h-8',
    sm: 'w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11',
    md: 'w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14',
    lg: 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20',
    xl: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28',
  };

  const brandTextSizes = {
    xs: 'text-sm tracking-[0.20em]',
    sm: 'text-base sm:text-lg tracking-[0.22em]',
    md: 'text-lg sm:text-xl md:text-2xl tracking-[0.24em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.26em]',
    xl: 'text-3xl sm:text-4xl md:text-5xl tracking-[0.28em]',
  };

  const spaTextSizes = {
    xs: 'text-[11px] tracking-[0.24em]',
    sm: 'text-xs sm:text-sm tracking-[0.28em]',
    md: 'text-xs sm:text-sm md:text-base tracking-[0.3em]',
    lg: 'text-sm sm:text-lg tracking-[0.32em]',
    xl: 'text-lg sm:text-2xl tracking-[0.34em]',
  };

  const subtitleSizes = {
    xs: 'text-[7px] tracking-[0.22em]',
    sm: 'text-[8px] sm:text-[9px] tracking-[0.25em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.28em]',
    lg: 'text-[10px] sm:text-xs tracking-[0.3em]',
    xl: 'text-xs sm:text-sm tracking-[0.32em]',
  };

  const primaryTextColor = isLight
    ? 'text-white'
    : isGold
    ? 'text-[#C5A880]'
    : 'text-[#1C1917]';

  const accentColor = isLight ? 'text-[#DFCA9B]' : 'text-[#A88B63]';
  const subtitleColor = isLight ? 'text-stone-300/80' : 'text-stone-500';

  return (
    <div
      className={`inline-flex ${
        layout === 'stacked'
          ? 'flex-col items-center text-center gap-2'
          : 'flex-row items-center gap-2.5 sm:gap-3.5'
      } select-none group transition-opacity ${className}`}
    >
      {/* Official ZIVA SPA Emblem Logo Image */}
      <div className={`relative shrink-0 flex items-center justify-center ${iconSizes[size]}`}>
        <img
          src={logoCircle}
          alt="ZIVA SPA – Luxury Wellness & Rejuvenation Sanctuary"
          className="w-full h-full object-contain select-none transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-xs"
          style={{ aspectRatio: '1 / 1' }}
          loading="eager"
          decoding="async"
        />
      </div>

      {layout !== 'icon-only' && (
        <div className={`flex flex-col ${layout === 'stacked' ? 'items-center' : 'items-start'}`}>
          <div className="flex items-baseline gap-2 leading-none">
            <span
              className={`font-serif font-bold uppercase ${brandTextSizes[size]} ${primaryTextColor} tracking-[0.24em]`}
            >
              ZIVA
            </span>
            <span
              className={`font-sans font-light uppercase ${spaTextSizes[size]} ${accentColor} border-l border-[#C5A880]/50 pl-2 leading-tight`}
            >
              SPA
            </span>

            {show247Badge && (
              <span className="hidden sm:inline-flex items-center gap-1 ml-1 px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-[9px] font-bold text-emerald-300 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                24/7
              </span>
            )}
          </div>

          {showSubtitle && (
            <span
              className={`uppercase font-sans font-medium mt-1 leading-none ${subtitleSizes[size]} ${subtitleColor}`}
            >
              Luxury Wellness · New Delhi
            </span>
          )}
        </div>
      )}
    </div>
  );
};
