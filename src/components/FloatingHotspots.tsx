import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Layers,
  Coffee,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingHotspotsProps {
  onOpenBooking: () => void;
  onScrollToExplorer: () => void;
}

export const FloatingHotspots: React.FC<FloatingHotspotsProps> = ({
  onOpenBooking,
  onScrollToExplorer,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'turf',
      label: 'FIFA Pro Hybrid Turf',
      sub: '50mm dual-core monofilament with 65% shock absorption',
      position: 'top-[52%] left-[46%]',
      icon: <Layers className="w-3.5 h-3.5 text-slate-900" />,
    },
    {
      id: 'lights',
      label: '1,200 Lux Floodlights',
      sub: 'Philips ArenaVision anti-glare broadcast illumination',
      position: 'top-[30%] right-[32%]',
      icon: <Zap className="w-3.5 h-3.5 text-slate-900" />,
    },
    {
      id: 'lounge',
      label: 'Players Recovery Lounge',
      sub: 'AC locker suites, ice plunge baths & hydration bar',
      position: 'top-[44%] right-[18%]',
      icon: <Coffee className="w-3.5 h-3.5 text-slate-900" />,
    },
  ];

  return (
    <>
      {/* Floating Interactive Pitch Hotspots */}
      {hotspots.map((spot, idx) => (
        <div
          key={spot.id}
          className={`absolute ${spot.position} z-20 hidden md:block pointer-events-auto`}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3.5 + idx * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            {/* Hotspot Beacon Button */}
            <button
              onClick={() =>
                setActiveHotspot(activeHotspot === spot.id ? null : spot.id)
              }
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
              className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-xl backdrop-blur-md border border-white transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label={spot.label}
            >
              {/* Outer pulsing ring */}
              <span className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping pointer-events-none" />
              <span className="flex items-center justify-center">{spot.icon}</span>
            </button>

            {/* Hover Tooltip / Detail Card */}
            <AnimatePresence>
              {activeHotspot === spot.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-slate-950/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl text-left pointer-events-none z-30"
                >
                  <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Arena Feature</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">{spot.label}</h4>
                  <p className="text-[11px] text-slate-300 leading-tight">{spot.sub}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      ))}

      {/* Floating Live Status Pill (Responsive indicator near center-top) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-auto hidden sm:block"
      >
        <button
          onClick={onOpenBooking}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/75 hover:bg-slate-950/90 text-white backdrop-blur-xl border border-white/25 shadow-xl text-xs font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
          </span>
          <span className="font-semibold text-slate-100">
            Sunset Arena: <span className="text-amber-300 font-bold">3 Slots Open Tonight</span>
          </span>
          <span className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center font-bold text-[10px] group-hover:translate-x-0.5 transition-transform shadow-xs">
            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
          </span>
        </button>
      </motion.div>

      {/* Floating Scroll Cue at bottom-center of hero */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
      >
        <button
          onClick={onScrollToExplorer}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 text-xs font-semibold backdrop-blur-md shadow-lg border border-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Explore All Turfs & Tournaments</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-700 animate-bounce" />
        </button>
      </motion.div>
    </>
  );
};
