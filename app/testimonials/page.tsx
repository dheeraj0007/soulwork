import React from "react";

interface Testimonial {
  id: number;
  src: string;
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
function Testimonials() {
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
    </div>
  );
}

export default Testimonials;
