const brandBlue = "#0b4abf"; // Royal blue
const brandGold = "#d4af37"; // Gold accent

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background gradient and texture */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 500px at 80% -50%, rgba(11,74,191,0.25) 0%, transparent 60%), radial-gradient(800px 400px at -10% -30%, rgba(212,175,55,0.2) 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${brandBlue}10`, color: brandBlue }}>
              Official Real Madrid Supporters Club • Bangladesh
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Unidos por un Club. United by Passion.
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Bringing Madridistas across Bangladesh together to celebrate the spirit, history, and excellence of Real Madrid.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#membership"
                className="px-6 py-3 rounded-full text-white font-semibold shadow"
                style={{ background: brandBlue }}
              >
                Become a Member
              </a>
              <a
                href="#events"
                className="px-6 py-3 rounded-full font-semibold border"
                style={{ borderColor: `${brandBlue}55`, color: brandBlue }}
              >
                See Upcoming Events
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <img key={i} src={`https://images.unsplash.com/photo-1520975922215-c63c6baf1f5d?q=80&w=100&auto=format&fit=crop`} alt="Fans" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <p>Thousands of passionate members nationwide</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop"
                alt="Madridista fan unity"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-white/10" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/90" style={{ color: brandBlue }}>
                  Fan Gatherings • Match Screenings • Tifo Culture
                </span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border" style={{ borderColor: `${brandGold}55` }}>
              <div className="text-xs text-slate-600">Since</div>
              <div className="text-3xl font-black" style={{ color: brandBlue }}>2013</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
