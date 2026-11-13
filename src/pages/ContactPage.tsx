import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { SpaMap } from '../components/SpaMap';
import { SEOHead } from '../components/SEOHead';
import { GetDirectionsButton } from '../components/GetDirectionsButton';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Wellness Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Wellness Inquiry',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="space-y-20 pb-24">
      <SEOHead
        title="Contact Ziva Spa – Open 24/7 | Address, Google Maps Directions & Helpline"
        description="Visit Ziva Spa (Open 24/7) at 2nd Floor, 10189/92, Arya Samaj Road, Opposite Gaffar Market, Block 14, WEA, Karol Bagh, New Delhi, Delhi – 110005. 24-hour phone concierge, WhatsApp chat, and GPS Google Maps directions."
        canonicalPath="/contact"
        keywords="contact Ziva Spa, 24/7 spa New Delhi contact, spa address Karol Bagh New Delhi, spa near Gaffar Market phone number, directions to Ziva Spa"
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Ziva Spa – Open 24/7</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-100">
            Contact & Location Sanctuary
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Conveniently situated on Arya Samaj Road opposite Gaffar Market, Karol Bagh, New Delhi. Open round the clock for walk-ins, phone reservations, and GPS directions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#A88B63]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1917]">Sanctuary Address</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {BUSINESS_INFO.street}, {BUSINESS_INFO.locality}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} – {BUSINESS_INFO.pincode}
            </p>
            <p className="text-[11px] text-stone-400">Opposite Gaffar Market · Block 14, WEA</p>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#A88B63]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1917]">24/7 Phone Concierge</h3>
            <div className="text-xs text-stone-600 space-y-1">
              <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="block hover:text-[#A88B63] transition-colors">
                Primary: {BUSINESS_INFO.phonePrimary}
              </a>
              <a href={`tel:${BUSINESS_INFO.phoneSecondary}`} className="block hover:text-[#A88B63] transition-colors">
                Desk: {BUSINESS_INFO.phoneSecondary}
              </a>
            </div>
            <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Available 24 Hours / 7 Days
            </p>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1917]">WhatsApp Concierge</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Message us for instantaneous appointment verification, direction assistance, or gift vouchers.
            </p>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20ZIVA%20SPA`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline"
            >
              <span>Chat on WhatsApp (24/7) →</span>
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1917]">Operating Hours</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Monday through Sunday<br />
              <strong className="text-emerald-700 text-sm">Open 24/7 (24 Hours Daily)</strong>
            </p>
            <p className="text-[11px] text-stone-400">Day & Night Sessions Available</p>
          </div>
        </div>
      </section>

      {/* Dynamic Google Maps Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A88B63]">
              Dynamic Location & Directions
            </span>
            <h2 className="text-3xl font-serif text-[#1C1917] mt-1">
              Find ZIVA SPA on Google Maps
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Exact Location: {BUSINESS_INFO.address}
            </p>
          </div>

          <GetDirectionsButton
            variant="luxury-gold"
            label="Get Directions from My Location"
            className="text-xs sm:text-sm px-6 py-3"
          />
        </div>

        <SpaMap showDirectionsPanel={true} heightClass="h-[460px] md:h-[540px]" />
      </section>

      {/* Interactive Contact Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xs space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A88B63]">
              Write to Our Concierge
            </span>
            <h2 className="text-3xl font-serif text-[#1C1917]">
              Send an Inquiry or Message
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              Have questions regarding bespoke group bookings, corporate partnerships, or bridal packages? We respond promptly.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3 bg-[#FAF8F5] rounded-2xl border border-stone-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-stone-900">Message Received</h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Thank you for reaching out to ZIVA SPA. Our concierge team will connect with you via mobile or email shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-5 py-2 rounded-xl bg-[#1C1917] text-white text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohini Bakshi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rohini@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98112 34567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880] bg-white"
                  >
                    <option value="General Wellness Inquiry">General Wellness Inquiry</option>
                    <option value="Couple Sanctuary Package">Couple Sanctuary Package</option>
                    <option value="Corporate Wellness Privilege">Corporate Wellness Privilege</option>
                    <option value="Gift Voucher Order">Gift Voucher Order</option>
                    <option value="Feedback / Experience">Feedback / Experience</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can our sanctuary team assist you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="pt-2 text-right">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm disabled:opacity-50"
                >
                  {loading ? 'Transmitting...' : 'Send Message to Concierge'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
