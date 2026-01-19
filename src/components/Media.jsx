import { useState } from "react";
import { media } from "../data/media";
import ImageModal from "./ImageModal";
import BlurImage from "./BlurImage";

export default function Media() {
  const [activeImage, setActiveImage] = useState(null);
  const sortedMedia = [...media].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-kasacity-gold mb-12">
          Media Gallery
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedMedia.map((item) => (
          <div
            key={item.id}
            className="
            group relative
            rounded-2xl overflow-hidden
            bg-white/5 border border-white/10
            hover:border-kasacity-gold transition
            cursor-pointer
            "
            onClick={() =>
              item.type === "image" &&
              setActiveImage({ src: item.src, title: item.title })
            }
          >

              {item.type === "image" ? (
                <BlurImage
                 src={item.src}
                 alt={item.title}
                 className="w-full h-60 object-cover"
                />
              ) : (
                <iframe
                  src={item.src}
                  title={item.title}
                  className="w-full h-60"
                  allowFullScreen
                />
              )}

            <div
              className={`
              absolute inset-0
              bg-gradient-to-t from-black/80 via-black/40 to-transparent
              opacity-0 group-hover:opacity-100
              ransition duration-300
              flex items-end
              p-4
               ${item.type === "video" ? "pointer-events-none" : ""}
              `}
            >
                <p className="text-white text-sm font-semibold">
                  {item.title}
                  </p>
                  </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        src={activeImage?.src}
        title={activeImage?.title}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}
