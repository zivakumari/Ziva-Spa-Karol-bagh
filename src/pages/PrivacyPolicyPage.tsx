import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-24">
      <SEOHead
        title="Privacy Policy | Ziva Spa Karol Bagh, New Delhi"
        description="Privacy guidelines and guest confidentiality standards for Ziva Spa in Karol Bagh, New Delhi."
        canonicalPath="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Privacy Policy', item: '/privacy-policy' },
        ]}
      />
      <section className="py-12 sm:py-16 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Legal & Confidentiality
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif mt-2 text-stone-100">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-stone-400">
            Effective Date: March 2026 · ZIVA SPA, Karol Bagh, New Delhi
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 border border-stone-200/90 shadow-xs space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">1. Commitment to Guest Confidentiality</h2>
            <p>
              At <strong>ZIVA SPA</strong> ("we", "our", or "the Sanctuary"), safeguarding your personal and sensitive health information is paramount. This Privacy Policy outlines how we collect, utilize, and protect your data when you visit our website (zivaspa.online), book an appointment, or utilize therapies at our physical sanctuary located at {BUSINESS_INFO.address}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li><strong>Contact Particulars:</strong> Customer full name, mobile number, email address, and billing particulars.</li>
              <li><strong>Appointment Data:</strong> Chosen therapies, preferred appointment dates and time slots, guest counts, and booking reference numbers.</li>
              <li><strong>Confidential Health Disclosures:</strong> Voluntary health notes provided during consultation (e.g. skin allergies, pregnancy status, blood pressure cautions, muscular pressure preferences).</li>
              <li><strong>Location & Digital Telemetry:</strong> Approximate geolocation data when you explicitly interact with our distance calculator and interactive route finder.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">3. How Your Information is Utilized</h2>
            <p>Your details are strictly utilized to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>Facilitate, verify, reschedule, or cancel your spa appointment bookings.</li>
              <li>Transmit automated appointment confirmation SMS and WhatsApp booking passes.</li>
              <li>Safely customize massage pressure and aromatherapy essential oils to your physical well-being.</li>
              <li>Send seasonal privileges and sanctuary updates if you subscribe to our private circle (opt-out available anytime).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">4. Absolute Non-Disclosure & Third Parties</h2>
            <p>
              ZIVA SPA will never sell, lease, or monetize your contact information or health disclosures to external advertisers or brokers. Your data is only accessible to authorized concierge staff and treating therapists strictly for service fulfillment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">5. Data Security Standards</h2>
            <p>
              All online bookings and electronic guest records are encrypted via standard SSL/TLS protocols. Physical consultation cards are securely archived and handled with utmost medical-grade confidentiality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">6. Contact Our Data Concierge</h2>
            <p>
              For any questions regarding your stored records or to request deletion of your appointment history, contact us at:
            </p>
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1">
              <p><strong>Privacy Officer:</strong> ZIVA SPA Sanctuary Governance</p>
              <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
              <p><strong>Postal Address:</strong> {BUSINESS_INFO.address}</p>
            </div>
          </section>

          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A88B63] hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Sanctuary Home</span>
            </Link>
            <Link to="/terms-conditions" className="text-xs font-semibold text-stone-600 hover:text-stone-900">
              View Terms & Conditions →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
