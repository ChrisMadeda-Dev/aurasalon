"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Inter, Playfair_Display } from "next/font/google";
import CallToAction from "../components/CallToAction";



// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

// Animation Variants
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// 1. Hero Component
const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 ${playfairDisplay.variable}`}
        >
          Where Nairobi's Beauty Blooms.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans text-stone-200 ${inter.variable}`}
        >
          Experience bespoke hair and beauty services that celebrate your unique
          essence. Welcome to our sanctuary of style.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a href="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group bg-[#D9A9A9] text-charcoal font-bold py-4 px-8 rounded-full flex items-center space-x-2 transition-colors duration-300 ease-in-out ${inter.variable}`}
            >
              <span>Book Your Escape</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

// 2. ServicesHighlight Component
const ServicesHighlight = () => {
  const services = [
    {
      image: "/images/s1.jpg",
      title: "Intricate Braiding",
      description:
        "From classic cornrows to modern knotless styles, our experts weave artistry into every braid.",
    },
    {
      image: "/images/s2.jpg",
      title: "Silk Press & Style",
      description:
        "Achieve lustrous, silky-smooth hair with our signature silk press, tailored for lasting health and shine.",
    },
    {
      image: "/images/s3.jpg",
      title: "Luxe Nail Art",
      description:
        "Transform your nails into a canvas of expression with our bespoke and trendy nail art designs.",
    },
  ];

  return (
    <div className="bg-[#FFF9F9] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`text-4xl md:text-5xl font-serif text-[#333333] ${playfairDisplay.variable}`}
        >
          Crafted For You
        </motion.h2>
        <motion.p
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className={`mt-2 text-lg text-stone-600 font-sans ${inter.variable}`}
        >
          Our Signature Services
        </motion.p>
      </div>

      <motion.div
        className="mt-16 max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-6">
              <h3
                className={`text-2xl font-serif text-[#333333] mb-2 ${playfairDisplay.variable}`}
              >
                {service.title}
              </h3>
              <p className={`text-stone-600 mb-4 font-sans ${inter.variable}`}>
                {service.description}
              </p>
              <a
                href="#"
                className={`font-bold text-[#D9A9A9] hover:text-[#C48A8A] transition-colors font-sans ${inter.variable}`}
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// 3. OurVibe Component
const OurVibe = () => {
  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-96 lg:h-full"
        >
          <img
            src="/images/bg2.jpg"
            alt="Salon Interior"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2
            className={`text-4xl md:text-5xl font-serif text-[#333333] ${playfairDisplay.variable}`}
          >
            Step Into Serenity.
          </h2>
          <p
            className={`mt-6 text-lg leading-8 text-stone-600 font-sans ${inter.variable}`}
          >
            Our salon is more than just a place for beauty treatments; it's a
            sanctuary designed for your ultimate comfort and relaxation. From
            the moment you walk in, you'll be enveloped in a calming atmosphere
            that blends modern luxury with warm African hospitality.
          </p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 w-24 h-2"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4 Q 25 0, 50 4 T 100 4"
                stroke="#D9A9A9"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// 4. Testimonials Component
const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "An absolute oasis in Nairobi! The attention to detail and the quality of service is unmatched. I left feeling like royalty.",
      name: "Amina K.",
    },
    {
      quote:
        "I've finally found my go-to salon. The stylists are true artists, and the vibe is so welcoming and chic. Highly recommend the silk press!",
      name: "Chidinma O.",
    },
    {
      quote:
        "The best braiding experience I've ever had. Professional, gentle, and the results were stunning. The Afro-Luxe decor is beautiful too.",
      name: "Fatima S.",
    },
    {
      quote:
        "From the moment I stepped in, I felt pampered. My nails have never looked this good. This is a gem in the heart of the city.",
      name: "Wanjiru M.",
    },
  ];

  // Duplicate the testimonials for a seamless loop
  const doubledTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <div className="bg-[#FFF9F9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`text-4xl md:text-5xl font-serif text-center text-[#333333] mb-12 ${playfairDisplay.variable}`}
        >
          Voices of Our Tribe
        </motion.h2>
      </div>

      <div className="w-full overflow-hidden relative">
        {/* Gradient fade on the edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FFF9F9] to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FFF9F9] to-transparent z-10"></div>

        <motion.div
          className="flex space-x-8"
          animate={{
            x: ["0%", `-${100 / 2}%`],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[400px] bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <FaQuoteLeft className="text-[#D9A9A9] text-3xl mx-auto mb-4" />
              <p
                className={`text-stone-600 italic font-sans mb-6 ${inter.variable}`}
              >
                "{testimonial.quote}"
              </p>
              <div className="flex justify-center text-[#D9A9A9] mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p
                className={`font-bold font-serif text-[#333333] ${playfairDisplay.variable}`}
              >
                {testimonial.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


// Main Page Component
export default function HomePage() {
  return (
    <div
      className={`bg-[#FFF9F9] ${inter.variable} ${playfairDisplay.variable}`}
    >
      <Hero />
      <ServicesHighlight />
      <OurVibe />
      <Testimonials />
      <CallToAction/>
    </div>
  );
}
