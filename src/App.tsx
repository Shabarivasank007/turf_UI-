import React, { useState, useEffect, useRef } from 'react';
import { TopBar } from './components/TopBar';
import { SidebarDock } from './components/SidebarDock';
import { HeroGlassCard } from './components/HeroGlassCard';
import { BottomLeftCard } from './components/BottomLeftCard';
import { TurfExplorerSection, EXPANDED_TURFS } from './components/TurfExplorerSection';
import { FeaturesTechSection } from './components/FeaturesTechSection';
import { TournamentsSection } from './components/TournamentsSection';
import { ReviewsAndFaqSection } from './components/ReviewsAndFaqSection';
import { Footer } from './components/Footer';
import { PropertyDetailsModal } from './components/PropertyDetailsModal';
import { SlotBookingModal } from './components/SlotBookingModal';
import { SearchModal } from './components/SearchModal';
import { NotificationsModal } from './components/NotificationsModal';
import { SupportChatModal } from './components/SupportChatModal';
import { SettingsModal } from './components/SettingsModal';
import { TurfArena, TimeSlot } from './types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 60fps smooth cinematic cloud drift video with seamless crossfade loop
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  // Filters state in top bar (exact values from reference screenshot)
  const [selectedLocation, setSelectedLocation] = useState('Coimbatore');
  const [selectedPropertyType, setSelectedPropertyType] = useState('5-a-side');
  const [selectedPrice, setSelectedPrice] = useState('₹ 1,500 / hr');

  // Modals state
  const [modalMode, setModalMode] = useState<'details' | 'buy' | 'rent'>('details');
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSlotBookingOpen, setIsSlotBookingOpen] = useState(false);
  const [activeArenaForBooking, setActiveArenaForBooking] = useState<TurfArena>(EXPANDED_TURFS[0]);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleOpenBuy = () => {
    setModalMode('buy');
    setIsDetailsOpen(true);
  };

  const handleOpenRent = () => {
    setModalMode('rent');
    setIsDetailsOpen(true);
  };

  const handleOpenDetails = () => {
    setModalMode('details');
    setIsDetailsOpen(true);
  };

  const handleBookTurf = (arena: TurfArena) => {
    setActiveArenaForBooking(arena);
    setIsSlotBookingOpen(true);
  };

  const handleScrollToExplorer = () => {
    const el = document.getElementById('turf-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 font-['Outfit',sans-serif] text-slate-900 select-none overflow-x-hidden overflow-y-auto scroll-smooth">
      {/* 1. HERO VIEWPORT CONTAINER */}
      <section className="relative w-full h-screen min-h-[640px] p-0.5 sm:p-1 md:p-1.5 flex flex-col bg-white">
        {/* Outer White Curved Container matching reference mockup */}
        <div className="relative w-full h-full rounded-[20px] sm:rounded-[30px] md:rounded-[38px] overflow-hidden bg-slate-950 shadow-2xl border-[2.5px] sm:border-[3px] border-white">
          
          {/* Full Background Video: Cloud_video.mp4 with slow cinematic drift */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/turf_background.png"
              style={{ filter: 'blur(3px)' }}
              className="w-full h-full object-cover object-center scale-105 transform-gpu"
            >
              <source src="/Cloud_video.mp4?v=2" type="video/mp4" />
              <img
                src="/turf_background.png"
                alt="Turf Stadium Background"
                style={{ filter: 'blur(3px)' }}
                className="w-full h-full object-cover object-center scale-105"
              />
            </video>
            {/* Scrim on the left to maximize contrast for Your Game. Your Turf. headline */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
          </div>

          {/* Top Bar with Pure White Filter Bridge: Location, Turf Type, Max Price */}
          <TopBar
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
            selectedPropertyType={selectedPropertyType}
            onSelectPropertyType={setSelectedPropertyType}
            selectedPrice={selectedPrice}
            onSelectPrice={setSelectedPrice}
            onOpenBuy={handleOpenBuy}
            onOpenRent={handleOpenRent}
          />

          {/* Vertical Left Floating Dock (5-icon sleek white capsule: Home, Search, Calendar, Star, Profile) */}
          <SidebarDock
            activeTab={activeTab}
            onTabChange={tab => {
              setActiveTab(tab);
              if (tab === 'home') handleScrollToTop();
              if (tab === 'favorites') handleScrollToExplorer();
            }}
            isDarkMode={isDarkMode}
            onToggleDarkMode={setIsDarkMode}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenNotifications={() => setIsNotificationsOpen(true)}
            onOpenChat={() => setIsChatOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />

          {/* Hero Headline & CTA positioned on the left side matching reference mockup */}
          <div className="absolute top-[19%] sm:top-[21%] md:top-[23%] left-16 sm:left-24 md:left-28 lg:left-32 z-10 max-w-[530px] pointer-events-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.55)] leading-[1.04] font-['Outfit'] select-none"
            >
              Your Game.
              <br />
              Your <span className="text-[#a3e635]">Turf.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] font-medium mt-3 sm:mt-4 max-w-[460px]"
            >
              Discover and book premium turf grounds near you. Whether it's a casual match or a competitive game, find the perfect turf for your next big play.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 sm:mt-6"
            >
              <button
                onClick={() => handleBookTurf(EXPANDED_TURFS[0])}
                className="flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 bg-white hover:bg-slate-50 text-slate-950 font-bold rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition-all hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base group"
              >
                <span>Book Your Turf</span>
                <div className="w-8 h-8 rounded-full bg-[#18392b] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Bottom Left: Find The Perfect Place with Verified Player Reviews Slideshow */}
          <BottomLeftCard
            onExploreProperties={handleScrollToExplorer}
          />

          {/* Bottom Right: Sunset Arena Preview Card with Slots & Book Now CTA */}
          <HeroGlassCard
            onOpenDetails={handleOpenDetails}
            onBookNow={() => handleBookTurf(EXPANDED_TURFS[0])}
          />
        </div>
      </section>

      {/* 2. SCROLLABLE CONTENT SECTIONS BELOW HERO */}
      {/* Live Turf Arena & Slot Explorer */}
      <TurfExplorerSection
        onBookArena={handleBookTurf}
        onViewDetails={handleOpenDetails}
      />

      {/* Stadium Amenities & High-Performance Technology */}
      <FeaturesTechSection />

      {/* Tournaments, Leagues & Weekend Cups */}
      <TournamentsSection />

      {/* Testimonials, Ratings & FAQ Accordion */}
      <ReviewsAndFaqSection />

      {/* Comprehensive Sports Brand Footer */}
      <Footer
        onScrollToTop={handleScrollToTop}
        onOpenBooking={() => handleBookTurf(EXPANDED_TURFS[0])}
      />

      {/* 3. INTERACTIVE MODALS */}
      {/* Full Slot Booking Modal with Calendar, Add-ons, Bill Splitting & QR Pass */}
      <SlotBookingModal
        isOpen={isSlotBookingOpen}
        onClose={() => setIsSlotBookingOpen(false)}
        arena={activeArenaForBooking}
      />

      {/* Property & Venue Details Modal */}
      <PropertyDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        mode={modalMode}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArena={arena => {
          setIsSearchOpen(false);
          handleBookTurf(arena);
        }}
        onOpenBooking={() => {
          setIsSearchOpen(false);
          handleBookTurf(EXPANDED_TURFS[0]);
        }}
      />

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onOpenBooking={() => {
          setIsNotificationsOpen(false);
          handleBookTurf(EXPANDED_TURFS[0]);
        }}
      />

      {/* Support Chat Modal */}
      <SupportChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenBooking={() => {
          setIsChatOpen(false);
          handleBookTurf(EXPANDED_TURFS[0]);
        }}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={setIsDarkMode}
      />
    </div>
  );
}
