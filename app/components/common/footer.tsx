import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[var(--secondary)] border-t-[1px] border-gray-500 text-white py-20 px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-4">
        <div>
          <Image src={"/logo.png"} width={200} height={200} alt="logo" />
        </div>
        <h2 className="text-xl md:text-3xl mb-4 playfair">
          Join SoulWork&apos;s{" "}
          <em className="italic font-serif">Philanthropic Femme</em> Movement
        </h2>
        <p className="mb-4 ">
          Get INSTANT ACCESS to the facilitation skills + business foundations
          that scaled a{" "}
          <em className="italic font-semibold">multi-million dollar company</em>{" "}
          rooted in spiritual depth.
        </p>
        <div className="space-y-5">
          <Input
            type="email"
            name="email_address"
            placeholder="Enter your email"
            className="px-4 py-3 border border-black w-full sm:w-60 flex-grow outline-none rounded-none bg-white "
          />
          <Link href={"https://soulwork.kit.com/6ecb3fe716"} target="_blank">
            <Button className="bg-[var(--primary)] hover:border-t-4  hover:border-b-0 text-white font-medium px-4 py-2 rounded-full border-b-4 border-black text-lg cursor-pointer">
              Get Free Training
            </Button>
          </Link>

          <p className="mt-2 text-xs md:w-2/3">
            By entering your info, you&apos;ll become a SoulWorker and receive
            updates to your inbox. (Unsububscribe any time) You also agree to
            our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={"/optin.PNG"}
          height={300}
          width={300}
          alt="opt-in"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col space-y-3 md:mt-16 font-medium ">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/#ascent"}>The Ascent</Link>
        <Link href={"https://soulwork.kit.com/1e24d8db1f"} target="_blank">
          Film
        </Link>
        <Link
          href={"https://open.spotify.com/show/0hZis2ct6rQCDykQMNOHe1"}
          target="_blank"
        >
          Podcast
        </Link>
        <Link href={"/about"} target="_blank">
          About Me
        </Link>
        <Link href={"/#testimonials"}>Testimonials</Link>
        <Link
          href={
            "https://soulwork.kit.com/cc12e79e3e?fbclid=PAZXh0bgNhZW0CMTEAAacxi0d4BWEYvbZEVchVf4YV-i318ZUhCkaEXWJ7_s9lfLrqImHgy8yINX_0dQ_aem_Nz08utwJnouus1N6kiGs6g"
          }
        >
          Hire Adi to Speak
        </Link>
      </div>
    </div>
  );
}

export default Footer;
