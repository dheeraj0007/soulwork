import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="bg-[var(--pre-primary)] flex items-center justify-center">
      <Image
        src={"/about/aboutheader2.png"}
        width={1000}
        height={1000}
        alt="header"
        className="md:h-screen h-fit mt-10"
      />
    </div>
  );
}

export default Header;
