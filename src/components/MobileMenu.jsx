import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-kasacity-gold text-3xl"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md">
          <button
            onClick={close}
            className="absolute top-6 right-6 text-3xl text-kasacity-gold"
          >
            ✕
          </button>

          <nav className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-bold text-white">
            <a onClick={close} href="#home" className="hover:text-kasacity-gold">
              Home
            </a>
            <a onClick={close} href="#fixtures" className="hover:text-kasacity-gold">
              Fixtures
            </a>
            <a onClick={close} href="#squad" className="hover:text-kasacity-gold">
              Squad
            </a>
            <a onClick={close} href="#media" className="hover:text-kasacity-gold">
              Media
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
