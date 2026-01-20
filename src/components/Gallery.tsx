"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Wedding photo booth moment",
    category: "Bodas",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    alt: "Corporate event with photo booth",
    category: "Corporativo",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    alt: "Birthday party celebration",
    category: "Cumpleaños",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&q=80",
    alt: "Friends at party photo booth",
    category: "Fiestas",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Wedding guests having fun",
    category: "Bodas",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
    alt: "Quinceañera celebration",
    category: "XV Años",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1529543544277-867aa58eb2a9?w=600&q=80",
    alt: "Corporate team building event",
    category: "Corporativo",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    alt: "Music festival booth",
    category: "Fiestas",
  },
];

const categories = ["Todos", "Bodas", "Corporativo", "Cumpleaños", "Fiestas", "XV Años"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Nuestra Galería
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Momentos que Hemos{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Capturado
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 500 eventos exitosos y miles de sonrisas capturadas. Mira lo
            que podemos crear para tu próximo evento.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-rose-500 to-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-rose-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
              <Image
                src={galleryImages.find((img) => img.id === selectedImage)?.src || ""}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
