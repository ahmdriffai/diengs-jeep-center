import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery2.jpeg",
  "/gallery2.jpeg",
  "/gallery2.jpeg",
  "/gallery2.jpeg",
  "/gallery2.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
  "/gallery6.jpeg",
];

const MAX_DISPLAY = 6;

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const displayedImages = images.slice(0, MAX_DISPLAY);
  const remaining = images.length - MAX_DISPLAY;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayedImages.map((src, index) => {
          const isLast = index === MAX_DISPLAY - 1 && remaining > 0;

          return (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {isLast && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xl font-semibold">
                  +{remaining}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
          <img
            src={images[lightboxIndex]}
            alt="Lightbox"
            className="max-w-3xl max-h-[80vh] rounded shadow mb-4"
          />
          <div className="flex gap-4">
            <button
              onClick={prevImage}
              disabled={lightboxIndex === 0}
              className="bg-white rounded-full shadow text-black px-4 py-2 disabled:opacity-50 hover:bg-primary hover:text-white"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              disabled={lightboxIndex === images.length - 1}
              className="bg-white rounded-full shadow text-black px-4 py-2 rounded disabled:opacity-50 hover:bg-primary hover:text-white"
            >
              <FaArrowRight size={20} />
            </button>
            <button
              onClick={closeLightbox}
              className="bg-black text-white px-4 py-2 rounded-full"
            >
              ✕
            </button>
          </div>
          <p className="text-white mt-2 text-sm">
            Gambar {lightboxIndex + 1} dari {images.length}
          </p>
        </div>
      )}
    </>
  );
};

export default Gallery;
