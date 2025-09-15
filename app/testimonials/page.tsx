"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  src: string;
}

interface TestimonialImage {
  id: number;
  src: string;
  alt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    src: "https://player.vimeo.com/video/898635074",
  },
  {
    id: 2,
    src: "https://player.vimeo.com/video/898635098",
  },
  {
    id: 3,
    src: "https://player.vimeo.com/video/179375027?h=323d3d72c2",
  },
  {
    id: 4,
    src: "https://player.vimeo.com/video/179375013?h=8b062a123f",
  },
  {
    id: 5,
    src: "https://player.vimeo.com/video/203938433?h=3ffad5b697",
  },
  {
    id: 6,
    src: "https://player.vimeo.com/video/203993502?h=54d09888ea",
  },
  {
    id: 7,
    src: "https://player.vimeo.com/video/161341529?h=3c30da0177",
  },
  {
    id: 8,
    src: "https://player.vimeo.com/video/179375002?h=d8cbaa3b4e",
  },
];

const testimonialImages: TestimonialImage[] = [
  { id: 1, src: "/testimo/test1.png", alt: "Testimonial 1" },
  { id: 2, src: "/testimo/testi2.png", alt: "Testimonial 2" },
  { id: 3, src: "/testimo/testi3.png", alt: "Testimonial 3" },
  { id: 4, src: "/testimo/testi4.png", alt: "Testimonial 4" },
  { id: 5, src: "/testimo/testi5.png", alt: "Testimonial 5" },
  { id: 6, src: "/testimo/testi6.png", alt: "Testimonial 6" },
  { id: 7, src: "/testimo/testi7.png", alt: "Testimonial 7" },
  { id: 8, src: "/testimo/testi8.png", alt: "Testimonial 8" },
  { id: 9, src: "/testimo/testi9.png", alt: "Testimonial 9" },
  { id: 10, src: "/testimo/testi10.png", alt: "Testimonial 10" },
  { id: 11, src: "/testimo/testi11.png", alt: "Testimonial 11" },
  { id: 12, src: "/testimo/testi12.png", alt: "Testimonial 12" },
  { id: 13, src: "/testimo/testi13.png", alt: "Testimonial 13" },
];
function Testimonials() {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const images = document.querySelectorAll('.testimonial-image');
      const newVisibleImages: number[] = [];
      
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const imageId = parseInt(img.getAttribute('data-id') || '0');
          newVisibleImages.push(imageId);
        }
      });
      
      setVisibleImages(newVisibleImages);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient]);

  return (
    <div className="bg-black px-3 md:px-5 py-20">
      <h1 className="text-3xl md:text-6xl text-center mt-10 bg-black text-white font-bold">
        <em className="text-[var(--primary)] ">Hear SoulWork Stories</em>
      </h1>
      {/* <p className="text-center italic text-white mt-2">
        &quot;Our Students Never Leave &quot;
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        {testimonials.map((testimonial) => {
          return (
            <div className="video-container" key={testimonial.id}>
              <iframe
                src={testimonial.src}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>

      {/* Testimonial Images Section */}
      <div className="mt-20">
        <h2 className="text-2xl md:text-4xl text-center text-white font-bold mb-10">
          <em className="text-[var(--primary)]">More SoulWork Stories</em>
        </h2>
        
        <div className="space-y-8 max-w-6xl mx-auto">
          {testimonialImages.map((image, index) => (
            <div
              key={image.id}
              className={`testimonial-image w-full transition-all duration-700 ease-out ${
                isClient && visibleImages.includes(image.id)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              data-id={image.id}
              style={{
                transitionDelay: isClient ? `${index * 0.1}s` : '0s'
              }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white p-2 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-md"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
