import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Watch() {
  return (
    <section id="" className="bg-[#faf9f6] min-h-screen p-5 md:p-10">
      <div className="max-w-8xl mx-auto py-10 px-8 md:px-12 bg-white rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-lg uppercase font-semibold text-[var(--primary)]">EXPERIENCE</h1>
            <h2 className="tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight playfair text-[var(--secondary)]">
              SOULWORK
              <br />
              <div className="flex items-start md:items-center">
                <span>THE FILM </span>
                <Image
                  src={"/movie.svg"}
                  height={100}
                  width={100}
                  alt="movie"
                  className="ml-4"
                />
              </div>
            </h2>
            <p className="md:text-lg text-gray-700">
              <strong>HEAR</strong>{" "}
              <em className="text-[var(--secondary)]">Adi Shakti&apos;s</em>{" "}
              story + journey through one of her in person immersions, meet the
              indigenous tribe she built a community center for in the Talamanca
              jungles, and visit the Human Trafficking rescue centers in India.
            </p>
            <p className="text-xl font-semibold text-[var(--primary)]">
              Coming Soon to streaming platforms
            </p>
            <Link
              href={"https://soulwork.kit.com/1e24d8db1f"}
              target="_blank"
              className="w-fit"
            >
              <Button
                className="border-[1px] border-[var(--secondary)] cursor-pointer bg-[var(--primary)] text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[var(--primary)]/90 uppercase"
                size={"lg"}
              >
                Watch Now
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center relative overflow-visible">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <Image
                src={"/film.svg"}
                width={800}
                height={600}
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg transform rotate-3 hover:rotate-0"
                alt="movie"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                }}
              />
              {/* 3D overlay effect for hands flowing out */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-full blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[var(--secondary)]/10 to-transparent rounded-full blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Watch;
