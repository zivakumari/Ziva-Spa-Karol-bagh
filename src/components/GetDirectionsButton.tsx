import React, { useState } from 'react';
import { Navigation, Compass, ExternalLink, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

interface GetDirectionsButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'luxury-gold' | 'outline' | 'compact';
  label?: string;
  showIcon?: boolean;
  showSubtext?: boolean;
}

export const GetDirectionsButton: React.FC<GetDirectionsButtonProps> = ({
  className = '',
  variant = 'primary',
  label = 'Get Directions',
  showIcon = true,
  showSubtext = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const spaLat = BUSINESS_INFO.coordinates.lat;
  const spaLng = BUSINESS_INFO.coordinates.lng;
  // Complete physical address string for Google Maps destination
  const encodedAddress = encodeURIComponent(BUSINESS_INFO.address);

  const handleOpenDirections = (e: React.MouseEvent) => {
    e.preventDefault();

    // If browser supports Geolocation, attempt to acquire exact user GPS coords
    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      setLoading(true);
      setStatusMsg('Acquiring your GPS location...');

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoading(false);
          setStatusMsg(null);
          const { latitude, longitude } = position.coords;
          // Google Maps directions with origin coordinates and exact Ziva Spa destination
          const gpsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${spaLat},${spaLng}&destination_place_id=ChIJ&travelmode=driving`;
          window.open(gpsUrl, '_blank', 'noopener,noreferrer');
        },
        (error) => {
          setLoading(false);
          setStatusMsg(null);
          console.warn('Geolocation permission denied or timed out:', error.message);
          // Fallback seamlessly: Google Maps app/web automatically detects device's current location when origin is omitted
          const fallbackUrl = `https://www.google.com/maps/dir/?api=1&destination=${spaLat},${spaLng}&travelmode=driving`;
          window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
        },
        {
          enableHighAccuracy: true,
          timeout: 3500,
          maximumAge: 60000,
        }
      );
    } else {
      // Direct fallback to Google Maps directions
      const directUrl = `https://www.google.com/maps/dir/?api=1&destination=${spaLat},${spaLng}&travelmode=driving`;
      window.open(directUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Variant Styling
  let styleClasses = '';
  switch (variant) {
    case 'luxury-gold':
      styleClasses =
        'bg-gradient-to-r from-[#DFCA9B] via-[#C5A880] to-[#A88B63] text-[#1C1917] hover:brightness-105 active:scale-[0.98] shadow-md shadow-[#C5A880]/20 font-semibold';
      break;
    case 'secondary':
      styleClasses =
        'bg-white text-stone-900 border border-stone-300 hover:bg-stone-50 hover:border-stone-400 active:scale-[0.98] shadow-xs font-medium';
      break;
    case 'outline':
      styleClasses =
        'bg-transparent text-[#DFCA9B] border border-[#C5A880]/50 hover:bg-[#C5A880]/10 hover:border-[#C5A880] active:scale-[0.98] font-medium';
      break;
    case 'compact':
      styleClasses =
        'bg-[#1C1917] text-white hover:bg-stone-800 text-xs px-3 py-1.5 rounded-lg active:scale-[0.98] font-medium';
      break;
    case 'primary':
    default:
      styleClasses =
        'bg-[#1C1917] text-white hover:bg-stone-800 active:scale-[0.98] shadow-sm font-semibold';
      break;
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      <button
        onClick={handleOpenDirections}
        disabled={loading}
        title="Get turn-by-turn directions to Ziva Spa from your current location on Google Maps"
        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 text-xs sm:text-sm tracking-wide ${styleClasses} ${className}`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-[#C5A880]" />
        ) : showIcon ? (
          <Navigation className="w-4 h-4 text-[#C5A880] shrink-0" />
        ) : null}

        <span>{loading ? 'Locating...' : label}</span>

        {!loading && (
          <ExternalLink className="w-3 h-3 opacity-60 ml-0.5 shrink-0 hidden sm:inline-block" />
        )}
      </button>

      {statusMsg && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-stone-500 bg-white/90 px-2 py-0.5 rounded shadow-xs border border-stone-200 animate-pulse z-20">
          {statusMsg}
        </span>
      )}

      {showSubtext && !statusMsg && (
        <span className="text-[10px] text-stone-500 mt-1">
          Opposite Gaffar Market · Karol Bagh
        </span>
      )}
    </div>
  );
};
