import { useState } from "react";

export default function BlurImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`
        ${className}
        transition-all duration-500
        ${loaded ? "blur-0 scale-100" : "blur-md scale-105"}
      `}
    />
  );
}
