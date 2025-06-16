"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

// 1. CONTACT CARD COMPONENT
const ContactCard = ({ icon, title, text, buttonText, href }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg border border-stone-100 flex flex-col items-start h-full"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }}
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="bg-[#B85C38]/10 p-3 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold font-serif text-stone-800">{title}</h3>
    </div>
    <p className="text-stone-600 mb-4 flex-grow">{text}</p>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-stone-800 text-white font-bold py-2 px-5 rounded-full text-sm inline-flex items-center gap-2 hover:bg-stone-900 transition-colors"
    >
      {buttonText} <FaArrowRight />
    </a>
  </motion.div>
);

// 2. OPERATING HOURS COMPONENT
const OperatingHours = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-stone-100 h-full">
    <h3
      className="text-2xl font-serif font-bold text-stone-800 mb-4"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      Operating Hours
    </h3>
    <ul className="space-y-2 text-stone-600">
      <li>
        <span className="font-semibold">Tuesday - Friday:</span> 9:00 AM - 7:00
        PM
      </li>
      <li>
        <span className="font-semibold">Saturday:</span> 9:00 AM - 6:00 PM
      </li>
      <li>
        <span className="font-semibold">Sunday & Monday:</span> Closed
      </li>
    </ul>
  </div>
);

// 3. GOOGLE MAP COMPONENT
const GoogleMap = () => (
  <div className="rounded-lg overflow-hidden shadow-xl w-full h-full min-h-[400px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586812891!2d36.70730843701962!3d-1.302860102196813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1676543210987!5m2!1sen!2ske"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location of our salon in Nairobi"
    ></iframe>
  </div>
);

// MAIN COMPONENT FOR THE CONTACT ROUTE
export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-24 text-center">
        <h1
          className="text-4xl md:text-5xl font-serif font-bold text-stone-800"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look
          forward to hearing from you.
        </p>
      </div>

      {/* Contact Cards Section */}
      <motion.div
        className="container mx-auto px-6 lg:px-8 pb-20 md:pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContactCard
          icon={<FaPhoneAlt className="text-[#B85C38] text-xl" />}
          title="Call Us"
          text="Have a question or need to book over the phone? Give us a ring."
          buttonText="Call +254 700 123 456"
          href="tel:+254700123456"
        />
        <ContactCard
          icon={<FaEnvelope className="text-[#B85C38] text-xl" />}
          title="Email Us"
          text="For inquiries, feedback, or collaborations, please send us an email."
          buttonText="hello@auranairobi.com"
          href="mailto:hello@auranairobi.com"
        />
        <ContactCard
          icon={<FaMapMarkerAlt className="text-[#B85C38] text-xl" />}
          title="Visit Us"
          text="123 AfroLuxe Lane, Westlands, Nairobi, Kenya. We can't wait to welcome you."
          buttonText="Get Directions"
          href="https://www.google.com/maps/place/Nairobi/@-1.3028601,36.7073084,10z/data=!3m1!4b1!4m6!3m5!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2920659!4d36.8219462!16zL20vMDU5Zm4?entry=ttu"
        />
      </motion.div>

      {/* Map and Hours Section */}
      <div className="container mx-auto px-6 lg:px-8 pb-20 md:pb-32">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-stone-800"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Find Us & Our Hours
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <OperatingHours />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GoogleMap />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
