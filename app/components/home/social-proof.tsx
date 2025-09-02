import React from "react";
import Image from "next/image";

function SocialProof() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-20 px-4">
        <div>
          <h1 className="text-white text-center mb-10 text-3xl sm:text-4xl md:text-5xl font-semibold ">
            Others recognize me and{" "}
            <em className="italic text-[var(--primary)] ">my work</em> too
          </h1>
        </div>
        <Image
          width={1080}
          height={1920}
          className="h-full w-fit mx-auto rounded-lg mb-5 hover:scale-105 transition-transform duration-200"
          alt=""
          src={
            "https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/d9748400-07c1-4f82-ac51-9211537ea068/IMG_7309.jpg?format=2500w"
          }
        />
        <p className="text-center text-white mt-8 text-xl md:text-3xl w-full md:w-1/2 mx-auto">
          <span className="text-[var(--primary)]">Adi Shakti</span> has trained
           Trauma Informed Yoga Teachers + Facilitators globally
        </p>
      </div>
      <Image
        src={
          "https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/a0428039-7341-4448-9fdd-84c903d8edbd/Screen+Shot+2024-01-01+at+11.16.52+AM.png?format=2500w"
        }
        width={1920}
        height={1080}
        alt="proof"
        className="object-cover w-full"
      />
    </>
  );
}

export default SocialProof;
