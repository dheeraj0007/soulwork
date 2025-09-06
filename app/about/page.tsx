import React from "react";
import Header from "../components/about/header";
import Intro from "../components/about/intro";
import Secondary from "../components/about/secondary";
import MainSection from "../components/about/mainsection";
import Image from "next/image";
import MainSection2 from "../components/about/mainsection2";
import BringsMe from "../components/about/bringsme";
import Business from "../components/about/business";

function About() {
  return (
    <div className="">
      <Header />
      <Intro />
      <Secondary />
      <MainSection />

      {/* Social Image Section */}
      <section className="bg-white">
        <div className="w-full">
          <Image
            src="/social.webp"
            alt="Social"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </section>

      <MainSection2 />
      <BringsMe />
      <Business />
    </div>
  );
}

export default About;
