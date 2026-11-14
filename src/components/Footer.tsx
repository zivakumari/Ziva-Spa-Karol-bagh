import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Navigation } from 'lucide-react';
import { ZivaLogo } from './ZivaLogo';
import { BUSINESS_INFO } from '../data/spaData';
import { GetDirectionsButton } from './GetDirectionsButton';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#141211] text-stone-300 border-t border-stone-800">
      {/* Upper Trust Strip */}
      <div className="border-b border-stone-800/80 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <p className="font-semibold text-stone-100 uppercase tracking-wider">Sanitization Gold Standard</p>
              <p className="text-stone-400 mt-0.5">Medical-grade disinfection & fresh single-use linens</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <p className="font-semibold text-stone-100 uppercase tracking-wider">Certified Master Therapists</p>
              <p className="text-stone-400 mt-0.5">Extensively trained in anatomy, Balinese & Ayurveda</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <p className="font-semibold text-stone-100 uppercase tracking-wider">100% Organic Botanicals</p>
              <p className="text-stone-400 mt-0.5">Pure essential oils & herbs from Kerala & Himalayas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Ziva Spa – Open 24/7
              </p>
              <p className="text-stone-400 mt-0.5">Day & night sanctuary · Walk-ins & bookings 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="inline-block">
              <ZivaLogo variant="light" size="lg" show247Badge={true} />
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              ZIVA SPA is New Delhi's premier sanctuary for holistic wellness, therapeutic massage, and private couple retreats. Open 24/7 to restore balance to urban lives through timeless rituals, pure organic oils, and exceptional hospitality.
            </p>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-semibold">{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phonePrimary} (24/7 Helpline)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-800 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/80 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp 24/7 ({BUSINESS_INFO.whatsappDisplay})</span>
              </a>

              <GetDirectionsButton
                variant="luxury-gold"
                label="Get Directions"
                className="text-xs py-2 px-4"
              />
            </div>
          </div>

          {/* Column 2: Spa Therapies */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-semibold text-stone-100 tracking-wider uppercase text-xs">
              Spa Treatments
            </h4>
            <div className="flex flex-col gap-2 text-xs text-stone-400">
              <Link to="/massage-therapy" className="hover:text-[#C5A880] transition-colors">
                Massage Therapy
              </Link>
              <Link to="/body-spa-treatments" className="hover:text-[#C5A880] transition-colors">
                Body Spa & Scrubs
              </Link>
              <Link to="/couple-spa" className="hover:text-[#C5A880] transition-colors">
                Couple Spa Suites
              </Link>
              <Link to="/luxury-packages" className="hover:text-[#C5A880] transition-colors">
                Full Day Rebirth Packages
              </Link>
              <Link to="/services/hot-stone-therapy" className="hover:text-[#C5A880] transition-colors">
                Basalt Hot Stone Therapy
              </Link>
              <Link to="/services/potli-abhyanga" className="hover:text-[#C5A880] transition-colors">
                Ayurvedic Potli Ritual
              </Link>
              <Link to="/services/gold-radiance-facial" className="hover:text-[#C5A880] transition-colors">
                24K Pure Gold Facial
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-semibold text-stone-100 tracking-wider uppercase text-xs">
              Sanctuary
            </h4>
            <div className="flex flex-col gap-2 text-xs text-stone-400">
              <Link to="/about" className="hover:text-[#C5A880] transition-colors">
                About Us & Philosophy
              </Link>
              <Link to="/services" className="hover:text-[#C5A880] transition-colors">
                Our Services Menu
              </Link>
              <Link to="/gallery" className="hover:text-[#C5A880] transition-colors">
                Visual Gallery
              </Link>
              <Link to="/reviews" className="hover:text-[#C5A880] transition-colors">
                Guest Reviews & Ratings
              </Link>
              <Link to="/offers" className="hover:text-[#C5A880] transition-colors">
                Special Offers & Codes
              </Link>
              <Link to="/booking" className="hover:text-[#C5A880] transition-colors font-medium text-stone-300">
                Book an Appointment
              </Link>
              <Link to="/my-bookings" className="hover:text-[#C5A880] transition-colors">
                Manage My Bookings
              </Link>
              <Link to="/faq" className="hover:text-[#C5A880] transition-colors">
                Frequently Asked Questions
              </Link>
              <Link to="/contact" className="hover:text-[#C5A880] transition-colors">
                Contact & Location Map
              </Link>
            </div>
          </div>

          {/* Column 4: Private Privilege & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-base font-semibold text-stone-100 tracking-wider uppercase text-xs">
              Private Privilege
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Join the ZIVA Sanctuary Circle to receive seasonal wellness invitations, secret weekday offers, and festive rejuvenation privileges.
            </p>

            {subscribed ? (
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-xs text-[#C5A880]">
                Thank you for joining. Welcome to ZIVA Sanctuary Circle.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#C5A880] text-[#1C1917] text-xs font-semibold hover:bg-[#DFCA9B] transition-colors"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-2 pt-3 border-t border-stone-800/80 text-[11px] text-stone-500">
              Category: Spa & Wellness Retreat · New Delhi, India
            </div>
          </div>
        </div>

        {/* Lower Legal & Copyright Strip */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} ZIVA SPA. All rights reserved. Registered Spa & Wellness Center.
          </div>

          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-stone-700">·</span>
            <Link to="/terms-conditions" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-stone-700">·</span>
            <Link to="/faq" className="hover:text-stone-300 transition-colors">
              Help & FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
