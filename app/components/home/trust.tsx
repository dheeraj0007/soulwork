import React from "react";
import TrustGallery from "./trust-gallery";

function Trust() {
  return (
    <div className="bg-black py-20 px-5 flex flex-col items-center justify-center">
      {/* <h1 className="text-3xl font-medium md:text-5xl ">
        <span className="text-[var(--primary)] uppercase italic">SoulWork</span>{" "}
        <span className="text-white">Live</span>
      </h1> */}
      {/* <em className="mt-2 mb-5 md:mb-10 text-white/90">
        &quot;The Soul Gallery&quot;
      </em> */}

      <TrustGallery />
    </div>
  );
}

export default Trust;
