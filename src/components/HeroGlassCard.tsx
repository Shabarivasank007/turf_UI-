import React, { useState } from 'react';
import {
  MapPin,
  ArrowUpRight,
  Zap,
  Car,
  Bath,
  LayoutGrid,
  ChevronRight,
  Star,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroGlassCardProps {
  onOpenDetails: () => void;
  onBookNow?: () => void;
}

const TIME_SLOTS = [
  { time: '6:00 PM', tag: 'Fast Filling' },
  { time: '7:00 PM', tag: 'Available' },
  { time: '8:00 PM', tag: 'Popular' },
  { time: '9:00 PM', tag: 'Available' },
];

export const HeroGlassCard: React.FC<HeroGlassCardProps> = ({
  onOpenDetails,
  onBookNow,
}) => {
  const [selectedSlot, setSelectedSlot] = useState('7:00 PM');

  const handleBookingClick = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      onOpenDetails();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
      className="absolute right-2 sm:right-5 md:right-8 lg:right-10 bottom-3 sm:bottom-5 md:bottom-7 z-20 pointer-events-auto max-w-[490px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[630px] w-full"
    >
      {/* 
        HIGH TRANSPARENCY UNIQUE ARCHITECTURAL GLASS CARD:
        - Sweeping asymmetric curved corners: rounded-tl-[76px] & rounded-br-[76px]
        - Crisp architectural chamfers: rounded-tr-[28px] & rounded-bl-[28px]
        - High-transparency crystal glassmorphism (bg-white/20 to bg-white/26)
      */}
      <div className="relative overflow-hidden backdrop-blur-2xl bg-white/18 sm:bg-white/22 md:bg-white/26 border border-white/65 shadow-[0_30px_80px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.7)] rounded-tl-[54px] sm:rounded-tl-[66px] md:rounded-tl-[76px] rounded-br-[54px] sm:rounded-br-[66px] md:rounded-br-[76px] rounded-tr-[24px] sm:rounded-tr-[28px] rounded-bl-[24px] sm:rounded-bl-[28px] p-6 sm:p-7 md:p-8 lg:p-9 text-slate-900 transition-all">
        
        {/* Soft Ambient Light Gradient along the top curve */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />

        {/* Top Floating Highlight Bar */}
        <div className="relative flex items-center justify-between gap-2 mb-4 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="tracking-wide uppercase text-[10px] sm:text-[11px] text-lime-300">Live Slots Open</span>
            <span className="text-white/40">•</span>
            <span className="text-white/90">Tonight in Coimbatore</span>
          </div>

          <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-400/25 border border-amber-400/40 text-amber-950 text-xs font-extrabold shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9</span>
            <span className="text-amber-900/60 font-semibold text-[11px]">(184)</span>
          </div>
        </div>

        {/* Header Row: Sculpted Thumbnail + Title + Full Address + Circular Action Arrow */}
        <div className="relative flex items-start gap-4 sm:gap-5 mb-4">
          {/* Unique Matching Asymmetric Thumbnail */}
          <div className="relative w-28 sm:w-36 md:w-44 h-22 sm:h-26 md:h-28 rounded-tl-[34px] sm:rounded-tl-[42px] rounded-br-[28px] sm:rounded-br-[36px] rounded-tr-xl rounded-bl-xl overflow-hidden shrink-0 shadow-md border-2 border-white">
            <img
              src="/src/assets/images/turf_hero_futuristic_arena_1792769013190.jpg"
              alt="Sunset Arena Night Turf"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-[10px] font-semibold text-white flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-lime-400" />
              <span>FIFA 50mm</span>
            </div>
          </div>

          {/* Title & Detailed Turf Address */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-2xl sm:text-[27px] md:text-[31px] font-extrabold text-slate-950 font-['Outfit'] tracking-tight leading-tight">
                Sunset Arena
              </h3>

              {/* Circular Action Button */}
              <button
                onClick={onOpenDetails}
                aria-label="View arena details"
                className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-900 hover:scale-108 active:scale-95 transition-all shrink-0 cursor-pointer border border-white/80 group"
              >
                <ArrowUpRight className="w-5 sm:w-6 h-5 sm:h-6 stroke-[2.4] group-hover:rotate-45 transition-transform" />
              </button>
            </div>
            
            {/* Prominent Turf Address */}
            <div className="flex items-start gap-1.5 text-xs sm:text-[13px] md:text-sm text-slate-800 font-semibold mt-1.5 leading-snug">
              <MapPin className="w-4 h-4 text-[#4d7c0f] shrink-0 mt-0.5" />
              <span className="line-clamp-2">
                14/2 Sunset Sports Hub, Saravanampatti, Coimbatore - 641035
              </span>
            </div>

            {/* Quick feature tagline */}
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1">
              Dual 4K automated replay cameras & pro LED lighting
            </p>
          </div>
        </div>

        {/* Specs / Amenities Row in Frosted Glass Badges with High Transparency */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-4 mb-4 border-b border-white/40">
          <div className="px-2.5 py-2 rounded-xl bg-white/22 hover:bg-white/35 backdrop-blur-md border border-white/50 text-xs font-bold text-slate-900 flex items-center gap-1.5 justify-center shadow-2xs transition-all">
            <LayoutGrid className="w-3.5 h-3.5 text-slate-700" />
            <span>5-a-side</span>
          </div>
          <div className="px-2.5 py-2 rounded-xl bg-white/22 hover:bg-white/35 backdrop-blur-md border border-white/50 text-xs font-bold text-slate-900 flex items-center gap-1.5 justify-center shadow-2xs transition-all">
            <Zap className="w-3.5 h-3.5 text-slate-700" />
            <span>Anti-glare LED</span>
          </div>
          <div className="px-2.5 py-2 rounded-xl bg-white/22 hover:bg-white/35 backdrop-blur-md border border-white/50 text-xs font-bold text-slate-900 flex items-center gap-1.5 justify-center shadow-2xs transition-all">
            <Car className="w-3.5 h-3.5 text-slate-700" />
            <span>Free Parking</span>
          </div>
          <div className="px-2.5 py-2 rounded-xl bg-white/22 hover:bg-white/35 backdrop-blur-md border border-white/50 text-xs font-bold text-slate-900 flex items-center gap-1.5 justify-center shadow-2xs transition-all">
            <Bath className="w-3.5 h-3.5 text-slate-700" />
            <span>AC Dressing</span>
          </div>
        </div>

        {/* Price & Time Slot Selector Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-600 block">
              Match Slot Rate
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
                ₹ 800
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                / hour
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block px-2.5 py-1 rounded-md bg-lime-500/20 text-lime-950 border border-lime-500/40 text-[11px] font-bold">
              Instant QR Pass on Booking
            </span>
          </div>
        </div>

        {/* Interactive Time Slots Selector with Translucent Glass */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {TIME_SLOTS.map(({ time, tag }) => {
            const isSelected = selectedSlot === time;
            return (
              <button
                key={time}
                onClick={() => setSelectedSlot(time)}
                className={`py-2.5 sm:py-3 px-2 rounded-xl sm:rounded-2xl transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-[#d9f99d]/95 text-slate-950 border-2 border-[#84cc16] shadow-md scale-[1.03] ring-2 ring-[#a3e635]/50'
                    : 'bg-white/22 hover:bg-white/45 backdrop-blur-md text-slate-900 border border-white/55 shadow-2xs'
                }`}
              >
                <span className="text-xs sm:text-sm font-extrabold">{time}</span>
                <span
                  className={`text-[9.5px] font-semibold mt-0.5 ${
                    isSelected ? 'text-[#3f6212]' : 'text-slate-600'
                  }`}
                >
                  {tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Big Unique Sculpted Book Now Button */}
        <button
          onClick={handleBookingClick}
          className="w-full py-4 sm:py-4.5 rounded-full bg-[#18392b] hover:bg-[#122b20] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-[#18392b]/35 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer group"
        >
          <span>Book Now ({selectedSlot})</span>
          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </div>
        </button>
      </div>
    </motion.div>
  );
};
