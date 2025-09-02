"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function MediaKit() {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with proper spacing */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-[var(--secondary)] playfair mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isClient ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Media Kit
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-12 pb-16">
        <div ref={ref} className="space-y-16">
          
          {/* Long Bio */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={isClient && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] playfair mb-8">
              Long Bio
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-[var(--primary)]">
                ADI SHAKTI
              </p>
              <p className="text-lg font-semibold text-[var(--secondary)]">
                THE PHILANTHROPIC FEMME
              </p>
              <p>
                Globally celebrated teacher of teachers, founder of SoulWork™, and producer of SoulWork™: The Film. Adi Shakti mentors creators of Dharmic Legacy Brands that fuse spiritual depth, business excellence, and philanthropic redistribution—anchoring the women's wealth movement in focused, tangible global impact. She who walks the talk.
              </p>
              <p>
                With multi-millions in lifetime revenue from retreats, yoga teacher trainings, and Soul-to-Work mentoring, Adi has certified 3,000+ facilitators and led 50+ international immersions in her "deep roots, wide branches" SoulWork™ methodology.
              </p>
              <p>
                Her philanthropic footprint spans indigenous rights advocacy in Central America to human-trafficking survivor support in India—embodying a vision where spiritual practice, wealth, and service co-create a just and compassionate world. 
                <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">
                  Click here to Join the SoulWork Movement.
                </Link>
              </p>
            </div>
          </motion.section>

          {/* Medium Bio */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={isClient && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] playfair mb-8">
              Medium Bio
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Adi Shakti, The Philanthropic Femme, is the founder of SoulWork™ and producer of SoulWork™: The Film. She mentors visionaries building Dharmic Legacy Brands that unite spiritual depth, business excellence, and philanthropic redistribution.
              </p>
              <p>
                Through SoulWork™, Adi has trained 3,000+ facilitators, led 50+ international immersions, and generated multi-millions in revenue through retreats, trainings, and Soul-to-Work mentoring. Her humanitarian work includes supporting indigenous rights in Central America and survivors of human trafficking in India. 
                <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">
                  Click here to Join the SoulWork Movement.
                </Link>
              </p>
            </div>
          </motion.section>

          {/* Short Bio */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={isClient && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] playfair mb-8">
              Short Bio
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Adi Shakti—globally celebrated teacher of teachers and founder of SoulWork™—mentors builders of Dharmic Legacy Brands at the intersection of spiritual depth, business excellence, and philanthropy. 
                <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">
                  Click here to Join the SoulWork Movement.
                </Link>
              </p>
            </div>
          </motion.section>

          {/* Ultra-Short One-Liner */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={isClient && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] playfair mb-8">
              Ultra-Short One-Liner (Tagline / Byline)
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Adi Shakti, The Philanthropic Femme—founder of SoulWork™ and mentor to a new generation of soul-led leaders. 
                <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">
                  Click here to Join the SoulWork Movement.
                </Link>
              </p>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
