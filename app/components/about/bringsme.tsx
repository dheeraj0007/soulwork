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
          Traditional rules were made to be broken.
        </h1>
        <p className="text-lg">
          From the non-stop frenzy working on the floor of the New York Stock
          Exchange, to the well-heeled halls of Condé Nast publishing, to
          choreographing hip-hop on MTV and being one of the world&apos;s first
          Nike Elite Dance Athletes, to publishing two international
          bestsellers, to founding a digital education company named in the Inc.
          500, I&apos;m undeniable proof that...
        </p>
      </div>
    </div>
  );
}

export default BringsMe;
