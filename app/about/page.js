"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import CallToAction from "../components/CallToAction";

// HELPER COMPONENT to wrap sections and trigger animations
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

// 1. HERO COMPONENT
const AboutHero = () => (
  <div className="relative h-[40vh] md:h-[60vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
    {/* Background Image */}
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="absolute inset-0 z-0"
    >
    
      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
    </motion.div>

    {/* Content */}
    <motion.div
      className="relative z-10 p-4 max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-100 mb-4"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        More Than a Salon, It's a Movement.
      </h1>
      
    </motion.div>
  </div>
);

// 2. OUR STORY COMPONENT
const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="bg-stone-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Founder Image */}
        <motion.div
          className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/fd.jpg"
            alt="Warm and professional portrait of the salon founder"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Narrative Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            The Journey to Here
          </h2>
          <p className="text-stone-600 mb-4 leading-relaxed">
            Born from a passion for celebrating natural beauty and a desire to
            create a truly inclusive luxury space in Nairobi, our salon was
            founded. It began as a dream to build a haven where modern
            techniques meet ancestral hair wisdom.
          </p>
          <p className="text-stone-600 leading-relaxed">
            We envisioned a place that felt like home yet exuded
            sophistication—a space for connection, empowerment, and unapologetic
            self-expression. Every detail, from our decor to our services, is a
            testament to that original vision.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// 3. THE SANCTUARY (GALLERY) COMPONENT
const TheSanctuary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const galleryItems = [
    {
      src: "https://placehold.co/600x800/3a3a3a/d4c3a3?text=Vibe",
      alt: "Detail shot of the salon decor",
    },
    {
      src: "https://placehold.co/600x400/b88b79/ffffff?text=Lounge",
      alt: "Client lounge area with plush seating",
    },
    {
      src: "https://placehold.co/600x600/5d4037/e0c4a0?text=Styling+Station",
      alt: "A clean and modern styling station",
    },
    {
      src: "https://placehold.co/600x450/4e4e4e/c1a990?text=Wash+Area",
      alt: "Relaxing hair washing and treatment area",
    },
    {
      src: "https://placehold.co/600x700/6a4f4b/f5efe3?text=Details",
      alt: "Close up of Afro-luxe interior details",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-stone-800"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our Sanctuary: The Vibe & The Space
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Step into a space designed for your comfort and inspiration.
          </p>
        </div>
        <motion.div
          className="columns-2 md:columns-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// 4. MEET THE TEAM COMPONENT
const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Amina Rose",
      specialty: "Lead Stylist & Color Expert",
      bio: "With over a decade of experience, Amina blends artistry with hair science to create breathtaking transformations.",
      img: "/images/t1.jpg",
    },
    {
      name: "Samuel Chege",
      specialty: "Protective Styling Guru",
      bio: "Samuel is a master of intricate braiding and protective styles that promote hair health and longevity.",
      img: "/images/t3.jpg",
    },
    {
      name: "Zuri Okoro",
      specialty: "Curls & Coils Specialist",
      bio: "Zuris passion is unlocking the potential of every curl pattern with custom cuts and hydration therapies.",
      img: "/images/t2.jpg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatedSection>
      <div className="bg-stone-50 py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-serif font-bold text-stone-800"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Meet Our Artisans
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              The heart and soul of our salon experience.
            </p>
          </div>
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="relative group rounded-lg overflow-hidden shadow-xl"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={member.img}
                  alt={`Portrait of ${member.name}`}
                  className="w-full h-96 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
                  <h3 className="text-2xl font-bold font-serif">
                    {member.name}
                  </h3>
                  <p className="text-amber-300">{member.specialty}</p>
                </div>
                {/* Bio revealed on hover */}
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#B85C38]/90 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};


// MAIN PAGE COMPONENT
export default function About() {
  return (
    <main className="bg-white">
      {/* This is the main page component for the /about route.
        It sequences the different sections of the About Us page.
        Each component is self-contained for clarity and maintainability.
      */}
      <AboutHero />
      <OurStory />
      <TheSanctuary />
      <MeetTheTeam />
      <CallToAction/>
    </main>
  );
}
