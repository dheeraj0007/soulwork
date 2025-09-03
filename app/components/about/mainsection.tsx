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
            From the non-stop frenzy working on the floor of the New York Stock
            Exchange, to the well-heeled halls of Condé Nast publishing, to
            choreographing hip-hop on MTV and being one of the world&apos;s
            first Nike Elite Dance Athletes, to publishing two international
            bestsellers, to founding a digital education company named in the
            Inc. 500, I&apos;m undeniable proof that...
          </p>
          <h1 className="text-3xl md:text-5xl playfair tracking-tight">
            Traditional rules were made to be broken.
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MainSection;
