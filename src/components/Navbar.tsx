import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, MessageSquare, MapPin, Clock, Compass } from 'lucide-react';
import { ZivaLogo } from './ZivaLogo';
import { BUSINESS_INFO } from '../data/spaData';
import { GetDirectionsButton } from './GetDirectionsButton';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Packages', path: '/luxury-packages' },
    { label: 'Couple Spa', path: '/couple-spa' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Offers', path: '/offers' },
    { label: 'Contact & Map', path: '/contact' },
  ];

  const secondaryLinks = [
    { label: 'Massage Therapy', path: '/massage-therapy' },
    { label: 'Body Spa Treatments', path: '/body-spa-treatments' },
    { label: 'About Us', path: '/about' },
    { label: 'FAQs', path: '/faq' },
    { label: 'My Bookings', path: '/my-bookings' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Essential Bar with Prominent 24/7 Status & Quick Directions */}
      <div className="bg-[#141211] text-stone-300 border-b border-stone-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Prominent 24/7 Availability & Address */}
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* Prominent Live 24/7 Status Pill */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold text-[11px] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide font-sans">
                <strong>Ziva Spa – Open 24/7</strong>
              </span>
            </div>

            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Arya Samaj Road, Opp. Gaffar Market, Karol Bagh</span>
            </span>

            <span className="hidden lg:flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>24 Hours Daily / Night & Day Sanctuary</span>
            </span>
          </div>

          {/* Right: Quick Directions, 24/7 Phone, WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <GetDirectionsButton
              variant="compact"
              label="Get Directions"
              className="hidden sm:inline-flex bg-stone-900 border border-stone-700 hover:border-[#C5A880] text-[11px] py-1 px-2.5"
            />

            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#C5A880] transition-colors"
              title="24/7 Spa Concierge Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="hidden sm:inline font-mono text-[11px]">{BUSINESS_INFO.phonePrimary}</span>
              <span className="sm:hidden text-[11px] font-mono">{BUSINESS_INFO.phonePrimary}</span>
            </a>

            <span className="text-stone-700 hidden sm:inline">|</span>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Chat on WhatsApp 24/7"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <span className="text-stone-700 hidden lg:inline">|</span>

            <Link
              to="/my-bookings"
              className="hidden lg:inline text-stone-300 hover:text-white transition-colors underline-offset-4 hover:underline text-[11px]"
            >
              My Bookings
            </Link>
          </div>
        </div>
      </div>

      {/* Main Luxury Header adhering to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark & Prominent 24/7 Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="shrink-0 flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <ZivaLogo variant="dark" size="sm" className="sm:hidden" show247Badge={true} />
              <ZivaLogo variant="dark" size="md" className="hidden sm:inline-flex" show247Badge={true} />
            </Link>

            {/* Prominent Header 24/7 Status Badge */}
            <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-stone-200 py-1">
              <span className="px-2.5 py-1 rounded-full bg-[#1C1917] text-white text-[11px] font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open 24/7</span>
              </span>
              <span className="text-[11px] text-stone-500 font-sans">
                Day & Night Retreat
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#1C1917]/80">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
                  isActive(link.path)
                    ? 'border-[#C5A880] text-[#1C1917] font-semibold'
                    : 'border-transparent hover:text-[#1C1917] hover:border-stone-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Directions Button, Booking CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Prominent Header Get Directions CTA */}
            <GetDirectionsButton
              variant="secondary"
              label="Get Directions"
              className="hidden md:inline-flex text-xs px-3.5 py-2"
            />

            {/* Book Appointment CTA */}
            <Link
              to="/booking"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold text-white bg-[#1C1917] hover:bg-stone-800 active:scale-[0.98] rounded-xl transition-all shadow-sm whitespace-nowrap shrink-0 tracking-wider uppercase"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="hidden sm:inline">Book Ritual</span>
              <span className="sm:hidden">Book</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Navigation Drawer with Smooth Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-start">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <div className="relative z-10 bg-[#FAF8F5] border-b border-stone-200 px-5 sm:px-8 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-300 max-h-[90vh] overflow-y-auto">
            {/* Header row in mobile menu */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
              <ZivaLogo variant="dark" size="sm" show247Badge={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prominent Mobile 24/7 Banner */}
            <div className="p-4 rounded-2xl bg-[#1C1917] text-white mb-5 space-y-2 border border-stone-800 shadow-md">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Ziva Spa – Open 24/7</span>
                </div>
                <span className="text-[10px] text-stone-400 font-mono">Karol Bagh, New Delhi</span>
              </div>
              <p className="text-xs text-stone-300 leading-snug">
                Round-the-clock luxury therapies, couple suites & relaxation treatments. Walk-ins and reservations welcome 24 hours.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <GetDirectionsButton
                  variant="luxury-gold"
                  label="Navigate with Google Maps"
                  className="w-full text-xs py-2.5 justify-center"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A88B63] px-3">
                Main Menu
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive(link.path)
                      ? 'bg-[#C5A880]/20 text-[#1C1917] font-semibold'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-px bg-stone-200 my-2" />

              <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 px-3">
                More Pages & Treatments
              </span>
              {secondaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs text-stone-600 hover:text-stone-900 transition-colors min-h-[38px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-900 transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call 24/7 Helpline: {BUSINESS_INFO.phonePrimary}</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp 24/7 ({BUSINESS_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
};
