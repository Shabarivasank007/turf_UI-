import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
} from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
  onOpenBooking,
}) => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 px-3 sm:px-6 lg:px-10 text-xs">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl font-['Outfit']">
              <div className="w-8 h-8 rounded-xl bg-white text-slate-950 flex items-center justify-center font-extrabold shadow-sm">
                <ShieldCheck className="w-4 h-4 stroke-[2.4]" />
              </div>
              <span>TURF PRO ARENAS</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier sports venue and synthetic pitch reservation platform. Seamless real-time slot bookings, FIFA-certified turf, 1,200 Lux floodlights, and automated 4K match replays.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#turf-explorer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#turf-explorer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#turf-explorer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Venues */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Arena Network
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  Sunset Floodlit Arena (Phoenix)
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  CyberPitch Canopy (Austin)
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  Lunar Oasis Arena (Asheville)
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  Metro Box Cricket (Scottsdale)
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  Oasis Valley Padel Club (Miami)
                </a>
              </li>
            </ul>
          </div>

          {/* Sports & Features */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Sports & Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  7v7 & 5v5 Football
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  High-Tension Box Cricket
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  Panoramic Padel Tennis
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  Automated 4K Match Replay
                </a>
              </li>
              <li>
                <a href="#turf-explorer" className="hover:text-amber-300 transition-colors">
                  Team Bill-Splitting Tool
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Turnstile */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Support & Pass
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>1874 Forest Haven Rd, Asheville</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+1 (800) 555-TURF</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>support@turfproarenas.com</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold transition-all cursor-pointer shadow-md"
                >
                  Book Instant Slot
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © 2026 Turf Pro Arenas Inc. All rights reserved. Built with FIFA Quality Pro certification and zero-latency turnstile access.
          </p>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
