import React, { useState } from 'react';
import {
  Star,
  Quote,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  name: string;
  role: string;
  turf: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'David Alvarez',
    role: 'Captain, Phoenix Wolves 7v7',
    turf: 'Sunset Floodlit Arena',
    avatar: '/src/assets/images/user_avatar_female_1792769046688.jpg',
    rating: 5,
    date: '2 days ago',
    comment:
      'Hands down the best artificial grass in Arizona. The cool-infill means zero rubber smell or ankle burn even after 90 minutes. The 4K automated match replay sent to our team WhatsApp had all our goal clips ready within 10 minutes of the final whistle.',
  },
  {
    id: 'r2',
    name: 'Sarah Chen',
    role: 'Organizer, Austin Box Cricket Club',
    turf: 'CyberPitch Grand Canopy',
    avatar: '/src/assets/images/user_avatar_female_1792769046688.jpg',
    rating: 5,
    date: '1 week ago',
    comment:
      'Booking was ridiculously fast. The team bill-splitting feature saved me an entire evening of collecting CashApp payments from 12 players. The floodlights are bright and completely anti-glare for high-ball catches.',
  },
  {
    id: 'r3',
    name: 'Tariq Mansoor',
    role: 'Padel Competitor & Coach',
    turf: 'Oasis Valley Padel Club',
    avatar: '/src/assets/images/user_avatar_female_1792769046688.jpg',
    rating: 5,
    date: '3 days ago',
    comment:
      'Mondo Supercourt synthetic surface provides consistent ball bounce and high traction. Keyless QR turnstile access means our early 6:30 AM sessions start right on the dot without waiting for staff.',
  },
];

const FAQS = [
  {
    question: 'What footwear is permitted on the artificial turf pitches?',
    answer:
      'Artificial Turf (AG) boots, molded firm ground (FG) studs, and flat turf trainers (TF) are strongly recommended. Metal studs, track spikes, and bladed metal cleats are strictly prohibited to protect the synthetic fibers and sub-base cushioning.',
  },
  {
    question: 'How does the contactless Turnstile QR Gate Pass work?',
    answer:
      'Immediately upon booking confirmation, you receive a dynamic QR code and pass link that can be added to Apple Wallet or Google Wallet. The arena perimeter gates activate 10 minutes prior to your slot time. Simply scan your phone screen at the turnstile reader for instant access.',
  },
  {
    question: 'What happens if our match is interrupted by heavy weather?',
    answer:
      'All our covered arenas (such as CyberPitch Dome) are 100% weatherproof. For open-air floodlit venues, if sustained severe thunderstorm or lightning is detected by our on-site weather sensors, your booking is automatically refunded or rescheduled with zero penalty fees.',
  },
  {
    question: 'Can we split the hourly fee among teammates?',
    answer:
      'Yes! During checkout, toggle "Split with Team". Choose how many players (up to 14) and our system generates a dedicated squad share link. Teammates can pay their individual $4-$8 share directly via Apple Pay, Google Pay, or Card.',
  },
  {
    question: 'Are balls, bibs, and water provided at the venue?',
    answer:
      'Each arena features complimentary chilled water bottle refilling stations. Match-quality FIFA balls, color-coded breathable bibs, and referee services can be pre-added during checkout or rented at the on-site concierge desk.',
  },
];

export const ReviewsAndFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-20 px-3 sm:px-6 lg:px-10 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto">
        {/* Testimonials Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.96 Rating Across 1,800+ Squad Matches</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
              Loved by Captains & Athletes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Hear directly from tournament winners, weekend football leagues, and box cricket squads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {REVIEWS.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-[28px] bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-6 italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    <p className="text-[11px] text-slate-400">{rev.role}</p>
                    <span className="text-[10px] text-amber-400 font-medium">
                      Verified at {rev.turf}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Block */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-slate-800">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Everything you need to know about slot reservations, gear requirements, and facility policies.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-slate-900 border border-slate-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-100">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
