import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ascent() {
  return (
    <div className="bg-[#faf9f6] min-h-screen p-5 md:p-10" id="ascent">
      <div className="max-w-8xl mx-auto py-10 px-8 md:px-12 bg-white rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-lg uppercase font-semibold text-[var(--primary)]">THE ASCENT</h1>
            <h2 className="text-3xl md:text-5xl playfair text-[var(--secondary)]">
              <strong>Adi Shakti&apos;s 12 month Inner Circle MasterMind</strong> for
              Philanthropic Femme&apos;s building Dharmic Legacy Brands
            </h2>
            <p className="text-lg text-gray-700">
              This is the most intimate and powerful way to work with Adi
              Shakti.
            </p>
            <p className="text-xl font-semibold text-[var(--primary)]">
              &quot;Build your Dharmic Legacy Brand as the Philanthropic Femme&quot;
            </p>
            <div className="flex">
              <Link
                href={"https://www.soulwork.online/cart-page-f7b1d"}
                target="_blank"
              >
                <Button
                  className="border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] cursor-pointer bg-[var(--primary)] text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[var(--primary)]/90"
                  size={"lg"}
                >
                  APPLY NOW
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/ascent.jpeg"
                alt="Adi"
                width={800}
                height={600}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ascent;
