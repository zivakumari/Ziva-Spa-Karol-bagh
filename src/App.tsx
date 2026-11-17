import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';

// Eagerly load HomePage for instantaneous first render on landing
import { HomePage } from './pages/HomePage';

// Lazy-load secondary routes to split bundle and maximize Core Web Vitals
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
const MassageTherapyPage = lazy(() => import('./pages/MassageTherapyPage').then((m) => ({ default: m.MassageTherapyPage })));
const BodySpaPage = lazy(() => import('./pages/BodySpaPage').then((m) => ({ default: m.BodySpaPage })));
const CoupleSpaPage = lazy(() => import('./pages/CoupleSpaPage').then((m) => ({ default: m.CoupleSpaPage })));
const LuxuryPackagesPage = lazy(() => import('./pages/LuxuryPackagesPage').then((m) => ({ default: m.LuxuryPackagesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then((m) => ({ default: m.ReviewsPage })));
const OffersPage = lazy(() => import('./pages/OffersPage').then((m) => ({ default: m.OffersPage })));
const BookingPage = lazy(() => import('./pages/BookingPage').then((m) => ({ default: m.BookingPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then((m) => ({ default: m.FaqPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const ManageBookingsPage = lazy(() => import('./pages/ManageBookingsPage').then((m) => ({ default: m.ManageBookingsPage })));

// Helper component to reset scroll on route transition
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

// Elegant luxury route fallback indicator
const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 space-y-3">
    <div className="w-8 h-8 rounded-full border-2 border-[#C5A880]/30 border-t-[#C5A880] animate-spin" />
    <span className="font-serif text-xs text-stone-500 tracking-widest uppercase">Loading Sanctuary...</span>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] overflow-x-hidden w-full relative">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/massage-therapy" element={<MassageTherapyPage />} />
              <Route path="/body-spa-treatments" element={<BodySpaPage />} />
              <Route path="/couple-spa" element={<CoupleSpaPage />} />
              <Route path="/luxury-packages" element={<LuxuryPackagesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-conditions" element={<TermsPage />} />
              <Route path="/my-bookings" element={<ManageBookingsPage />} />
              {/* Catch-all fallback route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </BrowserRouter>
  );
}
