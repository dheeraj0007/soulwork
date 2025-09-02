import React from "react";
import { AnimatedTestimonials2 } from "../ui/animated-video-test";

interface Testimonial {
  id: number;
  name: string;
  program: string;
  quote: string;
  src: string;
}
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Addie",
    program: "B-SCHOOL",
    quote:
      "I felt very supported and understood from everyone of you. I love that we are now a community.",
    src: "https://player.vimeo.com/video/898635074",
  },
  {
    id: 2,
    name: "Sarah M.",
    program: "MARKETING MASTERY",
    quote:
      "I just wanted to say that the depth and the quality of this training it bar none.",
    src: "https://player.vimeo.com/video/898635098",
  },
  {
    id: 3,
    name: "Dannielle ",
    program: "ENTREPRENEUR ACADEMY",
    quote:
      "It was a transformational journey for me. Now i am looking at myself differently and the world.",
    src: "https://player.vimeo.com/video/179375027?h=323d3d72c2",
  },
  {
    id: 4,
    name: "Ali",
    program: "DIGITAL COURSE",
    quote:
      "The training changed my life. The encourage you to explore within yourself.",
    src: "https://player.vimeo.com/video/179375013?h=8b062a123f",
  },
  {
    id: 5,
    name: "Destiny",
    program: "DIGITAL COURSE",
    quote:
      "It was an eye opening experience. Here my learn together and build a community and sisterhood.",
    src: "https://player.vimeo.com/video/203938433?h=3ffad5b697",
  },
  {
    id: 6,
    name: "Aris",
    program: "DIGITAL COURSE",
    quote:
      "They touched my high expectations. Every single teacher is full of knowledge.",
    src: "https://player.vimeo.com/video/203993502?h=54d09888ea",
  },
];
function Testimonials() {
  return (
    <div className="bg-[var(--primary)]/20 py-20 px-4" id="testimonials">
      <h1 className=" text-center text-4xl sm:text-4xl md:text-5xl font-semibold ">
        <em className="italic text-[var(--primary)] ">Hear SoulWork Stories</em>
      </h1>
      {/* <p className="mb-14 text-center  mt-2 italic">
        &quot;OUR STUDENTS NEVER LEAVE&quot;
      </p> */}

      <AnimatedTestimonials2 testimonials={testimonials} />
    </div>
  );
}

export default Testimonials;
