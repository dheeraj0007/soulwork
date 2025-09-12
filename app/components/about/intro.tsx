"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text = "Adi Shakti is the visionary founder and guiding force behind SoulWork, a transformative platform that empowers seekers to embark on their journey of self-discovery and professional growth. With her profound understanding of the human psyche and spiritual principles, Adi has created a revolutionary approach to inner healing and awakening.";

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-14 px-8 flex items-center justify-center bg-[var(--pre-primary)]/20"
    >
      <div className="text-center w-full text-xl md:w-2/3 leading-10 tracking-tight">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            className="inline-block mr-2"
          >
            {word === "Adi" || word === "Shakti" ? (
              <span className="font-semibold text-[var(--primary)]">{word}</span>
            ) : word === "SoulWork," ? (
              <span className="font-semibold text-[var(--primary)]">{word}</span>
            ) : word === "self-discovery" || word === "professional" || word === "growth" ? (
              <span className="font-semibold">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Intro;
