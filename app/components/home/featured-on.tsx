import React from "react";
import Image from "next/image";

function FeaturedOn() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          You Might Have Seen Me On
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/YD-New-Logo-removebg-preview.png"
              alt="YD Logo"
              width={150}
              height={80}
              className="max-h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center justify-center">
            <Image
              src="/yj-logo.png"
              alt="YJ Logo"
              width={150}
              height={80}
              className="max-h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center justify-center">
            <Image
              src="/spiritualityhealthlogo.png"
              alt="Spiritual Health Logo"
              width={150}
              height={80}
              className="max-h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center justify-center">
            <Image
              src="/yogaalliancelogo.png"
              alt="Yoga Alliance Logo"
              width={150}
              height={80}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedOn;
