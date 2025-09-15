import Image from "next/image";
import React from "react";

function BringsMe() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-end md:justify-center text-lg mx-auto px-8 md:px-12 bg-[var(--pre-primary)]/30">
      <Image
        src={"/latest-podcast.svg"}
        alt=""
        height={1000}
        width={1000}
        className="h-[26rem] sm:h-60vh md:h-[80vh] order-1 w-fit object-contain"
      />
      <div className="bg-white p-10 lg:p-15 max-w-[600px] space-y-5 leading-8 md:order-2 my-20">
        <h1 className="text-3xl md:text-5xl playfair tracking-tight">
          Which brings me to you.
        </h1>
        <p className="">
          I&apos;m Adi Shakti. What began as a vision to share yoga and healing
          has grown into SoulWork™ — a global movement training thousands of
          facilitators and leading immersions across the world.
          <br />
          For me, success is measured in joy, in souls served, and in the real
          impact on causes from indigenous rights to supporting survivors of
          human trafficking.
          <br />
          I&apos;m here to guide you in living your purpose, awakening your
          potential, and serving humanity with devotion and love.
        </p>
      </div>
    </div>
  );
}

export default BringsMe;
