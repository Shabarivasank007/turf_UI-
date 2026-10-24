import React from 'react';
import { X, Trophy, Calendar, Users, Award, ArrowUpRight } from 'lucide-react';

interface TournamentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const TournamentsModal: React.FC<TournamentsModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const TOURNAMENTS = [
    {
      id: 't1',
      title: 'Midnight Floodlight 7v7 Champions Cup',
      arena: 'Lunar Oasis Arena, Asheville',
      date: 'Saturday, Nov 07, 2026',
      time: '08:00 PM - 02:00 AM',
      teams: '12 / 16 Teams Registered',
      prize: '$2,500 Cash + Trophy',
      entryFee: '$120 / team',
      format: 'Knockout Stage + Group Play',
    },
    {
      id: 't2',
      title: 'Grand Canopy Box Cricket League (BCL)',
      arena: 'CyberPitch Grand Canopy, Austin',
      date: 'Sunday, Nov 15, 2026',
      time: '05:00 PM - 11:00 PM',
      teams: '8 / 8 Teams (Waitlist Only)',
      prize: '$1,800 Cash + Medals',
      entryFee: '$90 / team',
      format: '8-overs round robin + Final',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-100 dark:bg-amber-950/50 rounded-xl text-amber-600 dark:text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Upcoming Turf Tournaments & Leagues
              </h3>
              <p className="text-xs text-slate-500">Compete for prizes and official leaderboards</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          {TOURNAMENTS.map(t => (
            <div
              key={t.id}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.title}</h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t.arena}</div>
                </div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full shrink-0">
                  {t.prize}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.teams}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-slate-400">Entry: </span>
                  <span className="font-bold text-slate-900 dark:text-white">{t.entryFee}</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="px-3.5 py-1.5 bg-[#181a2f] text-white hover:bg-slate-800 rounded-xl text-xs font-medium flex items-center gap-1 cursor-pointer"
                >
                  <span>Register Team</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
