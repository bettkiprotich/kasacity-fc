import { Facebook, Instagram, Twitter } from "lucide-react";
import solmartLogo from "../assets/solmartLogo.png";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 text-gray-800 dark:text-white py-16 px-6 transition-colors"
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Club Info */}
        <div>
          <h3 className="text-2xl font-extrabold text-kasacity-gold mb-4">
            KasaCity FC
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Passion. Discipline. Community.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:outline-none focus:border-kasacity-gold"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:outline-none focus:border-kasacity-gold"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:outline-none focus:border-kasacity-gold"
            />

            <button
              type="submit"
              className="w-full bg-kasacity-gold text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-kasacity-gold">
              <Facebook />
            </a>
            <a href="#" className="hover:text-kasacity-gold">
              <Instagram />
            </a>
            <a href="#" className="hover:text-kasacity-gold">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* Sponsor */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <span className="text-xs tracking-wide text-gray-500 dark:text-white/50">
          Proudly sponsored by
        </span>
        <img
          src={solmartLogo}
          alt="Solmart Sponsor"
          className="h-12 opacity-70 hover:opacity-100 transition"
        />
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} KasaCity FC. All rights reserved.
      </p>
    </footer>
  );
}
