import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock, MapPin, User, Phone, ShieldCheck, Printer, Navigation, X } from 'lucide-react';
import { BookingRecord } from '../types';
import { BUSINESS_INFO } from '../data/spaData';
import { ZivaLogo } from './ZivaLogo';

interface BookingConfirmationModalProps {
  booking: BookingRecord;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({ booking, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full border border-stone-200/90 shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close confirmation"
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#1C1917] text-white p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="flex justify-center mb-4">
            <ZivaLogo variant="light" size="sm" layout="horizontal" />
          </div>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C5A880]/20 text-[#C5A880] mb-3 border border-[#C5A880]/40">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Appointment Confirmed
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1 text-stone-100">
            We Look Forward to Welcoming You
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto">
            A confirmation SMS & email have been dispatched to your contact details. Please keep your reference code handy upon arrival.
          </p>

          <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-stone-900/90 border border-stone-800 text-xs">
            <span className="text-stone-400">Booking Reference:</span>
            <span className="font-mono font-bold text-base text-[#DFCA9B] tracking-wider">
              {booking.bookingRef}
            </span>
          </div>
        </div>

        {/* Appointment Pass Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs space-y-4">
            <div className="flex items-start justify-between border-b border-stone-100 pb-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                  Reserved Ritual
                </span>
                <h4 className="text-lg font-serif font-bold text-[#1C1917] mt-0.5">
                  {booking.serviceName}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                  Total Payable
                </span>
                <p className="text-lg font-mono font-bold text-[#A88B63]">
                  ₹{booking.totalPriceINR.toLocaleString('en-IN')}
                </p>
                <span className="text-[10px] text-stone-500">({booking.paymentMethod})</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2.5 text-stone-700">
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <div>
                  <p className="text-stone-500 text-[10px] uppercase">Date</p>
                  <p className="font-semibold text-stone-900">{booking.appointmentDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-stone-700">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <div>
                  <p className="text-stone-500 text-[10px] uppercase">Time Slot</p>
                  <p className="font-semibold text-stone-900">{booking.timeSlot}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-stone-700">
                <User className="w-4 h-4 text-[#C5A880]" />
                <div>
                  <p className="text-stone-500 text-[10px] uppercase">Guest(s)</p>
                  <p className="font-semibold text-stone-900">
                    {booking.customerName} ({booking.numberOfGuests} guest{booking.numberOfGuests > 1 ? 's' : ''})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-stone-700">
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <div>
                  <p className="text-stone-500 text-[10px] uppercase">Mobile</p>
                  <p className="font-semibold text-stone-900">{booking.mobileNumber}</p>
                </div>
              </div>
            </div>

            {booking.additionalMessage && (
              <div className="pt-3 border-t border-stone-100 text-xs">
                <span className="text-stone-500 text-[10px] uppercase block mb-0.5">Special Requests:</span>
                <p className="text-stone-700 italic">"{booking.additionalMessage}"</p>
              </div>
            )}
          </div>

          {/* Location Card */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-stone-200/80 flex items-start gap-3 text-xs text-stone-700">
            <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-stone-900 block font-serif text-sm">ZIVA SPA Karol Bagh Sanctuary</strong>
              <p className="text-stone-600 leading-snug">{BUSINESS_INFO.address}</p>
              <p className="text-stone-500 text-[11px]">
                Opposite Gaffar Market · 3 mins from Karol Bagh Metro · Free valet parking assistance
              </p>
            </div>
          </div>

          {/* Etiquette notice */}
          <div className="flex items-start gap-2.5 text-xs text-stone-500 bg-stone-100/70 p-3.5 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              Please arrive 15 minutes before your scheduled appointment to enjoy our complimentary aromatic welcome foot soak and herbal tea.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-[#1C1917] text-xs font-semibold transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Pass</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:flex-1 px-5 py-3 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#C5A880]" />
              <span>Navigate via Google Maps</span>
            </a>

            <Link
              to="/my-bookings"
              onClick={onClose}
              className="w-full sm:w-auto text-center px-4 py-3 text-xs font-semibold text-[#A88B63] hover:underline"
            >
              View in My Bookings →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
