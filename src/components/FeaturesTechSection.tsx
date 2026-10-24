import React from 'react';
import {
  Sparkles,
  Zap,
  Video,
  ShieldCheck,
  QrCode,
  Users2,
  Award,
  Layers,
  ThermometerSnowflake,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

export const FeaturesTechSection: React.FC = () => {
  const features = [
    {
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      title: 'FIFA Quality Pro Hybrid Turf',
      badge: '50mm Monofilament',
      description:
        'Engineered with dual-core non-abrasive polymer fibers and organic cool-infill. Delivers natural grass ball-roll and 65% shock absorption to protect knees and ankles from turf burn.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: '1,200 Lux Anti-Glare Floodlights',
      badge: 'Broadcast Standard',
      description:
        'Optically calibrated Philips ArenaVision LED floodlights that eliminate harsh glare and pitch shadows. Certified for high-speed broadcast filming and night games.',
    },
    {
      icon: <Video className="w-6 h-6 text-slate-200" />,
      title: 'Automated 4K AI Replay Cameras',
      badge: 'Instant Match Clips',
      description:
        'Overhead panoramic computer-vision cameras track player runs, auto-detect goals, and send 60-second highlight reels directly to your squad’s group chat after every match.',
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6 text-slate-200" />,
      title: 'Locker Suites & Chilled Ice Baths',
      badge: 'Pro Recovery',
      description:
        'Air-conditioned private changing rooms with rainfall power showers, digital lockers, and 10°C cold plunge tubs to accelerate post-match recovery for high-intensity play.',
    },
    {
      icon: <QrCode className="w-6 h-6 text-amber-400" />,
      title: 'Contactless QR Turnstile Entry',
      badge: 'Zero Waiting',
      description:
        'Instant digital gate pass added directly to Apple Wallet or Google Wallet. Scan your phone at the perimeter turnstile for keyless, zero-friction pitch access 10 minutes prior.',
    },
    {
      icon: <Users2 className="w-6 h-6 text-slate-200" />,
      title: 'Squad Automated Bill-Splitting',
      badge: 'Instant Links',
      description:
        'Never chase teammates for pitch money again. Enter team size and our system generates instant payment links with exact split breakdowns via Apple Pay, Google Pay, or Card.',
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for High Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
            Stadium Quality in Every Detail
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            From the sub-base cushioning beneath your boots to the automated 4K replay cameras recording your best volleys, our facilities are crafted for competitive athletes.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="p-7 rounded-[28px] bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 font-['Outfit'] group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Verified Facility Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
