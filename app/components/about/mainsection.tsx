import React from "react";

function MainSection() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/d9748400-07c1-4f82-ac51-9211537ea068/IMG_7309.jpg?format=2500w')",
      }}
    >
      <div className="h-full w-full px-5 flex items-center justify-around bg-black/50">
        <div className="bg-white p-15 w-full  md:w-[600px] space-y-5 leading-8">
          <p className="text-lg">
            Adi&apos;s compassionate nature and deep empathy create a safe and
            nurturing space for individuals to explore their inner landscapes.
            Her teachings are rooted in the principles of self-love,
            self-acceptance, and self-empowerment. She believes that by
            embracing our shadows and integrating all aspects of ourselves, we
            can awaken our innate wisdom and live a life of meaning and
            fulfillment.
          </p>
          <h1 className="text-3xl md:text-5xl playfair tracking-tight">
            By embracing our shadows and integrating all aspects of ourselves,
            we can awaken our innate wisdom.
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MainSection;
