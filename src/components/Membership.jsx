import { ShieldCheck, Users, Ticket, Trophy, Crown, Star } from "lucide-react";

const brandBlue = "#0b4abf";
const brandGold = "#d4af37";

const perks = [
  { icon: ShieldCheck, title: "Official Recognition", desc: "Membership ID and official status from Real Madrid C.F." },
  { icon: Users, title: "Community", desc: "Access to exclusive match screenings and meetups across cities" },
  { icon: Ticket, title: "Priority Access", desc: "Early invites to events, tours, and limited-seat gatherings" },
  { icon: Trophy, title: "Exclusive Merch", desc: "Member-only drops and discounts on club merchandise" },
  { icon: Crown, title: "Leadership", desc: "Opportunities to lead city chapters and initiatives" },
  { icon: Star, title: "Rewards", desc: "Loyalty perks for active participation" },
];

export default function Membership() {
  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Membership Benefits</h2>
          <p className="mt-3 text-slate-600">Join a nationwide network of Madridistas and elevate your matchday experience.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${brandBlue}10`, color: brandBlue }}>
                <Icon />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full" style={{ background: brandGold }} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold shadow" style={{ background: brandBlue }}>
            Apply for Membership
          </a>
        </div>
      </div>
    </section>
  );
}
