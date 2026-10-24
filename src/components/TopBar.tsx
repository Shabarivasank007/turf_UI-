import React, { useState } from 'react';
import {
  MapPin,
  LayoutGrid,
  Tag,
  ChevronDown,
  ArrowUpRight,
  ArrowUpLeft,
  Check,
} from 'lucide-react';

interface TopBarProps {
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  selectedPropertyType: string;
  onSelectPropertyType: (type: string) => void;
  selectedPrice: string;
  onSelectPrice: (price: string) => void;
  onOpenBuy: () => void;
  onOpenRent: () => void;
}

const LOCATIONS = [
  'Coimbatore',
  'Bengaluru',
  'Chennai',
  'Hyderabad',
  'Mumbai',
  'Kochi',
];

const TURF_TYPES = [
  '5-a-side',
  '7-a-side',
  '8-a-side',
  'Box Cricket',
  'Padel Tennis',
];

const PRICES = [
  '₹ 800 / hr',
  '₹ 1,200 / hr',
  '₹ 1,500 / hr',
  '₹ 2,000 / hr',
  '₹ 2,500+ / hr',
];

export const TopBar: React.FC<TopBarProps> = ({
  selectedLocation,
  onSelectLocation,
  selectedPropertyType,
  onSelectPropertyType,
  selectedPrice,
  onSelectPrice,
  onOpenBuy,
  onOpenRent,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-4 sm:px-8 md:px-12 pointer-events-none">
      {/* Left Pill: "Book Turf" in pure white matching reference image */}
      <div className="pointer-events-auto pt-4 sm:pt-6">
        <button
          onClick={onOpenBuy}
          className="flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-slate-50 text-slate-900 text-sm sm:text-base font-bold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
        >
          <ArrowUpLeft className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#65a30d] stroke-[2.8] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="tracking-tight">Book Turf</span>
        </button>
      </div>

      {/* Center Filter Bridge in pure solid white - Location, Turf Type, Max Price */}
      <div className="pointer-events-auto relative">
        <div className="bg-white px-8 sm:px-14 md:px-16 py-3.5 sm:py-4.5 rounded-b-[36px] sm:rounded-b-[46px] shadow-[0_14px_45px_rgba(0,0,0,0.14)] border-b border-x border-slate-100 flex items-center gap-6 sm:gap-11 md:gap-14 transition-all">
          {/* Location Selector */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('location')}
              className="text-left flex flex-col group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-[#65a30d] transition-colors" />
                <span>Location</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-[17px] font-extrabold text-slate-950 mt-1 tracking-tight">
                <span>{selectedLocation}</span>
                <ChevronDown className={`w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-400 group-hover:text-slate-900 transition-transform duration-200 ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {openDropdown === 'location' && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                {LOCATIONS.map(loc => (
                  <button
                    key={loc}
                    onClick={() => {
                      onSelectLocation(loc);
                      setOpenDropdown(null);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between transition-colors cursor-pointer font-medium"
                  >
                    <span>{loc}</span>
                    {selectedLocation === loc && (
                      <Check className="w-4 h-4 text-[#65a30d] stroke-[2.5]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-[1.5px] h-9 sm:h-11 bg-slate-200 hidden sm:block" />

          {/* Turf Type Selector */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('propertyType')}
              className="text-left flex flex-col group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors uppercase tracking-wider">
                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-[#65a30d] transition-colors" />
                <span>Turf Type</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-[17px] font-extrabold text-slate-950 mt-1 tracking-tight">
                <span>{selectedPropertyType}</span>
                <ChevronDown className={`w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-400 group-hover:text-slate-900 transition-transform duration-200 ${openDropdown === 'propertyType' ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {openDropdown === 'propertyType' && (
              <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                {TURF_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      onSelectPropertyType(type);
                      setOpenDropdown(null);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between transition-colors cursor-pointer font-medium"
                  >
                    <span>{type}</span>
                    {selectedPropertyType === type && (
                      <Check className="w-4 h-4 text-[#65a30d] stroke-[2.5]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-[1.5px] h-9 sm:h-11 bg-slate-200 hidden sm:block" />

          {/* Max Price Selector */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('price')}
              className="text-left flex flex-col group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-[#65a30d] transition-colors" />
                <span>Max Price</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-[17px] font-extrabold text-slate-950 mt-1 tracking-tight">
                <span>{selectedPrice}</span>
                <ChevronDown className={`w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-400 group-hover:text-slate-900 transition-transform duration-200 ${openDropdown === 'price' ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {openDropdown === 'price' && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                {PRICES.map(price => (
                  <button
                    key={price}
                    onClick={() => {
                      onSelectPrice(price);
                      setOpenDropdown(null);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between transition-colors cursor-pointer font-medium"
                  >
                    <span>{price}</span>
                    {selectedPrice === price && (
                      <Check className="w-4 h-4 text-[#65a30d] stroke-[2.5]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Pill: "Explore Turfs" in pure white matching reference image */}
      <div className="pointer-events-auto pt-4 sm:pt-6">
        <button
          onClick={onOpenRent}
          className="flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-slate-50 text-slate-900 text-sm sm:text-base font-bold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
        >
          <span className="tracking-tight">Explore Turfs</span>
          <ArrowUpRight className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#65a30d] stroke-[2.8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </header>
  );
};
