import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Star,
  Users,
  ShieldCheck,
  ChevronRight,
  Filter,
  Flame,
  CheckCircle2,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { TurfArena, TimeSlot } from '../types';
import { motion } from 'motion/react';

interface TurfExplorerSectionProps {
  onBookArena: (arena: TurfArena, slot?: TimeSlot) => void;
  onViewDetails: (arena: TurfArena) => void;
}

export const EXPANDED_TURFS: TurfArena[] = [
  {
    id: 'sunset-floodlit',
    name: 'Sunset Floodlit Arena',
    subtitle: 'FIFA Pro 7-a-side Championship Turf',
    location: 'Phoenix, Arizona',
    address: '1874 Forest Haven Rd, Asheville / Phoenix',
    city: 'Phoenix',
    image: '/assets/aistudio/image_fdfcc432.png',
    pricePerHour: 45,
    rating: 4.96,
    reviewsCount: 382,
    likesCount: '4.4K',
    bookmarkCount: '157',
    areaSize: '695m²',
    loungeSize: '126m² lounge',
    capacity: '7v7 Football / Box Cricket',
    amenitiesCount: '2 Luxury locker suites',
    surfaceType: 'FIFA Grade 50mm Monofilament',
    sportTypes: ['Football 7v7', 'Box Cricket', 'Futsal'],
    description:
      'Our flagship arena featuring FIFA Quality Pro artificial grass with zero-abrasion cool infill, illuminated by 1,200 Lux anti-glare Philips floodlights. Includes 4K automated replay cameras and VIP team dugouts.',
    fullSpecs: {
      dimensions: '55m × 35m (FIFA Pro 7-a-side)',
      lighting: '1,200 Lux Anti-Glare Stadium LED system',
      cushioning: '14mm Recycled SBR Underlay Pad',
      parking: 'Dedicated 80-vehicle secured lot with EV chargers',
      changingRooms: '2 Luxury AC locker suites with rainfall showers',
    },
  },
  {
    id: 'cyberpitch-dome',
    name: 'CyberPitch Grand Canopy',
    subtitle: 'All-Weather Parametric Turf Dome',
    location: 'Austin, Texas',
    address: '420 Olympic Boulevard, Austin',
    city: 'Austin',
    image: '/src/assets/images/turf_dome_evening_1792769030840.jpg',
    pricePerHour: 55,
    rating: 4.98,
    reviewsCount: 489,
    likesCount: '5.2K',
    bookmarkCount: '230',
    areaSize: '820m²',
    loungeSize: '150m² mezzanine',
    capacity: '8v8 Football / Box Cricket',
    amenitiesCount: '3 locker suites',
    surfaceType: 'Pro CoolGrass Infused Microfiber',
    sportTypes: ['Football 8v8', 'Box Cricket', 'Pickleball'],
    description:
      'A breathtaking parametric architectural canopy designed for all-weather tournament matches. Features dual cricket bowling creases, FIFA synthetic turf, high-definition replay cameras, and a players lounge.',
    fullSpecs: {
      dimensions: '60m × 38m (Multi-Sport Pro)',
      lighting: '1,500 Lux Broadcast-Grade LED floodlights',
      cushioning: 'Dual Shock-Absorbent EPDM infill',
      parking: 'Valet & Covered garage parking',
      changingRooms: '3 Premium suites with ice bath tubs',
    },
  },
  {
    id: 'lunar-oasis-arena',
    name: 'Lunar Oasis Arena & Sanctuary',
    subtitle: 'Architectural Mountain-View Turf Facility',
    location: 'Asheville, North Carolina',
    address: '1874 Forest Haven Rd, Asheville',
    city: 'Asheville',
    image: '/src/assets/images/turf_hero_futuristic_arena_1792769013190.jpg',
    pricePerHour: 50,
    rating: 4.94,
    reviewsCount: 294,
    likesCount: '4.8K',
    bookmarkCount: '192',
    areaSize: '750m²',
    loungeSize: '135m² terrace',
    capacity: '7v7 Football / Futsal',
    amenitiesCount: '2 recovery suites',
    surfaceType: 'Hybrid 45mm Dual-Fiber Turf',
    sportTypes: ['Football 7v7', 'Futsal'],
    description:
      'Nestled against panoramic scenic backdrops, Lunar Oasis integrates cutting-edge shockpad turf with modern architectural pavilion spaces, craft recovery espresso bar, and private locker lounges.',
    fullSpecs: {
      dimensions: '56m × 36m (Standard 7-a-side)',
      lighting: '1,200 Lux Anti-Glare System',
      cushioning: 'Multi-layer Elastic Shock Pad',
      parking: '60 parking slots + bike racks',
      changingRooms: 'Private locker suites & showers',
    },
  },
  {
    id: 'metro-box-cricket',
    name: 'Metro Box Cricket Pitch & Nets',
    subtitle: 'High-Tension Netted Arena with Speed Radar',
    location: 'Scottsdale, Arizona',
    address: '8820 East Desert Cove, Scottsdale',
    city: 'Arizona',
    image: '/src/assets/images/turf_hero_futuristic_arena_1792769013190.jpg',
    pricePerHour: 38,
    rating: 4.91,
    reviewsCount: 215,
    likesCount: '3.9K',
    bookmarkCount: '118',
    areaSize: '480m²',
    loungeSize: '80m² lounge',
    capacity: '6v6 Box Cricket',
    amenitiesCount: '1 team dugout & cafe',
    surfaceType: 'Tight-Tuft 18mm Cricket Matting',
    sportTypes: ['Box Cricket'],
    description:
      'Purpose-built indoor box cricket facility with ceiling-to-floor heavy-duty UV-treated netting, genuine bounce cricket turf matting, radar ball speed tracking, and electronic LED scoreboard.',
    fullSpecs: {
      dimensions: '35m × 18m × 9m height',
      lighting: '1,000 Lux High-Lumen LED',
      cushioning: 'Non-slip shock-absorbing rubber sub-base',
      parking: 'Ample on-site plaza parking',
      changingRooms: 'Players dugout with chilled water dispensers',
    },
  },
  {
    id: 'oasis-padel-club',
    name: 'Oasis Valley Padel & Tennis Club',
    subtitle: 'Panoramic Glass-Walled Padel Courts',
    location: 'Miami, Florida',
    address: '770 Ocean Parkway, Miami',
    city: 'Miami',
    image: '/src/assets/images/turf_dome_evening_1792769030840.jpg',
    pricePerHour: 52,
    rating: 4.97,
    reviewsCount: 312,
    likesCount: '4.6K',
    bookmarkCount: '210',
    areaSize: '620m²',
    loungeSize: '110m² sundeck',
    capacity: '4 players per court (2 courts)',
    amenitiesCount: 'Pro equipment rental & shop',
    surfaceType: 'Mondo Supercourt XN Textured Turf',
    sportTypes: ['Padel Tennis', 'Pickleball'],
    description:
      'Two tournament-approved panoramic glass padel courts equipped with Mondo pro synthetic turf, anti-glare court lighting, pro racket rentals, and a shaded outdoor recovery terrace.',
    fullSpecs: {
      dimensions: '20m × 10m each court',
      lighting: '800 Lux Padel LED floodlights',
      cushioning: 'Textured monofilament curly turf',
      parking: 'Valet and dedicated guest parking',
      changingRooms: 'Luxury shower suites and towel service',
    },
  },
  {
    id: 'starlight-stadium-dome',
    name: 'Starlight Pro Arena & Stadium',
    subtitle: 'Championship 9v9 Turf & Spectator Bleachers',
    location: 'Phoenix, Arizona',
    address: '10200 North 24th Ave, Phoenix',
    city: 'Arizona',
    image: '/assets/aistudio/image_fdfcc432.png',
    pricePerHour: 75,
    rating: 4.99,
    reviewsCount: 520,
    likesCount: '6.1K',
    bookmarkCount: '345',
    areaSize: '1,200m²',
    loungeSize: '200m² clubhouse',
    capacity: '9v9 / 11v11 Youth Football',
    amenitiesCount: 'Bleachers for 250 & Media Box',
    surfaceType: 'FIFA Quality Pro 60mm System',
    sportTypes: ['Football 7v7', 'Football 8v8', 'Football 9v9'],
    description:
      'Our largest premier stadium pitch with 250 spectator seats, full commentary booth, multi-angle VAR camera setup, referee dressing room, and state-of-the-art cold recovery plunge tubs.',
    fullSpecs: {
      dimensions: '72m × 48m (Championship Size)',
      lighting: '1,600 Lux Broadcast Television Spec',
      cushioning: '18mm Prefabricated Shock Pad',
      parking: '120-vehicle secure lot',
      changingRooms: '4 Pro locker rooms with ice tubs',
    },
  },
];

