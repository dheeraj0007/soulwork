"use client";
import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonial";

function AdiSpeaks() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      src: "https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/d9748400-07c1-4f82-ac51-9211537ea068/IMG_7309.jpg?format=2500w",
    },
    {
      quote:
        " Adi Shaktis mission is to guide seekers and holistic entrepreneurs to deepen their spiritual life, achieve excellence in their entrepreneurial pursuits, and give forward with soul.",
      src: "https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/cc0ba4db-59e5-4182-ac51-9211537ea068/IMG_7309.jpg?format=2500w",
    },
    {
      quote:
        " On Adi Shakti Speaks, Adi shares powerful stories + teachings on spirituality, entrepreneurship, relationships, feminine leadership, and personal transformation. ",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/5338ce71-4ce7-4220-a28b-a1372cc2b5de/Crania_SoulCamp_177.jpg?format=1000w",
    },
    {
      quote:
        "With honesty, depth, and a touch of fire, Adi Shakti Speaks offers actionable insights and soulful inspiration to help you build a life and business that is not only successful, but profoundly meaningful.",
      src: "https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/88f5b8bd-4395-4585-80c4-1a685ac034f2/Screen+Shot+2024-01-27+at+12.27.05+PM.png?format=2500w",
    },
  ];
  return (
    <div className="bg-[var(--secondary)] py-20 px-4">
      <h1 className="text-white text-center mb-10  text-4xl sm:text-4xl md:text-6xl font-semibold ">
        Adi <em className="italic text-[var(--primary)] ">Speaks</em>
      </h1>

      <div className="max-w-7xl mx-auto px-8 md:px-10">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
      </div>
    </div>
  );
}

export default AdiSpeaks;
