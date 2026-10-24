import React, { useState } from 'react';
import { Search, X, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { FEATURED_TURFS } from '../turfData';
import { TurfArena } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArena: (arena: TurfArena) => void;
  onOpenBooking: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArena,
  onOpenBooking,
}) => {
  const [query, setQuery] = useState('');
  const [selectedSportFilter, setSelectedSportFilter] = useState('All');

  if (!isOpen) return null;

  const filteredTurfs = FEATURED_TURFS.filter(arena => {
    const matchesQuery =
      arena.name.toLowerCase().includes(query.toLowerCase()) ||
      arena.location.toLowerCase().includes(query.toLowerCase()) ||
      arena.address.toLowerCase().includes(query.toLowerCase());
    const matchesSport =
      selectedSportFilter === 'All' ||
      arena.sportTypes.some(s => s.toLowerCase().includes(selectedSportFilter.toLowerCase()));
    return matchesQuery && matchesSport;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search by arena name, location, or sport..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Sport Filters */}
        <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs font-medium">
          {['All', 'Football', 'Cricket', 'Pickleball', 'Futsal'].map(sport => (
            <button
              key={sport}
              onClick={() => setSelectedSportFilter(sport)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                selectedSportFilter === sport
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {filteredTurfs.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-400">
              No turfs found matching "{query}". Try another search term.
            </div>
          ) : (
            filteredTurfs.map(turf => (
              <div
                key={turf.id}
                className="p-3.5 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all flex items-center justify-between gap-4 group cursor-pointer"
                onClick={() => {
                  onSelectArena(turf);
                  onClose();
                }}
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={turf.image}
                    alt={turf.name}
                    className="w-16 h-14 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {turf.name}
                    </h4>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{turf.address}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {turf.sportTypes.join(' • ')}
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                    ${turf.pricePerHour}/hr
                  </div>
                  <div className="text-[11px] text-amber-500 font-semibold flex items-center justify-end gap-0.5">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{turf.rating}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
