"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

function Intro() {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isClient ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-14 px-8 flex items-center justify-center bg-[var(--pre-primary)]/20"
    >
      <p className="text-center w-full text-xl md:w-2/3 leading-10 tracking-tight">
        I&apos;m Adi, the visionary founder and guiding force behind
        <span className="font-semibold"> SoulWork</span>, a transformative
        platform that empowers seekers to embark on their journey of{" "}
        <span className="font-semibold">
          self-discovery and professional growth
        </span>
        .
      </p>
    </motion.div>
  );
}

export default Intro;
