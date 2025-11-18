import { Megaphone, Newspaper } from "lucide-react";

const brandBlue = "#0b4abf";

const newsItems = [
  {
    title: "El Clásico Screening — Dhaka",
    excerpt:
      "Massive turnout as Madridistas filled the hall to cheer on the team. Highlights, photos, and post-match reactions inside.",
    tag: "Event Recap",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Charity Drive with Local Communities",
    excerpt:
      "Beyond football — we organized a fundraiser supporting education and healthcare initiatives.",
    tag: "Community",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Membership 2025 Now Open",
    excerpt:
      "Renewals and new registrations are now live with exclusive perks for members across Bangladesh.",
    tag: "Announcement",
    image:
      "https://images.unsplash.com/photo-1521417531039-94f4779b0f25?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Latest News</h2>
          <div className="hidden sm:flex items-center gap-2 text-sm" style={{ color: brandBlue }}>
            <Megaphone size={18} />
            <span>Official Updates</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <article key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-white/90" style={{ color: brandBlue }}>
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-900 group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{item.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: brandBlue }}>
                  <Newspaper size={16} /> Read more
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
