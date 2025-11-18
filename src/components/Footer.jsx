const brandBlue = "#0b4abf";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style={{ background: brandBlue }}>
                <span className="text-white font-extrabold">PM</span>
              </div>
              <div className="font-extrabold text-slate-900">Peña Madridista Bangladesh</div>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-md">
              Uniting Madridistas across Bangladesh with passion, respect, and the spirit of Real Madrid.
            </p>
          </div>

          <div>
            <div className="font-semibold text-slate-900 mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#news" className="hover:text-slate-900">News</a></li>
              <li><a href="#membership" className="hover:text-slate-900">Membership</a></li>
              <li><a href="#events" className="hover:text-slate-900">Events</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-slate-900 mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Email: info@pm-bd.org</li>
              <li>Phone: +880 1XXX-XXXXXX</li>
              <li>Facebook: /penamadridistabd</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-xs text-slate-500 flex items-center justify-between">
          <p>© {year} Peña Madridista Bangladesh. All rights reserved.</p>
          <p>Made with orgullo madridista.</p>
        </div>
      </div>
    </footer>
  );
}
