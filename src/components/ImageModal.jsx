import { X } from "lucide-react";

export default function ImageModal({ src, title, onClose }) {
  if (!src) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/80 backdrop-blur
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute -top-10 right-0
            text-white hover:text-kasacity-gold
            transition
          "
        >
          <X size={32} />
        </button>

        <img
          src={src}
          alt={title}
          className="w-full max-h-[85vh] object-contain rounded-xl"
        />

        {title && (
          <p className="mt-4 text-center text-white text-sm opacity-80">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
