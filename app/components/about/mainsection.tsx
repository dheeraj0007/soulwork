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
            From the Himalayan foothills under the guidance of the Akhanda
            lineage, to leading retreats in Costa Rica, to training thousands of
            teachers across the globe, to pioneering SoulWork as a revolutionary
            path of healing and awakening, to championing humanitarian projects
            that uplift entire communities, I am living proof that..
          </p>
          <h1 className="text-3xl md:text-5xl playfair tracking-tight">
            The journey within is the most powerful journey of all.
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MainSection;