const SPORT_FILTERS = [
  'All Sports',
  'Football 7v7',
  'Box Cricket',
  'Padel Tennis',
  'Futsal',
];

const SAMPLE_SLOTS: TimeSlot[] = [
  { id: 's1', startTime: '06:00 PM', endTime: '07:00 PM', period: 'evening', price: 45, isAvailable: true, isFastFilling: true },
  { id: 's2', startTime: '07:30 PM', endTime: '08:30 PM', period: 'evening', price: 50, isAvailable: true, isFastFilling: true },
  { id: 's3', startTime: '09:00 PM', endTime: '10:00 PM', period: 'evening', price: 45, isAvailable: true },
];

export const TurfExplorerSection: React.FC<TurfExplorerSectionProps> = ({
  onBookArena,
  onViewDetails,
}) => {
  const [selectedSport, setSelectedSport] = useState('All Sports');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Cities');

  const filteredTurfs = EXPANDED_TURFS.filter(arena => {
    const matchesSport =
      selectedSport === 'All Sports' ||
      arena.sportTypes.some(s => s.toLowerCase().includes(selectedSport.toLowerCase()));
    const matchesCity =
      selectedCity === 'All Cities' ||
      arena.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
      arena.location.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesSearch =
      searchQuery === '' ||
      arena.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      arena.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      arena.surfaceType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesCity && matchesSearch;
  });

  return (
    <section id="turf-explorer" className="w-full py-16 px-3 sm:px-6 lg:px-10 bg-slate-900 text-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Real-Time Arena Availability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
              Book Your Perfect Turf
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              World-class artificial pitches, broadcast-grade floodlights, and automated 4K replay cameras. Reserve your squad's slot in under 60 seconds.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-slate-800/80 border border-slate-700/80 px-5 py-3 rounded-2xl backdrop-blur-md self-start md:self-auto">
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                24+
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Live Slots Today
              </div>
            </div>
            <div className="w-[1px] h-8 bg-slate-700" />
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold text-amber-400 tabular-nums">
                100%
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Instant Turnstile Pass
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Sport Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {SPORT_FILTERS.map(sport => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  selectedSport === sport
                    ? 'bg-white text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700/80 text-slate-300 border border-slate-700/60'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          {/* Search & City Filter */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search turf name, surface..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/90 border border-slate-700/80 rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/80 transition-colors"
              />
            </div>

            {/* City Dropdown */}
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className="bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 rounded-full px-3.5 py-2 focus:outline-none focus:border-amber-400/80 cursor-pointer"
            >
              <option value="All Cities">All Locations</option>
              <option value="Phoenix">Phoenix / Arizona</option>
              <option value="Austin">Austin, TX</option>
              <option value="Asheville">Asheville, NC</option>
              <option value="Miami">Miami, FL</option>
            </select>
          </div>
        </div>

        {/* Turf Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTurfs.map((arena, idx) => (
            <motion.div
              key={arena.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative bg-slate-800/90 rounded-[28px] sm:rounded-[32px] overflow-hidden border border-slate-700/70 hover:border-slate-500/80 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Image Container with Badges */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                <img
                  src={arena.image}
                  alt={arena.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Price Tag Pill */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <span>${arena.pricePerHour}</span>
                  <span className="text-slate-400 font-normal">/ hour</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-950 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{arena.rating}</span>
                  <span className="text-slate-500 text-[10px]">({arena.reviewsCount})</span>
                </div>

                {/* Surface Tag */}
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-amber-300 flex items-center gap-1.5 drop-shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{arena.surfaceType}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-['Outfit']">
                      {arena.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{arena.location}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300 font-medium">{arena.capacity}</span>
                  </p>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {arena.description}
                  </p>

                  {/* Prime Slots Tonight Row */}
                  <div className="mb-5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Available Tonight</span>
                      <span className="text-amber-400 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-400" /> Live
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      {SAMPLE_SLOTS.map(slot => (
                        <button
                          key={slot.id}
                          onClick={() => onBookArena(arena, slot)}
                          className="px-2 py-1.5 rounded-xl bg-slate-900/90 hover:bg-white hover:text-slate-950 text-slate-200 text-[11px] font-medium border border-slate-700/80 hover:border-white transition-all text-center cursor-pointer group/slot"
                          title="Click to reserve this slot"
                        >
                          <span className="block font-bold">{slot.startTime.replace(' ', '')}</span>
                          <span className="block text-[9px] text-slate-400 group-hover/slot:text-slate-950">
                            ${slot.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-700/60">
                  <button
                    onClick={() => onBookArena(arena)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-white"
                  >
                    <span>Book Turf</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
                  </button>

                  <button
                    onClick={() => onViewDetails(arena)}
                    className="py-2.5 px-3 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-600 transition-colors cursor-pointer"
                    title="View arena specifications and photos"
                  >
                    Specs
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
