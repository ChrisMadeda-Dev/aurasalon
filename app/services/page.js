"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CallToAction from "../components/CallToAction";

// --- Helper Components & Icons ---
// Inline SVG to replace react-icons dependency
const ArrowRightIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
  </svg>
);

// --- DATA ---
// Service data organized by category. Prices are in Kenyan Shillings (KES).
const servicesData = {
  "Hair Styling": [
    {
      name: "Signature Silk Press",
      description:
        "A luxurious press for a silky, bone-straight finish on natural hair.",
      duration: "Approx. 2 hours",
      price: "From KES 6,500",
    },
    {
      name: "Elegant Updo",
      description:
        "A sophisticated style for special occasions, tailored to your look.",
      duration: "Approx. 1.5 hours",
      price: "From KES 5,000",
    },
    {
      name: "Defined Twist-Out",
      description:
        "Achieve beautifully defined curls with our expert twist-out technique.",
      duration: "Approx. 2 hours",
      price: "From KES 4,500",
    },
    {
      name: "Luxury Wig Install & Style",
      description:
        "Seamless installation and custom styling for a flawless, natural look.",
      duration: "Approx. 2.5 hours",
      price: "From KES 7,000",
    },
  ],
  "Color & Highlights": [
    {
      name: "Full Head Color",
      description:
        "A complete color transformation using premium, nourishing formulas.",
      duration: "Approx. 3 hours",
      price: "From KES 8,500",
    },
    {
      name: "Balayage & Highlights",
      description:
        "Hand-painted highlights for a natural, sun-kissed dimension.",
      duration: "Approx. 4 hours",
      price: "From KES 12,000",
    },
    {
      name: "Root Touch-Up",
      description: "Seamlessly blend new growth with your existing color.",
      duration: "Approx. 1.5 hours",
      price: "From KES 4,000",
    },
    {
      name: "Creative Color",
      description:
        "Express yourself with bold, vibrant, or pastel fashion colors.",
      duration: "Consultation required",
      price: "By Consultation",
    },
  ],
  "Restorative Treatments": [
    {
      name: "Deep Hydration Steam Therapy",
      description:
        "Intensive moisture treatment using steam to open cuticles for deep penetration.",
      duration: "Approx. 1 hour",
      price: "From KES 4,500",
    },
    {
      name: "Protein & Bond Repair",
      description: "Strengthen and rebuild damaged hair from the inside out.",
      duration: "Approx. 1.5 hours",
      price: "From KES 5,500",
    },
    {
      name: "Scalp Detox & Massage",
      description:
        "A clarifying and stimulating treatment to promote healthy hair growth.",
      duration: "Approx. 45 mins",
      price: "From KES 3,500",
    },
  ],
  "Nails & Beauty": [
    {
      name: "Luxe Manicure",
      description:
        "Includes shaping, cuticle care, massage, and a polish of your choice.",
      duration: "Approx. 1 hour",
      price: "From KES 2,500",
    },
    {
      name: "Gel Pedicure",
      description: "A long-lasting pedicure with a flawless gel polish finish.",
      duration: "Approx. 1.5 hours",
      price: "From KES 3,500",
    },
    {
      name: "Eyebrow Shaping & Tint",
      description: "Define your brows with expert shaping and a custom tint.",
      duration: "Approx. 30 mins",
      price: "From KES 2,000",
    },
  ],
};
const serviceCategories = Object.keys(servicesData);

// 1. HERO COMPONENT
const ServicesHero = () => (
  <div className="relative h-[40vh] md:h-[60vh]  w-full flex items-center justify-center text-center text-white overflow-hidden">
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="absolute inset-0 z-0"
    >
      <img
        src="/images/s1.jpg"
        alt="Stylist focusing on crafting a beautiful hairstyle"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </motion.div>
    <motion.div
      className="relative z-10 p-4 max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-100"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Bespoke Beauty, Crafted For You.
      </h1>
    </motion.div>
  </div>
);

// 2. SERVICE MENU COMPONENT
const ServiceMenu = ({ activeCategory, setActiveCategory }) => (
  <div className="bg-stone-50 py-8 sticky top-0 z-20 shadow-sm">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {serviceCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors duration-300
              ${
                activeCategory === category
                  ? "text-white"
                  : "text-stone-600 hover:bg-stone-200"
              }
            `}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
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

// 3. SERVICE LIST COMPONENT
const ServiceList = ({ services }) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <AnimatePresence mode="wait">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md border border-stone-100 flex flex-col"
          >
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold font-serif text-stone-800">
                  {service.name}
                </h3>
                <p className="text-lg font-semibold text-[#B85C38] whitespace-nowrap">
                  {service.price}
                </p>
              </div>
              <p className="text-stone-600 mb-3">{service.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-stone-500">{service.duration}</p>
              <button className="bg-stone-800 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-stone-900 transition-colors">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

// 4. FEATURED SPECIAL COMPONENT
const FeaturedSpecial = () => (
  <div className="bg-[#fdf8f0] my-20 md:my-32 py-16">
    <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-1">
        <img
          src="/images/s1.jpg"
          alt="Elegant bridal hair and makeup"
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
      <div className="md:col-span-2">
        <h4 className="text-sm font-bold uppercase text-[#B85C38] tracking-widest mb-2">
          Signature Package
        </h4>
        <h3
          className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          The Complete Bridal Package
        </h3>
        <p className="text-stone-600 mb-6 max-w-xl">
          Look and feel radiant on your special day. Our complete package
          includes a detailed hair and makeup trial, day-of styling for the
          bride, and optional services for the bridal party. We create a serene,
          luxurious experience, ensuring every detail is perfect.
        </p>
        <button className="bg-[#B85C38] text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center gap-2 shadow-lg hover:bg-[#a14f31] transition-colors duration-300">
          Enquire Now
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  </div>
);



// MAIN COMPONENT FOR THE SERVICES ROUTE
export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  // useMemo will prevent re-calculating the filtered list on every render
  // unless activeCategory or servicesData changes.
  const filteredServices = useMemo(
    () => servicesData[activeCategory],
    [activeCategory]
  );

  return (
    <main className="bg-stone-50">
      <ServicesHero />
      <ServiceMenu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-24">
        <ServiceList services={filteredServices} />
      </div>

      <FeaturedSpecial />
      <CallToAction/>
    </main>
  );
}
