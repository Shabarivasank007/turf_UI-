import React from 'react';
import { X, Bell, CheckCircle2, Trophy, Clock } from 'lucide-react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const NOTIFICATIONS = [
    {
      id: 1,
      icon: <Clock className="w-4 h-4 text-amber-500" />,
      title: 'Slot Booking Reminder',
      description: 'Your 7:00 PM slot tonight at Lunar Oasis Arena is active. Locker PIN is #8492.',
      time: '15m ago',
      unread: true,
    },
    {
      id: 2,
      icon: <Trophy className="w-4 h-4 text-amber-500" />,
      title: 'Weekend 7v7 Champions Cup',
      description: 'Registration opens for Sunday 8-team knockout trophy. Prize pool $1,500.',
      time: '2h ago',
      unread: true,
    },
    {
      id: 3,
      icon: <CheckCircle2 className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
      title: 'Payment Cleared',
      description: 'Receipt for $58.50 has been sent to your email with high-definition match replay pass.',
      time: '1d ago',
      unread: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Notifications</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 space-y-2.5">
          {NOTIFICATIONS.map(n => (
            <div
              key={n.id}
              className={`p-3 rounded-2xl border transition-colors flex items-start gap-3 ${
                n.unread
                  ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-900/60'
                  : 'bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-800'
              }`}
            >
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 shadow-xs shrink-0 mt-0.5">
                {n.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {n.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 shrink-0">{n.time}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  {n.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="text-xs font-semibold text-slate-900 dark:text-amber-400 hover:underline cursor-pointer"
          >
            Browse New Weekend Slots
          </button>
        </div>
      </div>
    </div>
  );
};
