export interface SpaService {
  id: string;
  name: string;
  category: 'massage' | 'body' | 'couple' | 'package' | 'facial';
  shortDesc: string;
  fullDesc: string;
  durationMinutes: number;
  priceINR: number;
  originalPriceINR?: number;
  image: string;
  rating: number;
  reviewCount: number;
  benefits: string[];
  ritualSteps: string[];
  pressureLevel?: 'Gentle' | 'Medium' | 'Deep' | 'Customizable';
  suitableFor: string;
  featured?: boolean;
}

export interface SpaPackage {
  id: string;
  name: string;
  tagline: string;
  durationMinutes: number;
  priceINR: number;
  originalPriceINR: number;
  image: string;
  includedServices: string[];
  idealFor: string;
  complimentary: string[];
  popular?: boolean;
}

export interface SpecialOffer {
  id: string;
  code: string;
  title: string;
  description: string;
  discountBadge: string;
  validUntil: string;
  minSpend?: number;
  terms: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interiors' | 'massage' | 'couple' | 'treatments' | 'relaxation';
  imageUrl: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'treatments' | 'location' | 'etiquette' | 'pricing';
}

export interface BookingRecord {
  id: string;
  bookingRef: string;
  customerName: string;
  mobileNumber: string;
  email: string;
  serviceId: string;
  serviceName: string;
  appointmentDate: string;
  timeSlot: string;
  numberOfGuests: number;
  totalPriceINR: number;
  additionalMessage?: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled' | 'Rescheduled';
  createdAt: string;
  paymentMethod: 'Pay at Spa' | 'UPI / Online' | 'Gift Voucher';
  appliedPromo?: string;
}
