import { Menu, X } from "lucide-react";
import { useState } from "react";

const brandBlue = "#0b4abf"; // Royal blue
const brandGold = "#d4af37"; // Gold accent

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "News", href: "#news" },
    { label: "Membership", href: "#membership" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="backdrop-blur-xl/ bg-white/70 border-b"
        style={{ borderColor: `${brandBlue}22` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ background: brandBlue }}
                aria-label="Peña Madridista Bangladesh"
              >
                <span className="text-white font-extrabold">PM</span>
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-slate-900 tracking-tight">Peña Madridista Bangladesh</div>
                <div className="text-xs text-slate-600">Official Real Madrid Supporters Club</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#membership"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white shadow"
                style={{ background: brandGold }}
              >
                Join Now
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border"
              style={{ borderColor: `${brandBlue}33`, color: brandBlue }}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t" style={{ borderColor: `${brandBlue}22` }}>
            <div className="px-4 py-4 space-y-2 bg-white/90">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#membership"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-center text-white"
                style={{ background: brandGold }}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
