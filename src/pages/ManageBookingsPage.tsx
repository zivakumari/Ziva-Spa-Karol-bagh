import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, MapPin, Phone, User, CheckCircle2, XCircle, RefreshCw, AlertCircle, Printer, Navigation } from 'lucide-react';
import { getStoredBookings, updateBookingStatus, rescheduleBooking } from '../services/bookingStorage';
import { BookingRecord } from '../types';
import { BUSINESS_INFO } from '../data/spaData';
import { BookingConfirmationModal } from '../components/BookingConfirmationModal';
import { SEOHead } from '../components/SEOHead';

export const ManageBookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBookingForPass, setSelectedBookingForPass] = useState<BookingRecord | null>(null);

  // Reschedule state
  const [reschedulingId, setReschedulingId] = useState<string | null>(null);
  const [newDate, setNewDate] = useState<string>('');
  const [newSlot, setNewSlot] = useState<string>('03:30 PM');

  useEffect(() => {
    setBookings(getStoredBookings());
  }, []);

  const handleCancelBooking = (id: string) => {
    if (window.confirm('Are you sure you wish to cancel this appointment? There are no cancellation fees.')) {
      updateBookingStatus(id, 'Cancelled');
      setBookings(getStoredBookings());
    }
  };

  const handleSaveReschedule = (id: string) => {
    if (!newDate) {
      alert('Please select a new appointment date.');
      return;
    }
    rescheduleBooking(id, newDate, newSlot);
    setReschedulingId(null);
    setBookings(getStoredBookings());
  };

  const filteredBookings = bookings.filter((b) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      b.bookingRef.toLowerCase().includes(q) ||
      b.customerName.toLowerCase().includes(q) ||
      b.mobileNumber.toLowerCase().includes(q) ||
      b.serviceName.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-16 pb-24">
      <SEOHead
        title="Manage Your Booking – Lookup, Reschedule or Cancel | Ziva Spa"
        description="Search your appointment by reference or mobile number, view digital passes, or reschedule appointments at Ziva Spa Karol Bagh, New Delhi."
        canonicalPath="/my-bookings"
        noindex={true}
      />
      {/* Header Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Appointments Portal
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Booking Management
          </h1>
          <p className="mt-3 sm:mt-4 text-stone-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Search, view, reschedule, or manage your upcoming ZIVA SPA appointments using your booking reference or registered mobile number.
          </p>
        </div>
      </section>

      {/* Search Bar Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Reference (e.g. ZV-84920) or Phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880]"
            />
          </div>

          <div className="text-xs text-stone-500">
            Showing <strong className="text-stone-900">{filteredBookings.length}</strong> recorded appointment{filteredBookings.length === 1 ? '' : 's'}
          </div>
        </div>
      </section>

      {/* Bookings List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200/90 p-8 space-y-3">
            <p className="font-serif text-2xl text-stone-800">No appointments found</p>
            <p className="text-xs text-stone-500">
              Check the booking reference or phone number you entered, or reserve a new appointment.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBookings.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-3xl border border-stone-200/90 p-5 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-shadow space-y-6"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-base text-[#1C1917] bg-[#FAF8F5] px-3 py-1 rounded-lg border border-stone-200">
                      {b.bookingRef}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        b.status === 'Confirmed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : b.status === 'Rescheduled'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : b.status === 'Completed'
                          ? 'bg-stone-100 text-stone-600'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  <div className="text-xs text-stone-400 font-mono">
                    Reserved: {new Date(b.createdAt).toLocaleDateString('en-IN')}
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-0.5">
                      Reserved Service
                    </span>
                    <strong className="text-stone-900 text-sm font-serif block">{b.serviceName}</strong>
                    <span className="text-stone-500">{b.numberOfGuests} guest{b.numberOfGuests > 1 ? 's' : ''}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-0.5">
                      Scheduled Schedule
                    </span>
                    <strong className="text-stone-900 text-sm block">{b.appointmentDate}</strong>
                    <span className="text-stone-500">{b.timeSlot}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-0.5">
                      Guest Contact
                    </span>
                    <strong className="text-stone-900 text-sm block">{b.customerName}</strong>
                    <span className="text-stone-500">{b.mobileNumber}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-0.5">
                      Payable Amount
                    </span>
                    <strong className="text-stone-900 text-base font-mono block">
                      ₹{b.totalPriceINR.toLocaleString('en-IN')}
                    </strong>
                    <span className="text-stone-500">{b.paymentMethod}</span>
                  </div>
                </div>

                {b.additionalMessage && (
                  <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600">
                    <span className="font-semibold text-stone-800">Special Notes:</span> {b.additionalMessage}
                  </div>
                )}

                {/* Reschedule inline editor */}
                {reschedulingId === b.id && (
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#C5A880]/40 space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block">
                      Select New Appointment Date & Time
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-stone-500 block mb-1">
                          New Date
                        </label>
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={newDate}
                          onChange={(e) => setNewDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-stone-500 block mb-1">
                          New Slot
                        </label>
                        <select
                          value={newSlot}
                          onChange={(e) => setNewSlot(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-white"
                        >
                          {['11:30 AM', '01:00 PM', '02:30 PM', '03:30 PM', '05:00 PM', '06:30 PM', '08:00 PM'].map(
                            (s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleSaveReschedule(b.id)}
                        className="px-4 py-2 rounded-xl bg-[#1C1917] text-white text-xs font-semibold"
                      >
                        Confirm Reschedule
                      </button>
                      <button
                        onClick={() => setReschedulingId(null)}
                        className="px-4 py-2 text-xs text-stone-500 hover:text-stone-800"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Actions Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-stone-100">
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedBookingForPass(b)}
                      className="flex-1 sm:flex-none justify-center px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>View Pass</span>
                    </button>

                    <a
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none justify-center px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Directions</span>
                    </a>
                  </div>

                  {b.status !== 'Cancelled' && (
                    <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          setReschedulingId(b.id);
                          setNewDate(b.appointmentDate);
                          setNewSlot(b.timeSlot);
                        }}
                        className="flex-1 sm:flex-none justify-center px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
                      >
                        Reschedule
                      </button>
                      <button
                        onClick={() => handleCancelBooking(b.id)}
                        className="flex-1 sm:flex-none justify-center px-3.5 py-2 rounded-xl bg-white hover:bg-red-50 border border-stone-200 text-red-600 text-xs font-medium transition-colors"
                      >
                        Cancel Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Booking Pass Modal */}
      {selectedBookingForPass && (
        <BookingConfirmationModal
          booking={selectedBookingForPass}
          onClose={() => setSelectedBookingForPass(null)}
        />
      )}
    </div>
  );
};
