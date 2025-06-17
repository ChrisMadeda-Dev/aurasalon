"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";
import CallToAction from "../components/CallToAction";

// --- DATA ---
// To simulate a masonry layout, different classNames can be used to span rows/columns.
const galleryImages = [
  {
    id: 1,
    src: "/images/s6.jpg",
    category: "Creative Color",
    className: "row-span-2",
  },
  { id: 2, src: "/images/s2.jpg", category: "Intricate Braiding" },
  { id: 3, src: "/images/s3.jpg", category: "Bridal & Updos" },
  { id: 4, src: "/images/s5.jpg", category: "Nail Art" },
  { id: 5, src: "/images/n4.jpg", category: "Creative Color" },
  {
    id: 6,
    src: "/images/n3.jpg",
    category: "Nail Art",
    className: "col-span-2",
  },
];

const galleryCategories = [
  "All",
  "Creative Color",
  "Intricate Braiding",
  "Nail Art",
];

// 1. HERO COMPONENT
const GalleryHero = () => (
  <div className="relative h-[50vh] min-h-[350px] w-full flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/images/s1.jpg"
        alt="Artistic background for the gallery"
        className="w-full h-full object-cover brightness-50"
      />
    </div>
    <motion.div
      className="relative z-10 p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1
        className="text-4xl md:text-6xl font-serif font-bold text-stone-100"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Our Artistry on Display
      </h1>
    </motion.div>
  </div>
);

// 2. GALLERY FILTER COMPONENT
const GalleryFilter = ({ activeCategory, setActiveCategory }) => (
  <div className="bg-stone-50/80 backdrop-blur-sm py-6 sticky top-0 z-30 shadow-sm">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors duration-300 ${
              activeCategory === category
                ? "text-white"
                : "text-stone-600 hover:bg-stone-200"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeGalleryCategory"
                className="absolute inset-0 bg-[#B85C38] rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

// 3. IMAGE GRID COMPONENT
const ImageGrid = ({ images, setSelectedImage }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 [grid-auto-flow:dense]">
    <AnimatePresence>
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer ${
            image.className || ""
          }`}
          onClick={() => setSelectedImage(image)}
        >
          <motion.img
            src={image.src}
            alt={`Gallery image ${image.id} in category ${image.category}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

// 4. LIGHTBOX MODAL COMPONENT
const Lightbox = ({ selectedImage, setSelectedImage, images }) => {
  if (!selectedImage) return null;

  const currentIndex = images.findIndex((img) => img.id === selectedImage.id);

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white/70 hover:text-white z-50"
          onClick={() => setSelectedImage(null)}
        >
          <FaTimes size={30} />
        </button>

        {/* Prev Button */}
        <button
          className="absolute left-4 md:left-8 text-white/70 hover:text-white z-50 p-2 bg-black/20 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          className="absolute right-4 md:right-8 text-white/70 hover:text-white z-50 p-2 bg-black/20 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
        >
          <FaArrowRight size={24} />
        </button>

        <motion.img
          src={selectedImage.src}
          alt="Selected gallery image"
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
        />
      </motion.div>
    </AnimatePresence>
  );
};



// MAIN COMPONENT FOR THE GALLERY ROUTE
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-stone-50">
      <GalleryHero />
      <GalleryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-24">
        <ImageGrid
          images={filteredImages}
          setSelectedImage={setSelectedImage}
        />
      </div>

      <Lightbox
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        images={filteredImages}
      />
      <CallToAction/>
      
    </main>
  );
}
