import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { MassageTherapyPage } from './pages/MassageTherapyPage';
import { BodySpaPage } from './pages/BodySpaPage';
import { CoupleSpaPage } from './pages/CoupleSpaPage';
import { LuxuryPackagesPage } from './pages/LuxuryPackagesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { OffersPage } from './pages/OffersPage';
import { BookingPage } from './pages/BookingPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ManageBookingsPage } from './pages/ManageBookingsPage';
import { FloatingContactButtons } from './components/FloatingContactButtons';

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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917]">
        <Navbar />
        <main className="flex-1">
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
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </BrowserRouter>
  );
}
