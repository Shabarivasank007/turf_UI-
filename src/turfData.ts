import { TurfArena, TimeSlot, BookingAddon } from './types';

export const FEATURED_TURFS: TurfArena[] = [
  {
    id: 'lunar-oasis',
    name: 'Lunar Oasis Arena',
    subtitle: 'FIFA Pro Hybrid Stadium Turf',
    location: 'Asheville, NC',
    address: '1874 Forest Haven Rd, Asheville',
    city: 'Asheville',
    image: '/src/assets/images/turf_hero_futuristic_arena_1792769013190.jpg',
    pricePerHour: 45,
    rating: 4.96,
    reviewsCount: 342,
    likesCount: '4.4K',
    bookmarkCount: '157',
    areaSize: '695m²',
    loungeSize: '126m² lounge',
    capacity: '7-a-side',
    amenitiesCount: '2 locker rooms',
    surfaceType: 'FIFA Grade 50mm Monofilament',
    sportTypes: ['Football 7v7', 'Box Cricket', 'Futsal'],
    description:
      'This futuristic villa-style arena seamlessly blends into the desert mountain landscape, offering an all-weather shock-pad turf with panoramic floodlight views. Its innovative curved pavilion makes it a premier sports and leisure sanctuary.',
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
    location: 'Austin, TX',
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
    capacity: '8-a-side',
    amenitiesCount: '3 locker suites',
    surfaceType: 'Pro CoolGrass Infused Microfiber',
    sportTypes: ['Box Cricket', 'Football 8v8', 'Pickleball'],
    description:
      'A breathtaking parametric architectural canopy designed for tournament matches. Features dual cricket bowling creases, FIFA synthetic turf, high-definition replay cameras, and a players lounge.',
    fullSpecs: {
      dimensions: '60m × 38m (Multi-Sport Pro)',
      lighting: '1,500 Lux Broadcast-Grade LED floodlights',
      cushioning: 'Dual Shock-Absorbent EPDM infill',
      parking: 'Valet & Covered garage parking',
      changingRooms: '3 Premium suites with ice bath tubs',
    },
  },
];

export const INITIAL_SLOTS: TimeSlot[] = [
  // Morning
  { id: 'm1', startTime: '06:00 AM', endTime: '07:00 AM', period: 'morning', price: 35, isAvailable: true },
  { id: 'm2', startTime: '07:00 AM', endTime: '08:00 AM', period: 'morning', price: 40, isAvailable: true },
  { id: 'm3', startTime: '08:00 AM', endTime: '09:00 AM', period: 'morning', price: 40, isAvailable: false },
  { id: 'm4', startTime: '09:00 AM', endTime: '10:00 AM', period: 'morning', price: 40, isAvailable: true },
  
  // Afternoon
  { id: 'a1', startTime: '02:00 PM', endTime: '03:00 PM', period: 'afternoon', price: 45, isAvailable: true },
  { id: 'a2', startTime: '03:00 PM', endTime: '04:00 PM', period: 'afternoon', price: 45, isAvailable: false },
  { id: 'a3', startTime: '04:00 PM', endTime: '05:00 PM', period: 'afternoon', price: 50, isAvailable: true },
  
  // Evening Floodlit
  { id: 'e1', startTime: '06:00 PM', endTime: '07:00 PM', period: 'evening', price: 55, isAvailable: true, isFastFilling: true },
  { id: 'e2', startTime: '07:00 PM', endTime: '08:00 PM', period: 'evening', price: 60, isAvailable: true, isFastFilling: true },
  { id: 'e3', startTime: '08:00 PM', endTime: '09:00 PM', period: 'evening', price: 60, isAvailable: true },
  { id: 'e4', startTime: '09:00 PM', endTime: '10:00 PM', period: 'evening', price: 55, isAvailable: true },
  { id: 'e5', startTime: '10:00 PM', endTime: '11:00 PM', period: 'evening', price: 50, isAvailable: true },
];

export const BOOKING_ADDONS: BookingAddon[] = [
  {
    id: 'balls_bibs',
    name: 'Pro Match Balls & Team Bibs',
    price: 8,
    description: '2 FIFA quality match balls + 14 color-coded breathable team bibs',
    icon: 'shield',
  },
  {
    id: 'referee',
    name: 'Certified Match Referee',
    price: 22,
    description: 'Licensed referee to officiate full 60-min match and manage scorekeeping',
    icon: 'timer',
  },
  {
    id: 'gopro_recording',
    name: '4K AI Overhead Match Replay',
    price: 15,
    description: 'Automated 4K panoramic camera tracking with digital highlight clips sent to phone',
    icon: 'video',
  },
  {
    id: 'hydration',
    name: 'Chilled Hydration Pack',
    price: 10,
    description: '12 bottles of electrolyte sports drinks + chilled mineral spring water caddy',
    icon: 'droplet',
  },
];
