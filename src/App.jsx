import Navbar from "./components/Navbar";
import Fixtures from "./components/Fixtures";
import Squad from "./components/Squad";
import Media from "./components/Media";
import logo from "./assets/kasacity-logo.png";
import solmartLogo from "./assets/solmartLogo.png";
import Footer from "./components/Footer";
import About from "./components/About";


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HOME */}
<section
  id="home"
  className="
    min-h-screen flex flex-col items-center justify-center text-center
    px-4 pt-28
    bg-white dark:bg-black
    transition-colors
  "
>
  <img
    src={logo}
    alt="KasaCity FC Logo"
    className="w-48 sm:w-64 mb-6"
  />

  <h1 className="text-5xl sm:text-7xl font-extrabold text-kasacity-gold">
    KasaCity FC
  </h1>

  <p className="mt-4 text-lg text-gray-700 dark:text-white/70 max-w-xl">
    One City. One Spirit.
  </p>
  <div className="mt-8 flex flex-col items-center opacity-80">
  <span className="text-sm tracking-wide text-gray-500 dark:text-white/60">
    Proudly sponsored by
  </span>
  <img
    src={solmartLogo}
    alt="Solmart Sponsor"
    className="mt-5 h-14 object-contain"
  />
</div>

  <a
    href="#fixtures"
    className="
      mt-8 px-8 py-3 rounded-full
      bg-gradient-to-r from-kasacity-sunset to-kasacity-gold
      text-black font-bold
      hover:scale-105 transition
    "
  >
    View Fixtures
  </a>
</section>

      {/* FIXTURES */}
      <section id="fixtures">
        <Fixtures />
      </section>

      {/* SQUAD */}
      <section id="squad">
        <Squad />
      </section>

      {/* MEDIA */}
      <section id="media">
        <Media />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>
    

      {/* FOOTER */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
  
}
