import { CalendarDays, MapPin } from "lucide-react";

const brandBlue = "#0b4abf";

const events = [
  { date: "Dec 15, 2025", title: "UCL Match Screening — Round of 16", location: "Dhaka", detail: "Big screen, chants, and raffle prizes." },
  { date: "Jan 5, 2026", title: "New Year Community Meetup", location: "Chattogram", detail: "Year plan, chapter intros, and merch pop-up." },
  { date: "Feb 10, 2026", title: "Charity Futsal Tournament", location: "Sylhet", detail: "5v5 futsal with proceeds to local NGOs." },
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Upcoming Events</h2>
          <div className="hidden sm:flex items-center gap-2 text-sm" style={{ color: brandBlue }}>
            <CalendarDays size={18} />
            <span>Join the experience</span>
          </div>
        </div>

        <div className="grid gap-4">
          {events.map((e) => (
            <div key={e.title} className="bg-white border rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-bold inline-block px-2 py-1 rounded-full mr-2" style={{ background: `${brandBlue}10`, color: brandBlue }}>{e.date}</div>
                <h3 className="mt-2 font-semibold text-lg text-slate-900">{e.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{e.detail}</p>
              </div>
              <div className="mt-3 sm:mt-0 inline-flex items-center gap-2 text-slate-700">
                <MapPin size={16} />
                <span>{e.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
