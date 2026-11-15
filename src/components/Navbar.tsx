import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { ZivaLogo } from './ZivaLogo';
import { BUSINESS_INFO } from '../data/spaData';
import { GetDirectionsButton } from './GetDirectionsButton';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent background body scroll when mobile dropdown menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Automatically close menu when screen is resized to desktop width (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Automatically close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
      <div className="bg-[#141211] text-stone-300 border-b border-stone-800 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 md:px-8 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
          {/* Left: Prominent 24/7 Availability & Address */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 flex-wrap">
            {/* Prominent Live 24/7 Status Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-semibold text-[10px] sm:text-[11px] shadow-xs shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide font-sans">
                <strong>Ziva Spa – Open 24/7</strong>
              </span>
            </div>

            <span className="hidden md:flex items-center gap-1.5 text-stone-300 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span className="truncate max-w-[280px] lg:max-w-none">Arya Samaj Road, Opp. Gaffar Market, Karol Bagh</span>
            </span>

            <span className="hidden xl:flex items-center gap-1.5 text-stone-400 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span>24 Hours Daily / Day & Night</span>
            </span>
          </div>

          {/* Right: Quick Directions, 24/7 Phone, WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0 text-[11px]">
            <GetDirectionsButton
              variant="compact"
              label="Get Directions"
              className="bg-stone-900 border border-stone-700 hover:border-[#C5A880] text-[10px] sm:text-[11px] py-1 px-2.5"
              wrapperClassName="hidden sm:inline-flex"
            />

            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#C5A880] transition-colors"
              title="24/7 Spa Concierge Desk"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A880] shrink-0" />
              <span className="font-mono text-[10px] sm:text-[11px]">{BUSINESS_INFO.phonePrimary}</span>
            </a>

            <span className="text-stone-700 hidden sm:inline">|</span>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Chat on WhatsApp 24/7"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
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

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5] border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          {/* Zone 1: Single Official Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <Link to="/" className="shrink-0 flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <ZivaLogo
                variant="dark"
                size="md"
                show247Badge={true}
                showSubtitle={true}
                subtitleClassName="hidden xl:inline-block"
              />
            </Link>

            {/* Prominent Header 24/7 Status Badge on 2XL wide screens */}
            <div className="hidden 2xl:flex items-center gap-2 pl-3 border-l border-stone-200 py-1">
              <span className="px-2.5 py-1 rounded-full bg-[#1C1917] text-white text-[11px] font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open 24/7</span>
              </span>
              <span className="text-[11px] text-stone-500 font-sans">
                Day & Night Retreat
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links (Visible on Laptop and Desktop: >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-5 2xl:gap-7 text-xs xl:text-sm font-medium text-[#1C1917]/80 shrink min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1.5 border-b-2 ${
                  isActive(link.path)
                    ? 'border-[#C5A880] text-[#1C1917] font-semibold'
                    : 'border-transparent hover:text-[#1C1917] hover:border-stone-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Booking CTA & Mobile Toggle Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Book Appointment CTA */}
            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-white bg-[#1C1917] hover:bg-stone-800 active:scale-[0.98] rounded-xl transition-all shadow-sm whitespace-nowrap shrink-0 tracking-wider uppercase"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="hidden sm:inline">Book Ritual</span>
              <span className="sm:hidden">Book</span>
            </Link>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-xl hover:bg-stone-200/80 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Dropdown Navigation Menu - Flows directly below the header bar */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 sm:px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* 24/7 Status & Quick Directions Banner */}
              <div className="p-4 rounded-2xl bg-[#1C1917] text-white space-y-2 border border-stone-800 shadow-md">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ziva Spa – Open 24/7</span>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">Karol Bagh, New Delhi</span>
                </div>
                <p className="text-xs text-stone-300 leading-snug">
                  Round-the-clock luxury therapies, couple suites & relaxation treatments. Walk-ins and reservations welcome 24 hours.
                </p>
                <div className="pt-1.5 flex items-center gap-2">
                  <GetDirectionsButton
                    variant="luxury-gold"
                    label="Navigate with Google Maps"
                    className="w-full text-xs py-2.5 justify-center"
                    wrapperClassName="w-full"
                  />
                </div>
              </div>

              {/* Main Navigation Links */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A88B63] px-3 pb-1">
                  Main Navigation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors min-h-[44px] flex items-center justify-between ${
                        isActive(link.path)
                          ? 'bg-[#C5A880]/20 text-[#1C1917] font-semibold border-l-4 border-[#C5A880]'
                          : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-stone-400 text-xs">→</span>
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-stone-200 my-2" />

                <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 px-3 pb-1">
                  More Pages & Treatments
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-2 text-xs text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors min-h-[38px] flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-stone-300 text-xs">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Actions Strip */}
              <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Book a Ritual Online</span>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-900 transition-colors min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="truncate">Call: {BUSINESS_INFO.phonePrimary}</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 transition-colors min-h-[44px]"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">WhatsApp 24/7</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop overlay covering page content when dropdown menu is active */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
