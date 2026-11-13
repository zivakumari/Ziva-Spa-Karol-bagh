import { BookingRecord, Testimonial } from '../types';
import { TESTIMONIALS } from '../data/spaData';

const STORAGE_KEY = 'ziva_spa_bookings_v1';
const REVIEWS_STORAGE_KEY = 'ziva_spa_reviews_v1';

const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'zv-bk-101',
    bookingRef: 'ZV-84920',
    customerName: 'Sunil Malhotra',
    mobileNumber: '+91 98112 34567',
    email: 'sunil.malhotra@gmail.com',
    serviceId: 'deep-tissue-therapy',
    serviceName: 'Deep Tissue Muscle Recovery (75 Min)',
    appointmentDate: '2026-11-12',
    timeSlot: '11:30 AM',
    numberOfGuests: 1,
    totalPriceINR: 3499,
    additionalMessage: 'Focus specifically on right shoulder stiffness and upper back.',
    status: 'Confirmed',
    createdAt: '2026-11-09T14:20:00Z',
    paymentMethod: 'Pay at Spa',
    appliedPromo: 'ZIVA20',
  },
  {
    id: 'zv-bk-102',
    bookingRef: 'ZV-62381',
    customerName: 'Priyanka Sharma',
    mobileNumber: '+91 98710 88990',
    email: 'priyanka.s@outlook.com',
    serviceId: 'couple-harmony-retreat',
    serviceName: 'Couple Harmony Sanctuary Retreat (120 Min)',
    appointmentDate: '2026-11-14',
    timeSlot: '04:00 PM',
    numberOfGuests: 2,
    totalPriceINR: 6999,
    additionalMessage: 'Celebrating 3rd anniversary. Please arrange rose petals and chamomile tea.',
    status: 'Confirmed',
    createdAt: '2026-11-08T09:15:00Z',
    paymentMethod: 'UPI / Online',
    appliedPromo: 'COUPLE1500',
  },
  {
    id: 'zv-bk-103',
    bookingRef: 'ZV-41982',
    customerName: 'Aman Singhal',
    mobileNumber: '+91 99105 12345',
    email: 'aman.singhal@yahoo.com',
    serviceId: 'swedish-relaxation',
    serviceName: 'Swedish Deep Relaxation Massage (60 Min)',
    appointmentDate: '2026-11-07',
    timeSlot: '02:00 PM',
    numberOfGuests: 1,
    totalPriceINR: 2799,
    additionalMessage: 'First visit, gentle pressure preferred.',
    status: 'Completed',
    createdAt: '2026-11-06T18:40:00Z',
    paymentMethod: 'Pay at Spa',
  },
];

export const getStoredBookings = (): BookingRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKINGS));
      return INITIAL_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read bookings from storage:', err);
    return INITIAL_BOOKINGS;
  }
};

export const saveBooking = (booking: Omit<BookingRecord, 'id' | 'bookingRef' | 'status' | 'createdAt'>): BookingRecord => {
  const current = getStoredBookings();
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  const newBooking: BookingRecord = {
    ...booking,
    id: `zv-bk-${Date.now()}`,
    bookingRef: `ZV-${randomSuffix}`,
    status: 'Confirmed',
    createdAt: new Date().toISOString(),
  };

  const updated = [newBooking, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save booking to storage:', err);
  }

  return newBooking;
};

export const updateBookingStatus = (id: string, status: BookingRecord['status']): boolean => {
  const current = getStoredBookings();
  const index = current.findIndex((b) => b.id === id);
  if (index === -1) return false;

  current[index].status = status;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    return true;
  } catch (err) {
    console.error('Failed to update booking status:', err);
    return false;
  }
};

export const rescheduleBooking = (id: string, newDate: string, newSlot: string): boolean => {
  const current = getStoredBookings();
  const index = current.findIndex((b) => b.id === id);
  if (index === -1) return false;

  current[index].appointmentDate = newDate;
  current[index].timeSlot = newSlot;
  current[index].status = 'Rescheduled';
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    return true;
  } catch (err) {
    console.error('Failed to reschedule booking:', err);
    return false;
  }
};

export const findBookingByQuery = (query: string): BookingRecord[] => {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];
  const bookings = getStoredBookings();
  return bookings.filter(
    (b) =>
      b.bookingRef.toLowerCase().includes(clean) ||
      b.mobileNumber.toLowerCase().includes(clean) ||
      b.customerName.toLowerCase().includes(clean) ||
      b.email.toLowerCase().includes(clean)
  );
};

// Reviews management with persistence
export const getStoredReviews = (): Testimonial[] => {
  try {
    const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(TESTIMONIALS));
      return TESTIMONIALS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read reviews from storage:', err);
    return TESTIMONIALS;
  }
};

export const addReview = (review: Omit<Testimonial, 'id' | 'date' | 'verified'>): Testimonial => {
  const current = getStoredReviews();
  const newReview: Testimonial = {
    ...review,
    id: `rev-${Date.now()}`,
    date: 'Just Now',
    verified: true,
  };

  const updated = [newReview, ...current];
  try {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save review to storage:', err);
  }

  return newReview;
};
