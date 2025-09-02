import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Read2() {
  return (
    <section id="" className="bg-[#faf9f6] min-h-screen p-5 md:p-10">
      <div className="max-w-8xl mx-auto py-10 px-8 md:px-12 bg-white rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-lg uppercase font-semibold text-[var(--primary)]">The book</h1>
            <h1 className="text-3xl md:text-5xl playfair text-[var(--secondary)]">
              Post Traumatic Growth through the SoulWork Lens
            </h1>
            <p className="md:text-lg md:leading-8 text-gray-700">
              Post Traumatic Growth through the SoulWork Lens Why is it that
              sometimes we crumble after challenges in our lives, and sometimes we
              soar? This book dives into the stories of our SoulWork community,
              and we uncover the{" "}
              <span className="uppercase font-semibold text-[var(--primary)]">
                conditions, tools, support + practices
              </span>{" "}
              necessary to alchemize pain into greatness.
            </p>
            <p className="text-xl font-semibold text-[var(--primary)]">Coming Soon!</p>
            <Link href={"https://soulwork.kit.com/71b766c940"} target="_blank">
              <Button
                className="bg-[var(--primary)] border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] hover:bg-[var(--secondary)] mt-2 text-white font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
                size={"lg"}
              >
                ORDER YOUR COPY
              </Button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src={"/book.jpeg"}
              height={1000}
              width={1000}
              alt="book"
              className="w-fit h-[400px] md:h-[500px] shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Read2;
