import React from 'react';
import { X, Settings, Moon, Sun, Bell, Volume2, Shield } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: (dark: boolean) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  onToggleDarkMode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Preferences</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4 text-xs">
          {/* Theme Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-500" />}
              <span>Theme Appearance</span>
            </div>
            <button
              onClick={() => onToggleDarkMode(!isDarkMode)}
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold text-slate-800 dark:text-white cursor-pointer"
            >
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>

          {/* Slot Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <Bell className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>SMS Slot Reminders</span>
            </div>
            <span className="text-amber-500 font-bold">Enabled</span>
          </div>

          {/* Default Currency */}
          <div className="flex items-center justify-between">
            <span className="text-slate-700 dark:text-slate-200">Default Currency</span>
            <span className="font-semibold text-slate-900 dark:text-white">USD ($)</span>
          </div>

          {/* Floodlight Alert */}
          <div className="flex items-center justify-between">
            <span className="text-slate-700 dark:text-slate-200">Auto-split Bill</span>
            <span className="font-semibold text-slate-500">Manual</span>
          </div>
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
          <button
            onClick={onClose}
            className="w-full py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium cursor-pointer"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};
