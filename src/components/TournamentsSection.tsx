import React, { useState } from 'react';
import {
  Trophy,
  Calendar,
  Users,
  DollarSign,
  ArrowUpRight,
  ShieldAlert,
  Flame,
  CheckCircle2,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';

interface Tournament {
  id: string;
  title: string;
  format: string;
  date: string;
  time: string;
  prizePool: string;
  teamsLimit: number;
  teamsRegistered: number;
  entryFee: number;
  badge: string;
  location: string;
}

const TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    title: 'Arizona Premier 7v7 Fall Cup',
    format: '7v7 Football · Knockout & Finals',
    date: 'Nov 7 - 9, 2026',
    time: '06:00 PM - 11:00 PM',
    prizePool: '$3,500',
    teamsLimit: 16,
    teamsRegistered: 13,
    entryFee: 150,
    badge: '3 Spots Remaining',
    location: 'Sunset Floodlit Arena, Phoenix',
  },
  {
    id: 't2',
    title: 'Midnight Box Cricket League S4',
    format: '6v6 Box Cricket · Super 8 Round Robin',
    date: 'Nov 14 - 15, 2026',
    time: '08:00 PM - 02:00 AM',
    prizePool: '$2,000',
    teamsLimit: 12,
    teamsRegistered: 9,
    entryFee: 120,
    badge: 'Filling Fast',
    location: 'Metro Box Cricket Dome, Scottsdale',
  },
  {
    id: 't3',
    title: 'Corporate Founders 5v5 Invitational',
    format: '5v5 Futsal · Group Stages & Trophy',
    date: 'Nov 21, 2026',
    time: '04:00 PM - 10:00 PM',
    prizePool: 'Trophy + Charity $5,000',
    teamsLimit: 16,
    teamsRegistered: 14,
    entryFee: 200,
    badge: '2 Spots Left',
    location: 'CyberPitch Grand Canopy, Austin',
  },
];

export const TournamentsSection: React.FC = () => {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [phone, setPhone] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <section className="w-full py-20 px-3 sm:px-6 lg:px-10 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
              <Trophy className="w-4 h-4" />
              <span>Competitive Leagues & Cups</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
              Upcoming Tournaments
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Assemble your squad, compete under stadium floodlights, and battle for trophies, cash prizes, and season ranking points.
            </p>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TOURNAMENTS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-[28px] bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-bold">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.badge}</span>
                  </span>

                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-medium">Prize Pool</div>
                    <div className="text-lg font-black text-amber-400">{t.prizePool}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-['Outfit']">
                  {t.title}
                </h3>

                <p className="text-xs text-slate-300 mb-4">{t.format}</p>

                <div className="space-y-2 mb-6 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.date} · {t.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.teamsRegistered} of {t.teamsLimit} Squads Locked</span>
                  </div>
                </div>

                {/* Registration Progress Bar */}
                <div className="w-full bg-slate-900 rounded-full h-2 mb-6 overflow-hidden">
                  <div
                    className="bg-amber-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(t.teamsRegistered / t.teamsLimit) * 100}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400">Team Entry</span>
                  <div className="text-base font-bold text-white">${t.entryFee}</div>
                </div>

                <button
                  onClick={() => {
                    setSelectedTournament(t);
                    setIsRegistered(false);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Register Squad</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      {selectedTournament && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg bg-slate-900 rounded-[32px] border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedTournament(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!isRegistered ? (
              <form onSubmit={handleRegisterSubmit}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Outfit']">
                      Squad Registration
                    </h3>
                    <p className="text-xs text-slate-400">{selectedTournament.title}</p>
                  </div>
                </div>

                <div className="space-y-3.5 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Team Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Phoenix Vipers FC"
                      value={teamName}
                      onChange={e => setTeamName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Captain / Manager Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Sterling"
                      value={captainName}
                      onChange={e => setCaptainName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number (for Tournament WhatsApp Schedule)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 mb-6 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Entry Fee:</span>
                  <span className="font-bold text-amber-400 text-sm">
                    ${selectedTournament.entryFee} Total (Split with team)
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-[0.99] cursor-pointer"
                >
                  Confirm Registration & Get Team Pass
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                  Squad Registered Successfully!
                </h3>
                <p className="text-xs text-slate-300 mb-6 max-w-sm mx-auto">
                  "{teamName || 'Your team'}" has been reserved for {selectedTournament.title}. Tournament bracket and schedule link sent to {phone || 'your phone'}.
                </p>
                <button
                  onClick={() => setSelectedTournament(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
