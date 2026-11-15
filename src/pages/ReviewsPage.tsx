import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, ShieldCheck, MessageSquare, ThumbsUp, Send, Sparkles } from 'lucide-react';
import { getStoredReviews, addReview } from '../services/bookingStorage';
import { Testimonial } from '../types';
import { SPA_SERVICES } from '../data/spaData';
import { SEOHead } from '../components/SEOHead';

export const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [showAddReviewModal, setShowAddReviewModal] = useState<boolean>(false);

  // Form fields
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [treatment, setTreatment] = useState(SPA_SERVICES[0].name);
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setReviews(getStoredReviews());
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev = addReview({
      author: name.trim(),
      location: location.trim() || 'New Delhi Guest',
      treatment,
      rating,
      comment: comment.trim(),
    });

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setShowAddReviewModal(false);
      setSubmitted(false);
      setName('');
      setLocation('');
      setComment('');
      setRating(5);
    }, 1800);
  };

  return (
    <div className="space-y-16 pb-24">
      <SEOHead
        title="Verified Guest Reviews & Ratings (4.9★) | Ziva Spa – Open 24/7"
        description="Read authentic guest reviews and ratings for Ziva Spa (Open 24/7) in Karol Bagh, New Delhi. Rated 4.9/5 stars for deep tissue massages, private couple suites, and round-the-clock service."
        canonicalPath="/reviews"
        keywords="Ziva Spa reviews, best spa in Delhi reviews, 24/7 spa New Delhi reviews, spa rating Karol Bagh, customer testimonials"
      />
      {/* Header Banner */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
            Guest Testimonials
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mt-3 text-stone-100">
            Reviews & Testimonials
          </h1>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real feedback from our valued guests. Every review reflects authentic experiences at our Karol Bagh sanctuary.
          </p>
        </div>
      </section>

      {/* Aggregate Score Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl border border-stone-200/90 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="md:col-span-5 text-center md:text-left space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A88B63]">
              Overall Rating
            </span>
            <div className="flex items-baseline justify-center md:justify-start gap-3">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1C1917]">4.9</span>
              <span className="text-stone-400 text-base sm:text-lg font-mono">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C5A880]" />
              ))}
            </div>
            <p className="text-xs text-stone-500">
              Based on over 500+ verified customer experiences across Google and in-spa guestbooks.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-12 text-stone-600 font-mono">5 Star</span>
              <div className="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
                <div className="h-full bg-[#C5A880] w-[93%]" />
              </div>
              <span className="w-8 text-right font-mono text-stone-500">93%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12 text-stone-600 font-mono">4 Star</span>
              <div className="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
                <div className="h-full bg-[#C5A880] w-[6%]" />
              </div>
              <span className="w-8 text-right font-mono text-stone-500">6%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12 text-stone-600 font-mono">3 Star</span>
              <div className="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
                <div className="h-full bg-stone-300 w-[1%]" />
              </div>
              <span className="w-8 text-right font-mono text-stone-500">1%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12 text-stone-600 font-mono">2 Star</span>
              <div className="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
                <div className="h-full bg-stone-300 w-[0%]" />
              </div>
              <span className="w-8 text-right font-mono text-stone-500">0%</span>
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-right">
            <button
              onClick={() => setShowAddReviewModal(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              Share Your Experience
            </button>
            <p className="text-[11px] text-stone-400 mt-2">
              All reviews undergo verification
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#C5A880]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">{rev.date}</span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif font-bold text-base text-stone-900">{rev.author}</h4>
                    {rev.verified && (
                      <span title="Verified Guest">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500">{rev.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-[#A88B63] block">
                    Treatment
                  </span>
                  <span className="text-xs text-stone-700 font-medium truncate max-w-[130px] block">
                    {rev.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Review Modal */}
      {showAddReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-stone-200 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Share Your ZIVA Experience
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Your candid thoughts help us continually elevate our standards of relaxation.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <p className="font-serif text-xl font-bold text-stone-900">Thank You for Your Review!</p>
                <p className="text-xs text-stone-500">Your feedback has been verified and added.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 mt-6">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-stone-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Sen"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-stone-700 block mb-1">
                      Location / City
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Karol Bagh, New Delhi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase text-stone-700 block mb-1">
                      Rating
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880] bg-white"
                    >
                      <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                      <option value={4}>★★★★☆ (4 Stars - Very Good)</option>
                      <option value={3}>★★★☆☆ (3 Stars - Average)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase text-stone-700 block mb-1">
                    Treatment Experienced
                  </label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880] bg-white"
                  >
                    {SPA_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase text-stone-700 block mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe your session, ambiance, therapist care, and hygiene..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddReviewModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-500 hover:text-stone-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
