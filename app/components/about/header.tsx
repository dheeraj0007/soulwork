"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isClient ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={"/about/aboutheader2.png"}
          width={1920}
          height={1080}
          alt="header"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center -30%' }}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isClient ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isClient ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Loading Animation */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute inset-0 bg-[var(--pre-primary)] flex items-center justify-center z-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[var(--primary)] border-t-transparent rounded-full"
          />
        </motion.div>
      )}
    </div>
  );
}

export default Header;
