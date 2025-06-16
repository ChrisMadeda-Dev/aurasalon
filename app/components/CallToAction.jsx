"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  return (
    <div className="bg-[#8C4F6B] text-white mt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl mx-auto py-20 px-4 text-center"
      >
        <motion.h2
          variants={containerVariants}
          className="text-4xl md:text-5xl font-serif mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Ready for Your Transformation?
        </motion.h2>
        <motion.p
          variants={containerVariants}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Your journey to radiance is just a click away. Book your appointment
          today and let us pamper you.
        </motion.p>
        <motion.div variants={containerVariants}>
          <a href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FFFFFF",
                color: "#8C4F6B",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#8C4F6B] font-bold py-4 px-10 rounded-full transition-colors duration-300"
            >
              Book Now
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
