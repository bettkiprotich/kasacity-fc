import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", href: "#home" },
    { name: "Fixtures", href: "#fixtures" },
    { name: "Media", href: "#media" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-extrabold text-kasacity-gold">
          KasaCity FC
        </h1>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-900 dark:text-white hover:text-kasacity-gold transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-gray-300 dark:border-white/20 
                       hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-kasacity-gold" />
            ) : (
              <Moon size={20} className="text-kasacity-gold" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-900 dark:text-white hover:text-kasacity-gold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
