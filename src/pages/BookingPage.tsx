import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, Users, Sparkles, ShieldCheck, CheckCircle2, Phone, Mail, User, Tag, ArrowRight } from 'lucide-react';
import { SPA_SERVICES, SPA_PACKAGES, SPECIAL_OFFERS, BUSINESS_INFO } from '../data/spaData';
import { saveBooking } from '../services/bookingStorage';
import { BookingRecord } from '../types';
import { BookingConfirmationModal } from '../components/BookingConfirmationModal';
import { SEOHead } from '../components/SEOHead';

const TIME_SLOTS = [
  '08:00 AM',
  '09:30 AM',
  '10:30 AM',
  '11:30 AM',
  '12:30 PM',
  '01:30 PM',
  '02:30 PM',
  '03:30 PM',
  '04:30 PM',
  '05:30 PM',
  '06:30 PM',
  '07:30 PM',
  '08:30 PM',
  '09:30 PM',
  '10:30 PM',
  '11:30 PM',
  '12:30 AM (Midnight)',
  '02:00 AM (Late Night)',
  '04:00 AM (Early Dawn)',
  '06:00 AM (Sunrise)',
];

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    searchParams.get('service') || SPA_SERVICES[0].id
  );
  const [appointmentDate, setAppointmentDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('02:30 PM');
  const [numberOfGuests, setNumberOfGuests] = useState<number>(() => {
    const qGuests = searchParams.get('guests');
    return qGuests ? parseInt(qGuests, 10) : 1;
  });

  const [customerName, setCustomerName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [additionalMessage, setAdditionalMessage] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'Pay at Spa' | 'UPI / Online' | 'Gift Voucher'>('Pay at Spa');

  // Promo code
  const [promoCode, setPromoCode] = useState<string>(searchParams.get('promo') || '');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(searchParams.get('promo') || null);
  const [promoDiscountAmount, setPromoDiscountAmount] = useState<number>(0);
  const [promoError, setPromoError] = useState<string | null>(null);

  // Errors & Modal
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  // Find selected service
  const currentService = SPA_SERVICES.find((s) => s.id === selectedServiceId) || SPA_SERVICES[0];

  // Recalculate price
  const baseServicePrice = currentService.priceINR;
  // If it's a couple service, price is already for 2, otherwise multiply if multiple guests
  const isCoupleService = currentService.category === 'couple';
  const subtotal = isCoupleService ? baseServicePrice : baseServicePrice * numberOfGuests;

  const finalTotal = Math.max(0, subtotal - promoDiscountAmount);

  // Handle promo code application
  const applyPromo = (codeToApply: string) => {
    const clean = codeToApply.trim().toUpperCase();
    if (!clean) {
      setAppliedPromo(null);
      setPromoDiscountAmount(0);
      setPromoError(null);
      return;
    }

    if (clean === 'ZIVA20') {
      const discount = Math.round(subtotal * 0.2);
      setPromoDiscountAmount(discount);
      setAppliedPromo('ZIVA20');
      setPromoError(null);
    } else if (clean === 'COUPLE1500') {
      setPromoDiscountAmount(1500);
      setAppliedPromo('COUPLE1500');
      setPromoError(null);
    } else if (clean === 'HAPPY15') {
      const discount = Math.round(subtotal * 0.15);
      setPromoDiscountAmount(discount);
      setAppliedPromo('HAPPY15');
      setPromoError(null);
    } else if (clean === 'CORPWELL') {
      const discount = Math.round(subtotal * 0.15);
      setPromoDiscountAmount(discount);
      setAppliedPromo('CORPWELL');
      setPromoError(null);
    } else {
      setPromoError('Invalid or expired promo code.');
      setPromoDiscountAmount(0);
      setAppliedPromo(null);
    }
  };

  useEffect(() => {
    if (searchParams.get('promo')) {
      applyPromo(searchParams.get('promo')!);
    }
  }, [searchParams, subtotal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!customerName.trim()) {
      errors.name = 'Full customer name is required.';
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      errors.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (!email.trim() || !email.includes('@')) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!appointmentDate) {
      errors.date = 'Please select a preferred appointment date.';
    }

    if (!timeSlot) {
      errors.timeSlot = 'Please select a preferred time slot.';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const booking = saveBooking({
        customerName: customerName.trim(),
        mobileNumber: mobileNumber.trim(),
        email: email.trim(),
        serviceId: currentService.id,
        serviceName: currentService.name,
        appointmentDate,
        timeSlot,
        numberOfGuests,
        totalPriceINR: finalTotal,
        additionalMessage: additionalMessage.trim() || undefined,
        paymentMethod,
        appliedPromo: appliedPromo || undefined,
      });

      setIsSubmitting(false);
      setConfirmedBooking(booking);
    }, 600);
  };

  return (
    <div className="space-y-16 pb-24">
      <SEOHead
        title="Book Spa Appointment in Karol Bagh, New Delhi | Ziva Spa Online"
        description="Schedule your massage or spa therapy at Ziva Spa on Arya Samaj Road, Karol Bagh, New Delhi. Select your preferred date, time slot, and treatment with instant booking."
        canonicalPath="/booking"
        keywords="book spa appointment Karol Bagh, spa booking New Delhi, reserve massage Karol Bagh, Ziva Spa booking, couple spa booking Delhi"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Book Appointment', item: '/booking' },
        ]}
      />
      {/* Header Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-semibold mb-4 shadow-sm max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="truncate">Ziva Spa – Open 24/7 · Day & Night Sessions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-stone-100">
            Book Spa Appointment in Karol Bagh, New Delhi
          </h1>
          <p className="mt-3 sm:mt-4 text-stone-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your therapeutic session at our Karol Bagh, New Delhi sanctuary in less than 60 seconds with instant confirmation. Walk-ins and reservations welcome round the clock.
          </p>
        </div>
      </section>

      {/* Booking Form Split Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Booking Wizard Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-stone-200/90 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Step 1: Select Service */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-900 block">
                    1. Select Spa Therapy or Package *
                  </label>
                  <Link to="/services" className="text-xs text-[#A88B63] hover:underline">
                    View Full Menu
                  </Link>
                </div>

                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                >
                  <optgroup label="Massage Therapies">
                    {SPA_SERVICES.filter((s) => s.category === 'massage').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.durationMinutes} Min) — ₹{s.priceINR.toLocaleString('en-IN')}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Couple Spa Suites">
                    {SPA_SERVICES.filter((s) => s.category === 'couple').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.durationMinutes} Min, for 2) — ₹{s.priceINR.toLocaleString('en-IN')}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Body Scrubs & Wraps">
                    {SPA_SERVICES.filter((s) => s.category === 'body').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.durationMinutes} Min) — ₹{s.priceINR.toLocaleString('en-IN')}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Facial Radiance">
                    {SPA_SERVICES.filter((s) => s.category === 'facial').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.durationMinutes} Min) — ₹{s.priceINR.toLocaleString('en-IN')}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Step 2: Date & Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-2">
                    2. Appointment Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                    />
                  </div>
                  {validationErrors.date && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.date}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-2">
                    3. Number of Guests
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setNumberOfGuests(num)}
                        className={`py-2.5 sm:py-3 rounded-xl text-xs font-semibold transition-colors border text-center ${
                          numberOfGuests === num
                            ? 'bg-[#1C1917] text-white border-[#1C1917]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Time Slot Picker */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-2">
                  4. Preferred Time Slot * (Open 24/7 Day & Night)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`py-2 px-1.5 sm:py-2.5 sm:px-2 rounded-xl text-[11px] sm:text-xs font-medium transition-colors border text-center ${
                        timeSlot === slot
                          ? 'bg-[#C5A880] text-[#1C1917] font-bold border-[#C5A880] shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {validationErrors.timeSlot && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.timeSlot}</p>
                )}
              </div>

              {/* Step 4: Customer Details */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block">
                  5. Guest Contact Information
                </span>

                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rathore"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                  {validationErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Mobile Number (for SMS & WhatsApp Confirmation) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98112 34567"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>
                    {validationErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Email Address (for Digital Pass) *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>
                    {validationErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Special Requests or Muscular Pain Focus (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Focus on neck & upper back tension, anniversary rose petal arrangement, mild pressure preferred..."
                    value={additionalMessage}
                    onChange={(e) => setAdditionalMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="pt-4 border-t border-stone-100">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-2">
                  6. Payment Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Pay at Spa', 'UPI / Online', 'Gift Voucher'] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`p-3 rounded-xl text-xs font-medium border text-left transition-colors ${
                        paymentMethod === method
                          ? 'border-[#C5A880] bg-[#FAF8F5] text-[#1C1917] font-semibold'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-md active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Appointment...' : 'Confirm Appointment Reservation'}
                </button>
                <p className="text-[11px] text-stone-400 text-center mt-2">
                  No advance payment needed for 'Pay at Spa'. Free cancellation up to 2 hours prior.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary & Promo Code */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-stone-200/90 shadow-md space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63] block">
                Reservation Summary
              </span>

              {/* Selected Treatment Mini Card */}
              <div className="flex gap-3.5 sm:gap-4 items-center p-3 rounded-2xl bg-[#FAF8F5] border border-stone-200/70">
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-semibold text-[#A88B63] block truncate">
                    {currentService.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#1C1917] leading-snug line-clamp-2">
                    {currentService.name}
                  </h4>
                  <span className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#A88B63] shrink-0" />
                    <span>{currentService.durationMinutes} Minutes</span>
                  </span>
                </div>
              </div>

              {/* Appointment Date & Slot preview */}
              <div className="space-y-2 text-xs border-y border-stone-100 py-4">
                <div className="flex justify-between text-stone-600">
                  <span>Date:</span>
                  <span className="font-semibold text-stone-900">{appointmentDate}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Time Slot:</span>
                  <span className="font-semibold text-stone-900">{timeSlot}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Guests:</span>
                  <span className="font-semibold text-stone-900">{numberOfGuests}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Sanctuary Venue:</span>
                  <span className="font-semibold text-stone-900">Karol Bagh, New Delhi</span>
                </div>
              </div>

              {/* Promo Code Input Box */}
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase text-stone-700 block">
                  Have a Promo Code?
                </span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. ZIVA20"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-mono uppercase focus:outline-none focus:border-[#C5A880]"
                  />
                  <button
                    type="button"
                    onClick={() => applyPromo(promoCode)}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-xs text-red-500">{promoError}</p>}
                {appliedPromo && (
                  <p className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Promo '{appliedPromo}' applied successfully!</span>
                  </p>
                )}
              </div>

              {/* Price Calculation breakdown */}
              <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Base Price ({numberOfGuests} guest{numberOfGuests > 1 ? 's' : ''}):</span>
                  <span className="font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {promoDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount Privilege:</span>
                    <span className="font-mono">-₹{promoDiscountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-[#1C1917] pt-2 border-t border-stone-100">
                  <span>Total Payable:</span>
                  <span className="font-mono text-xl text-[#A88B63]">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Location Mini Notice */}
              <div className="text-[11px] text-stone-500 bg-stone-50 p-3.5 rounded-xl space-y-1">
                <strong className="text-stone-800 block">ZIVA SPA Karol Bagh</strong>
                <p>3rd Floor, 10189/92, Arya Samaj Road, Opposite Gaffar Market, Block 14, WEA, Karol Bagh, New Delhi – 110005</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <BookingConfirmationModal
          booking={confirmedBooking}
          onClose={() => setConfirmedBooking(null)}
        />
      )}
    </div>
  );
};
