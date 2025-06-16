"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Inter, Playfair_Display } from "next/font/google";

// Font configuration to match the theme
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={`bg-[#222222] text-[#EAEAEA] pt-20 pb-8 px-8 sm:px-12 lg:px-16 ${inter.variable} ${playfairDisplay.variable}`}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <h3 className={`font-serif text-3xl font-bold text-white`}>
              Aura Nairobi
            </h3>
            <p className="font-sans text-stone-300">
              A sanctuary of style, celebrating your unique essence through
              bespoke beauty.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#B8860B] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#B8860B] transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#B8860B] transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#B8860B] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold text-white tracking-wider">
              Operating Hours
            </h4>
            <ul className="space-y-2 font-sans text-stone-300">
              <li>
                <span className="font-semibold text-white">Mon - Fri:</span>{" "}
                9:00 AM - 7:00 PM
              </li>
              <li>
                <span className="font-semibold text-white">Saturday:</span> 9:00
                AM - 6:00 PM
              </li>
              <li>
                <span className="font-semibold text-white">Sunday:</span> Closed
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold text-white tracking-wider">
              Contact
            </h4>
            <address className="not-italic font-sans text-stone-300 space-y-3">
              <p>
                123 Riara Road, Lavington
                <br />
                Nairobi, Kenya
              </p>
              <p>
                <a
                  href="tel:+254712345678"
                  className="hover:text-[#B8860B] transition-colors duration-300"
                >
                  +254 712 345 678
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@auranairobi.com"
                  className="hover:text-[#B8860B] transition-colors duration-300"
                >
                  hello@auranairobi.com
                </a>
              </p>
            </address>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl text-stone-300 hover:text-white hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-2xl text-stone-300 hover:text-white hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl text-stone-300 hover:text-white hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="font-sans text-sm text-stone-400">
            © {currentYear} Aura Nairobi. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
