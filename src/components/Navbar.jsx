import logo from "../assets/kasacity-logo.png";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="KasaCity FC Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-kasacity-gold">
            KasaCity FC
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
          <a href="#home" className="hover:text-kasacity-gold">Home</a>
          <a href="#fixtures" className="hover:text-kasacity-gold">Fixtures</a>
          <a href="#squad" className="hover:text-kasacity-gold">Squad</a>
          <a href="#media" className="hover:text-kasacity-gold">Media</a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
