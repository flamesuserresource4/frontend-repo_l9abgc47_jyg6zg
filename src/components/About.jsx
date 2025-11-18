const brandBlue = "#0b4abf";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              About Us
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Peña Madridista Bangladesh is the official Real Madrid Supporters Club of Bangladesh, recognized and registered with Real Madrid C.F. We are a community of passionate Madridistas dedicated to celebrating the club's legacy through watch parties, community initiatives, and cultural events.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Our mission is to unite fans from all corners of the country, foster a culture of respect and sportsmanship, and create unforgettable experiences around every matchday.
            </p>
            <div className="mt-6 flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-black" style={{ color: brandBlue }}>10+ yrs</div>
                <div className="text-sm text-slate-600">Officially Recognized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black" style={{ color: brandBlue }}>30+ cities</div>
                <div className="text-sm text-slate-600">Nationwide Presence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black" style={{ color: brandBlue }}>1000s</div>
                <div className="text-sm text-slate-600">Active Members</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1664192864246-5135acdefaef?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRjaGRheXxlbnwwfDB8fHwxNzYzNDcyMDEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Matchday" className="rounded-xl h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop" alt="Community" className="rounded-xl h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=800&auto=format&fit=crop" alt="Celebration" className="rounded-xl h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUb2dldGhlcm5lc3N8ZW58MHwwfHx8MTc2MzQ3MjAxMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Togetherness" className="rounded-xl h-48 object-cover" />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl" style={{ background: `${brandBlue}22` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
