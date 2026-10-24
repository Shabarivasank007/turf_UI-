import React, { useState } from 'react';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Share2,
  Download,
  Building,
  Check,
} from 'lucide-react';

interface PropertyDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'buy' | 'rent' | 'details';
}

export const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({
  isOpen,
  onClose,
  mode = 'details',
}) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM');
  const [inquiryType, setInquiryType] = useState<'tour' | 'offer' | 'lease'>(
    mode === 'buy' ? 'offer' : mode === 'rent' ? 'lease' : 'tour'
  );
  const [fullName, setFullName] = useState('Jordan Vance');
  const [email, setEmail] = useState('jordan.vance@example.com');
  const [phone, setPhone] = useState('+1 (555) 382-9014');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[32px] sm:rounded-[36px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#181a38] text-white flex items-center justify-center font-bold shadow-md">
              <Building className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Lunar Oasis Villa
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>1874 Forest Haven Rd, Asheville, NC</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1 space-y-6">
          {!isSubmitted ? (
            <>
              {/* Photo Banner */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/8] shadow-md">
                <img
                  src="/assets/aistudio/image_fdfcc432.png"
                  alt="Sports Turf Arena"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  $300,000 / $12,500 mo
                </div>
              </div>

              {/* Action Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-semibold">
                <button
                  onClick={() => setInquiryType('tour')}
                  className={`py-2 rounded-xl transition-all cursor-pointer ${
                    inquiryType === 'tour'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Schedule Private Tour
                </button>
                <button
                  onClick={() => setInquiryType('offer')}
                  className={`py-2 rounded-xl transition-all cursor-pointer ${
                    inquiryType === 'offer'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Buy / Make Offer
                </button>
                <button
                  onClick={() => setInquiryType('lease')}
                  className={`py-2 rounded-xl transition-all cursor-pointer ${
                    inquiryType === 'lease'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Rent / Lease Terms
                </button>
              </div>

              {/* Specs & Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Living Area</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">695m²</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Desert Yard</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">126m²</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Bedrooms</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">3 Suites</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Bathrooms</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">2 Baths</div>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Preferred Tour / Inquiry Date
                    </label>
                    <select
                      value={selectedDate}
                      onChange={e => setSelectedDate(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900 cursor-pointer"
                    >
                      <option>Tomorrow, 2:00 PM</option>
                      <option>Saturday, 11:00 AM (Sunset Hour)</option>
                      <option>Sunday, 4:00 PM</option>
                      <option>Next Tuesday, 10:00 AM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#181a2f] hover:bg-slate-900 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer mt-2"
                >
                  {inquiryType === 'tour'
                    ? 'Confirm VIP Architecture Tour'
                    : inquiryType === 'offer'
                    ? 'Submit Purchase Offer ($300,000)'
                    : 'Submit Lease Application ($12,500/mo)'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Inquiry Confirmed!
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                  Our premier architectural curator has received your request for <strong>Lunar Oasis Villa</strong>. You will receive private access details and gate pass via email.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl max-w-sm mx-auto text-left text-xs space-y-1.5 border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Appointment</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Curator Contact</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Elena Rostova</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Reference PIN</span>
                  <span className="font-mono font-bold text-amber-600">#LOV-9241</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#181a2f] text-white hover:bg-slate-900 rounded-full text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
