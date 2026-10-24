import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Users,
  CreditCard,
  QrCode,
  Download,
  Share2,
  Sparkles,
  MapPin,
  ChevronRight,
  Timer,
  Video,
  Droplet,
} from 'lucide-react';
import { TurfArena, TimeSlot } from '../types';
import { INITIAL_SLOTS, BOOKING_ADDONS } from '../turfData';

interface SlotBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  arena: TurfArena;
}

const DATES = [
  { label: 'Today', date: 'Oct 23', day: 'Fri', full: 'Friday, Oct 23, 2026' },
  { label: 'Tomorrow', date: 'Oct 24', day: 'Sat', full: 'Saturday, Oct 24, 2026' },
  { label: 'Sun', date: 'Oct 25', day: 'Sun', full: 'Sunday, Oct 25, 2026' },
  { label: 'Mon', date: 'Oct 26', day: 'Mon', full: 'Monday, Oct 26, 2026' },
  { label: 'Tue', date: 'Oct 27', day: 'Tue', full: 'Tuesday, Oct 27, 2026' },
  { label: 'Wed', date: 'Oct 28', day: 'Wed', full: 'Wednesday, Oct 28, 2026' },
];

export const SlotBookingModal: React.FC<SlotBookingModalProps> = ({
  isOpen,
  onClose,
  arena,
}) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(INITIAL_SLOTS[7]); // default 7 PM prime
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['balls_bibs']);
  const [splitWithTeam, setSplitWithTeam] = useState(false);
  const [playerCount, setPlayerCount] = useState(10);
  
  // Checkout states
  const [step, setStep] = useState<'slots' | 'checkout' | 'confirmed'>('slots');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay' | 'applepay'>('gpay');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardName, setCardName] = useState('Alex Morgan');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const filteredSlots = INITIAL_SLOTS.filter(slot => {
    if (selectedPeriod === 'all') return true;
    return slot.period === selectedPeriod;
  });

  const slotCost = selectedSlot ? selectedSlot.price : arena.pricePerHour;
  const addonsCost = selectedAddons.reduce((sum, addonId) => {
    const item = BOOKING_ADDONS.find(a => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);
  const serviceFee = 3.5;
  const totalCost = slotCost + addonsCost + serviceFee;
  const perPersonCost = (totalCost / (playerCount || 1)).toFixed(2);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderAddonIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'timer':
        return <Timer className="w-5 h-5 text-amber-500" />;
      case 'video':
        return <Video className="w-5 h-5 text-amber-500" />;
      case 'droplet':
        return <Droplet className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBookingId(`AT-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep('confirmed');
    }, 1200);
  };

  const handleReset = () => {
    setStep('slots');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[28px] sm:rounded-[36px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#181a38] text-white flex items-center justify-center font-bold shadow-md">
              <Calendar className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {step === 'confirmed' ? 'Booking Confirmed!' : `Book Slot: ${arena.name}`}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{arena.address}</span>
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

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1 space-y-6">
          {step === 'slots' && (
            <>
              {/* Date Selection Strip */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Select Match Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {DATES.map((item, idx) => (
                    <button
                      key={item.date}
                      onClick={() => setSelectedDateIndex(idx)}
                      className={`p-2.5 rounded-2xl text-center border transition-all ${
                        selectedDateIndex === idx
                          ? 'bg-[#181a2f] text-white border-transparent shadow-md'
                          : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800'
                      }`}
                    >
                      <div className="text-[11px] font-medium opacity-80">{item.day}</div>
                      <div className="text-sm font-bold mt-0.5">{item.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Period Filter Tabs */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Available Time Slots ({DATES[selectedDateIndex].full})
                  </label>
                  <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
                    <button
                      onClick={() => setSelectedPeriod('all')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        selectedPeriod === 'all'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedPeriod('morning')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        selectedPeriod === 'morning'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Morning
                    </button>
                    <button
                      onClick={() => setSelectedPeriod('afternoon')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        selectedPeriod === 'afternoon'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Afternoon
                    </button>
                    <button
                      onClick={() => setSelectedPeriod('evening')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        selectedPeriod === 'evening'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Floodlit
                    </button>
                  </div>
                </div>

                {/* Slots Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {filteredSlots.map(slot => {
                    const isSelected = selectedSlot?.id === slot.id;
                    return (
                      <button
                        key={slot.id}
                        disabled={!slot.isAvailable}
                        onClick={() => setSelectedSlot(slot)}
                        className={`relative p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                          !slot.isAvailable
                            ? 'opacity-40 bg-slate-100 dark:bg-slate-800/20 border-dashed border-slate-300 dark:border-slate-800 cursor-not-allowed'
                            : isSelected
                            ? 'bg-slate-900 dark:bg-slate-800 border-amber-400 text-white shadow-md ring-2 ring-amber-400/30'
                            : 'bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold tabular-nums">
                            {slot.startTime}
                          </span>
                          <span
                            className={`text-xs font-semibold tabular-nums ${
                              isSelected
                                ? 'text-amber-300'
                                : 'text-amber-600 dark:text-amber-400'
                            }`}
                          >
                            ${slot.price}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                          <span>{slot.endTime}</span>
                          {slot.isFastFilling && slot.isAvailable && (
                            <span className="text-[10px] text-amber-500 dark:text-amber-400 font-medium">
                              Fast Filling
                            </span>
                          )}
                          {!slot.isAvailable && (
                            <span className="text-[10px] text-rose-500 font-medium">
                              Booked
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Add-ons & Equipment */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Match Gear & Experience Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BOOKING_ADDONS.map(addon => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-2xl border cursor-pointer flex items-center justify-between transition-colors ${
                          isChecked
                            ? 'bg-slate-100 dark:bg-slate-800/90 border-amber-400 dark:border-amber-400/80 shadow-xs'
                            : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-xs">
                            {renderAddonIcon(addon.icon)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                              {addon.name}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">
                              {addon.description}
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <div className="text-xs font-bold text-slate-900 dark:text-white tabular-nums">
                            +${addon.price}
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full mt-1 border flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-[#181a38] border-[#181a38] text-amber-400'
                                : 'border-slate-300 dark:border-slate-600'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3 h-3 text-amber-400" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Teammates Split Option */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Split Bill with Squad
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Auto-generate payment links for teammates
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {splitWithTeam && (
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-slate-500">Players:</span>
                      <select
                        value={playerCount}
                        onChange={e => setPlayerCount(Number(e.target.value))}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs font-semibold cursor-pointer"
                      >
                        <option value={4}>4 players</option>
                        <option value={8}>8 players</option>
                        <option value={10}>10 players</option>
                        <option value={12}>12 players</option>
                        <option value={14}>14 players</option>
                      </select>
                      <span className="font-bold text-amber-600 dark:text-amber-400">
                        ${perPersonCost} / player
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setSplitWithTeam(!splitWithTeam)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                      splitWithTeam ? 'bg-[#181a38]' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        splitWithTeam ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 'checkout' && (
            <div className="space-y-5">
              {/* Order Summary Strip */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>Slot: {DATES[selectedDateIndex].full} • {selectedSlot?.startTime} - {selectedSlot?.endTime}</span>
                  <span className="font-bold tabular-nums">${slotCost.toFixed(2)}</span>
                </div>
                {addonsCost > 0 && (
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span>Gear & Replay Add-ons</span>
                    <span className="font-bold tabular-nums">+${addonsCost.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>Facility & Floodlight Service Fee</span>
                  <span className="font-bold tabular-nums">${serviceFee.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm font-bold text-slate-900 dark:text-white">
                  <span>Total Amount</span>
                  <span className="text-amber-600 dark:text-amber-400 text-base tabular-nums">
                    ${totalCost.toFixed(2)}
                  </span>
                </div>
                {splitWithTeam && (
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 text-right">
                    (Or ${perPersonCost} each for {playerCount} teammates)
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Select Secure Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    onClick={() => setPaymentMethod('gpay')}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'gpay'
                        ? 'border-slate-900 bg-slate-100 dark:bg-slate-800 dark:border-white/40 text-slate-900 dark:text-white font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600'
                    }`}
                  >
                    <span className="text-xs font-semibold">Google Pay</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">1-Tap Fast</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('applepay')}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'applepay'
                        ? 'border-slate-900 bg-slate-100 dark:bg-slate-800 dark:border-white/40 text-slate-900 dark:text-white font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600'
                    }`}
                  >
                    <span className="text-xs font-semibold">Apple Pay</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">Touch ID</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-slate-900 bg-slate-100 dark:bg-slate-800 dark:border-white/40 text-slate-900 dark:text-white font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600'
                    }`}
                  >
                    <span className="text-xs font-semibold">Credit Card</span>
                    <span className="text-[10px] text-slate-400">Visa / MC</span>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <form onSubmit={handlePay} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={cardName}
                        onChange={e => setCardName(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={e => setCardNumber(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-slate-500 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          defaultValue="08/29"
                          className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-500 mb-1">
                          CVV Security Code
                        </label>
                        <input
                          type="password"
                          defaultValue="789"
                          className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-slate-900"
                          required
                        />
                      </div>
                    </div>
                  </form>
                )}
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>256-bit SSL encrypted bank-grade payment processing with instant slot guarantee.</span>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Slot Reserved & Confirmed!
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Your turf access pass is ready. Show this QR code at the arena gates.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="max-w-md mx-auto p-5 bg-gradient-to-br from-slate-900 to-[#181a38] text-white rounded-3xl shadow-xl text-left relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-amber-400 tracking-wider">
                      Official Turf Pass
                    </div>
                    <div className="text-base font-bold">{arena.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Pass ID</div>
                    <div className="text-xs font-mono font-bold">{bookingId}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Date</span>
                    <span className="font-semibold">{DATES[selectedDateIndex].full}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Time Slot</span>
                    <span className="font-semibold">{selectedSlot?.startTime} - {selectedSlot?.endTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Surface / Pitch</span>
                    <span className="font-semibold">{arena.surfaceType.slice(0, 20)}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Locker & Gate PIN</span>
                    <span className="font-mono font-bold text-amber-300">#8492</span>
                  </div>
                </div>

                {/* Simulated QR Code */}
                <div className="bg-white p-3 rounded-2xl flex items-center justify-between text-slate-900">
                  <div className="flex items-center gap-2.5">
                    <QrCode className="w-10 h-10 text-slate-900" />
                    <div className="text-left">
                      <div className="text-xs font-bold">Fast Gate Check-in</div>
                      <div className="text-[10px] text-slate-500">Scan at Turnstile A-3</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                    Paid ${totalCost.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => alert('Pass downloaded as PDF!')}
                  className="px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Apple/Google Pass</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-medium bg-[#181a2f] text-white hover:bg-slate-900 rounded-xl cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {step !== 'confirmed' && (
          <div className="p-4 sm:px-6 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
            {step === 'slots' ? (
              <>
                <div>
                  <div className="text-xs text-slate-400">Total Slot Price</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                    ${totalCost.toFixed(2)}
                    {splitWithTeam && (
                      <span className="text-xs font-normal text-amber-600 dark:text-amber-400 ml-1.5">
                        (${perPersonCost}/ea)
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setStep('checkout')}
                  disabled={!selectedSlot}
                  className="px-6 py-2.5 bg-[#181a2f] hover:bg-slate-900 text-white rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  <span>Proceed to Payment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setStep('slots')}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 cursor-pointer"
                >
                  Back to Slots
                </button>

                <button
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="px-7 py-2.5 bg-[#181a2f] hover:bg-slate-900 text-white rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isProcessing ? (
                    <span>Securing Slot...</span>
                  ) : (
                    <span>Confirm & Pay ${totalCost.toFixed(2)}</span>
                  )}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
