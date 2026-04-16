"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";

// TODO: Replace all picsum placeholder images with real Mirzavideo portfolio images.
// Each item needs: src (URL or path), alt text, category ("video" | "photo"), and aspect ratio.
const allImages = [
  { id: 1, src: "https://picsum.photos/seed/mv01/800/1200", alt: "Wedding ceremony highlight film", category: "video", aspect: "3/4" },
  { id: 2, src: "https://picsum.photos/seed/mv02/1200/800", alt: "Corporate brand shoot", category: "photo", aspect: "3/2" },
  { id: 3, src: "https://picsum.photos/seed/mv03/900/1100", alt: "Music video production — artist portrait", category: "video", aspect: "9/11" },
  { id: 4, src: "https://picsum.photos/seed/mv04/800/800", alt: "Editorial portrait session", category: "photo", aspect: "1/1" },
  { id: 5, src: "https://picsum.photos/seed/mv05/1100/700", alt: "Event documentary — product launch", category: "video", aspect: "11/7" },
  { id: 6, src: "https://picsum.photos/seed/mv06/800/1000", alt: "Wedding details — rings and florals", category: "photo", aspect: "4/5" },
  { id: 7, src: "https://picsum.photos/seed/mv07/900/600", alt: "Aerial cinematography — venue exterior", category: "video", aspect: "3/2" },
  { id: 8, src: "https://picsum.photos/seed/mv08/700/1050", alt: "Couples portrait session", category: "photo", aspect: "2/3" },
  { id: 9, src: "https://picsum.photos/seed/mv09/1000/800", alt: "Short film production still", category: "video", aspect: "5/4" },
  { id: 10, src: "https://picsum.photos/seed/mv10/800/1200", alt: "Fashion editorial photography", category: "photo", aspect: "2/3" },
  { id: 11, src: "https://picsum.photos/seed/mv11/1200/900", alt: "Live event coverage — corporate conference", category: "video", aspect: "4/3" },
  { id: 12, src: "https://picsum.photos/seed/mv12/750/1100", alt: "Wedding first look moment", category: "photo", aspect: "3/4" },
  { id: 13, src: "https://picsum.photos/seed/mv13/1100/800", alt: "Brand video — product showcase", category: "video", aspect: "11/8" },
  { id: 14, src: "https://picsum.photos/seed/mv14/800/600", alt: "Landscape photography — Midlands countryside", category: "photo", aspect: "4/3" },
  { id: 15, src: "https://picsum.photos/seed/mv15/900/1300", alt: "Music video — performance footage", category: "video", aspect: "9/13" },
  { id: 16, src: "https://picsum.photos/seed/mv16/1000/700", alt: "Documentary wedding film — speeches", category: "photo", aspect: "10/7" },
];

type Filter = "all" | "video" | "photo";

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered = filter === "all" ? allImages : allImages.filter((img) => img.category === filter);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <>
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
      )}

      <div className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-24">
        {/* Page header */}
        <div className="mb-12 md:mb-16">
          <h1
            className="font-serif text-ink leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}
          >
            Work
          </h1>
        </div>

        {/* Filter row */}
        <div className="flex gap-8 mb-12 border-b border-ink pb-4">
          {(["all", "video", "photo"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-sans text-xs tracking-widest uppercase transition-all duration-200 pb-1 relative ${
                filter === f ? "text-ink" : "text-grey hover:text-ink"
              }`}
            >
              {f === "all" ? "All" : f === "video" ? "Video" : "Photo"}
              {filter === f && (
                <span className="absolute bottom-[-17px] left-0 right-0 h-px bg-ink" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden bg-grey-light"
              onClick={() => openLightbox(img.src, img.alt)}
            >
              <div style={{ aspectRatio: img.aspect }} className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-sans text-xs text-paper tracking-widest uppercase">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
