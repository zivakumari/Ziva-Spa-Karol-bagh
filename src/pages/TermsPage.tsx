import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, ShieldAlert, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-24">
      <SEOHead
        title="Terms & Conditions – Arrival Etiquette & Policies"
        description="Official sanctuary terms, cancellation policies, and etiquette guidelines for ZIVA SPA Karol Bagh, New Delhi."
        canonicalPath="/terms-conditions"
      />
      <section className="py-16 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Sanctuary Governance
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif mt-2 text-stone-100">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-stone-400">
            Standard Policies · ZIVA SPA, Karol Bagh, New Delhi
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xs space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">1. Arrival & Etiquette Protocol</h2>
            <p>
              To fully appreciate the tranquility of your wellness journey, we request that you arrive at our sanctuary <strong>15 minutes prior</strong> to your scheduled appointment. This ensures adequate time for your confidential consultation, changing into plush spa attire, and enjoying our welcome aromatic foot ritual.
            </p>
            <p className="text-stone-500 text-xs">
              Late arrivals may result in a shortened therapy duration to respect subsequently scheduled guests. The full tariff remains applicable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">2. Cancellation & Rescheduling Policy</h2>
            <p>
              We recognize that unforeseen schedule adjustments occur. You may reschedule or cancel your reservation free of charge up to <strong>2 hours prior</strong> to your scheduled start time by phone, WhatsApp, or through the "Manage Booking" portal. Cancellations with less than 2 hours notice or unannounced no-shows may forfeit any deposit or gift voucher redemption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">3. Health & Medical Disclosures</h2>
            <p>
              Your physical safety is our paramount concern. Prior to therapy commencement, guests must disclose any pre-existing medical conditions, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Pregnancy or post-partum conditions</li>
              <li>Cardiovascular ailments, pacemakers, or uncontrolled hypertension</li>
              <li>Recent surgeries, fractures, deep vein thrombosis, or open dermal lesions</li>
              <li>Allergies to specific essential oils, nuts, or iodine/marine kelp</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">4. Sanctuary Decorum & Professionalism</h2>
            <p>
              ZIVA SPA is a strictly professional wellness establishment. Our certified therapists adhere to the highest international spa draping and ethical codes. Any inappropriate behavior, verbal harassment, or non-therapeutic demands will result in instantaneous session termination without refund and legal reporting.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">5. Pricing, Taxes & Payment Methods</h2>
            <p>
              All prices displayed on our website and menu are quoted in Indian National Rupees (INR). Payments can be remitted via major Credit/Debit Cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, ZIVA Gift Vouchers, or Cash at the front desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">6. Gift Vouchers</h2>
            <p>
              ZIVA SPA Gift Vouchers are valid for 12 months from the date of issuance and can be redeemed for any therapy or package. Vouchers cannot be exchanged for cash currency.
            </p>
          </section>

          <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A88B63] hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Sanctuary Home</span>
            </Link>
            <Link to="/booking" className="text-xs font-semibold text-stone-600 hover:text-stone-900">
              Reserve an Appointment →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
