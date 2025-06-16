"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Helper Components & Icons ---

// Replaced react-icons with inline SVGs to resolve import errors.
const IconMenu = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="30"
    width="30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

const IconClose = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="30"
    width="30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Replaced Next's usePathname hook with a state that reads from window.location
  const [pathname, setPathname] = useState("");

  // Reusable NavLink component defined inside Navbar to avoid module boundary issues.
  const NavLink = ({ href, children, closeMenu }) => {
    const isActive = pathname === href;

    return (
      <li className="relative group">
        <a
          href={href}
          onClick={closeMenu}
          className="block px-4 py-2 text-lg md:text-sm transition-colors duration-300"
        >
          {children}
          {/* Underline for active state */}
          {isActive ? (
            <motion.span
              layoutId="underline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-current"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          ) : (
            // Underline for hover state (only for non-active links)
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          )}
        </a>
      </li>
    );
  };

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to disable body scroll when mobile menu is open for better mobile UX
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Variants for Framer Motion animations
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4,
        staggerChildren: 0.08,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const navTextColor =
    scrolled || mobileMenuOpen ? "text-[#333]" : "text-[#FFF8F0]";

  return (
    <>
      <nav
        className={`
          font-sans fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "shadow-md backdrop-blur-lg bg-[rgba(255,249,249,0.7)]"
              : "bg-black"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className={`font-serif text-2xl font-bold tracking-wider transition-colors duration-300 ${navTextColor}`}
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Aura Nairobi
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul
                className={`ml-10 flex items-baseline space-x-4 ${navTextColor}`}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    href={link.href}
                    closeMenu={() => {}}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D9A9A9] text-[#333] font-bold py-2 px-6 rounded-full transition-shadow duration-300 shadow-sm hover:shadow-lg hover:bg-[#C48A8A]"
                >
                  Book Now
                </motion.button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`z-50 ${navTextColor} transition-colors duration-300`}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <IconClose />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <IconMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#2d2d2d] md:hidden"
          >
            <div className="h-full flex flex-col items-center justify-center pt-20">
              <motion.ul
                className="flex flex-col items-center space-y-6 text-[#FFF8F0]"
                variants={menuVariants}
              >
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={menuItemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl tracking-wider ${
                        pathname === link.href ? "text-[#D9A9A9]" : ""
                      }`}
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div className="mt-12" variants={menuItemVariants}>
                <a href="/contact">
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#D9A9A9] text-[#333] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#C48A8A]"
                  >
                    Book Now
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
