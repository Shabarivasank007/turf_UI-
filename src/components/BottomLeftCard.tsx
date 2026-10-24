import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Star, CheckCircle2, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BottomLeftCardProps {
  onExploreProperties?: () => void;
}

interface TurfReview {
  id: string;
  name: string;
  role: string;
  turfName: string;
  matchType: string;
  rating: number;
  quote: string;
  avatar: string;
}

const TURF_REVIEWS: TurfReview[] = [
  {
    id: 'rev-1',
    name: 'David Alvarez',
    role: 'Captain, Phoenix Wolves',
    turfName: 'Sunset Floodlit Turf',
    matchType: '7v7 Night League',
    rating: 5,
    quote:
      'Hands down the best artificial grass in the state. The cool-infill means zero rubber smell or ankle burn after 90 mins. The 4K automated match replay sent to our squad WhatsApp was ready in 10 minutes!',
    avatar: '/src/assets/images/player_avatar_david.jpg',
  },
  {
    id: 'rev-2',
    name: 'Sarah Chen',
    role: 'Organizer, Austin Box Cricket',
    turfName: 'CyberPitch Canopy Dome',
    matchType: 'Weekend Tournament Cup',
    rating: 5,
    quote:
      'Booking was ridiculously fast. The team bill-splitting saved me hours collecting cash from 12 players. The floodlights are bright and completely anti-glare for high-ball catches.',
    avatar: '/src/assets/images/user_avatar_female_1792769046688.jpg',
  },
  {
    id: 'rev-3',
    name: 'Tariq Mansoor',
    role: 'Striker & League MVP',
    turfName: 'Lunar Oasis Arena',
    matchType: 'FIFA Pro 8v8 Match',
    rating: 5,
    quote:
      'FIFA-grade 50mm synthetic grass with natural ball roll. Turnstile QR gate pass meant our squad walked straight onto the pitch at 8:00 PM without waiting for staff. Elite playing experience!',
    avatar: '/src/assets/images/player_avatar_tariq.jpg',
  },
];

export const BottomLeftCard: React.FC<BottomLeftCardProps> = ({
  onExploreProperties,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5.5 seconds, pause when user hovers
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TURF_REVIEWS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % TURF_REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + TURF_REVIEWS.length) % TURF_REVIEWS.length);
  };

  const currentReview = TURF_REVIEWS[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-3 sm:left-6 md:left-8 lg:left-10 z-20 pointer-events-auto max-w-[420px] sm:max-w-[480px] md:max-w-[530px] w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative bg-white px-7 sm:px-9 pt-7 sm:pt-8 pb-6 sm:pb-7 rounded-[32px] sm:rounded-[40px] shadow-[0_24px_60px_rgba(0,0,0,0.22)] border border-slate-100 transition-all">
        {/* Top Header Row: Title Find The Perfect Place + Slide Dot Indicators */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="text-2xl sm:text-[26px] md:text-[28px] font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Find The Perfect Place
          </h3>

          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 px-2.5 py-1.5 rounded-full">
            {TURF_REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 bg-[#18392b]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Review Card with Smooth Framer Motion Transition */}
        <div className="min-h-[125px] sm:min-h-[120px] flex flex-col justify-between mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -14 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="space-y-2"
            >
              {/* Reviewer Meta Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm sm:text-[15px] font-bold text-slate-950 leading-tight">
                    {currentReview.name}
                  </span>
                  <span className="text-xs sm:text-[13px] text-slate-500 font-medium">
                    · {currentReview.turfName}
                  </span>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Review Quote */}
              <p className="text-[13px] sm:text-[14.5px] leading-relaxed text-slate-600 font-normal line-clamp-3">
                "{currentReview.quote}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Counter & Action Row matching reference image: 50+ Premium Turfs */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          {/* 50+ Premium Turfs */}
          <div>
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-950 tabular-nums leading-none">
              50+
            </div>
            <div className="text-xs sm:text-[13px] font-semibold text-slate-400 mt-1">
              Premium Turfs
            </div>
          </div>

          {/* 3 Circular Avatars (Clickable to switch slides) + Next Review Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Stacked circular avatars of the 3 players */}
            <div className="flex items-center -space-x-2.5">
              {TURF_REVIEWS.map((rev, idx) => (
                <button
                  key={rev.id}
                  onClick={() => setCurrentIndex(idx)}
                  title={`View ${rev.name}'s review`}
                  className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 transition-transform duration-200 cursor-pointer overflow-hidden shadow-xs hover:scale-110 hover:z-30 shrink-0 ${
                    currentIndex === idx
                      ? 'ring-[#84cc16] z-20 scale-105'
                      : 'ring-white z-10'
                  }`}
                >
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Circular button to advance review slide matching reference styling */}
            <button
              onClick={handleNext}
              aria-label="Next player review"
              title="Next review slide"
              className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#edf0f5] hover:bg-[#e2e7f0] text-slate-800 flex items-center justify-center shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ml-1 group"
            >
              <ArrowUpRight className="w-5 h-5 stroke-[2.4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
