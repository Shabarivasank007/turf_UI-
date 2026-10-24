import React from 'react';
import {
  Home,
  Search,
  Calendar,
  Star,
  User,
} from 'lucide-react';

interface SidebarDockProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: (dark: boolean) => void;
  unreadCount?: number;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenChat: () => void;
  onOpenSettings: () => void;
}

export const SidebarDock: React.FC<SidebarDockProps> = ({
  activeTab,
  onTabChange,
  isDarkMode,
  onToggleDarkMode,
  unreadCount = 2,
  onOpenSearch,
  onOpenNotifications,
  onOpenChat,
  onOpenSettings,
}) => {
  return (
    <aside
      aria-label="Sidebar Navigation"
      className="absolute left-3 sm:left-4 md:left-6 top-[48%] -translate-y-1/2 z-30 flex flex-col items-center pointer-events-auto"
    >
      {/* Single Sleek White Capsule matching reference image */}
      <div className="flex flex-col items-center gap-2 p-2 bg-white rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.16)] border border-slate-100 transition-colors">
        {/* 1. Home - Active dark green circular button */}
        <button
          onClick={() => onTabChange('home')}
          aria-label="Home"
          className="w-10 h-10 rounded-full bg-[#18392b] text-white flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Home className="w-4.5 h-4.5 stroke-[2.2]" />
        </button>

        {/* 2. Search */}
        <button
          onClick={onOpenSearch}
          aria-label="Search Turfs"
          className="w-10 h-10 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
        >
          <Search className="w-4.5 h-4.5 stroke-[2]" />
        </button>

        {/* 3. Calendar / Slots */}
        <button
          onClick={onOpenNotifications}
          aria-label="Turf Booking Calendar"
          className="w-10 h-10 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
        >
          <Calendar className="w-4.5 h-4.5 stroke-[2]" />
        </button>

        {/* 4. Favorites / Star */}
        <button
          onClick={() => onTabChange('favorites')}
          aria-label="Saved Turfs"
          className="w-10 h-10 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
        >
          <Star className="w-4.5 h-4.5 stroke-[2]" />
        </button>

        {/* 5. User Profile */}
        <button
          onClick={onOpenSettings}
          aria-label="User Profile & Settings"
          className="w-10 h-10 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
        >
          <User className="w-4.5 h-4.5 stroke-[2]" />
        </button>
      </div>
    </aside>
  );
};
