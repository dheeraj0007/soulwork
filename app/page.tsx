"use client";
import SmoothScroll from "./components/home/smooth-scroll";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import OptIn from "./components/home/opt-in";
import Intro from "./components/home/intro";
import Ascent from "./components/home/ascent";
import Trust from "./components/home/trust";
import Watch from "./components/home/watch";
import Read2 from "./components/home/read2";
import Podcast2 from "./components/home/podcast2";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { paths } from "@/lib/constant";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="min-h-screen">
      <SmoothScroll />

      <section
        id="hero"
        className="text-white min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="/header.MOV"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        {/* Content */}
        <div
          ref={ref}
          className="flex justify-center items-center mx-auto px-6 relative z-10"
        >
          <div className="text-4xl md:text-6xl flex flex-col md:flex-row">
            <motion.span 
              className="playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Meet the{" "}
            </motion.span>
            <div className="flex flex-col items-center space-y-2 mt-2 md:mt-0">
              <motion.div
                className="text-3xl md:text-5xl"
                style={{ fontFamily: "Amsterdam One" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {"Philanthropic".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                    style={{
                      textShadow: "2px 2px 0px rgba(0,0,0,0.5)",
                      WebkitTextStroke: "1px white"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Curved line stroke between text */}
              <motion.div
                className="relative w-full flex justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <motion.svg
                  width="300"
                  height="30"
                  viewBox="0 0 300 30"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="absolute top-8 md:top-2"
                >
                  <motion.path
                    d="M 10 15 Q 75 8 150 15 T 290 15"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 2.5 }}
                  />
                </motion.svg>
              </motion.div>
              
              <motion.div
                className="text-xl mt-2 md:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                {"FEMME".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                    style={{
                      textShadow: "1px 1px 0px rgba(0,0,0,0.5)",
                      WebkitTextStroke: "0.5px white"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        {/* Scroll down icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <Link href="#intro">
            <ChevronDown className="w-6 h-6 animate-bounce cursor-pointer hover:text-gray-300 transition-colors" />
          </Link>
        </div>
      </section>

      <OptIn />

      <Intro />

      <Read2 />
      <Watch />
      <Ascent />
      <Podcast2 />
      {/* <AdiSpeaks /> */}

      {/* <Testimonials /> */}
      <Trust />
    </div>
  );
}
