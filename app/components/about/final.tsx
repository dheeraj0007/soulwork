import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

function Final() {
  return (
    <div className="max-w-6xl text-lg mx-auto px-8 md:px-12 pb-16 space-y-8 py-10 md:py-24">
      <p className="leading-8">
        With her unwavering commitment to personal growth and spiritual
        evolution, <em className="text-[var(--primary)]"> Adi Shakti</em>{" "}
        remains a beacon of light, illuminating the path for those seeking
        transformation and awakening.Her profound impact on the lives of
        individuals and the spiritual community at large cements her legacy as a
        true pioneer in the field of{" "}
        <em className="text-[var(--primary)]">soul-centered living</em>.
      </p>

      <div className="bg-[var(--pre-primary)]/20 w-full h-fit space-y-3 md:space-y-0 pt-10 px-10 md:px-14 md:py-14 grid grid-cols-1 md:grid-cols-2 space-x-3">
        <div className="space-y-4">
          <h1
            className="text-3xl md:text-5xl playfair tracking-tight
        "
          >
            You&apos;re Going to LOVE this Free Training.
          </h1>
          <p>
            Download this FREE audio training to learn 3 simple strategies
            that&apos;ll give you the clarity and confidence to build your
            dreams, on your terms.
          </p>
          <form
            action="
          "
            className="space-y-3 "
          >
            <Input
              type="text"
              placeholder="First Name"
              className="rounded-none  bg-white  placeholder:text-black placeholder:text-lg py-5 text-lg"
            />
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-none  bg-white placeholder:text-black placeholder:text-lg py-5 text-lg"
            />
            <Button
              className=" cursor-pointer bg-black text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[var(--primary)]/90 w-full font-semibold"
              size={"lg"}
            >
              YES, PLEASE!
            </Button>
            <p className="text-xs text-justify ">
              By entering your info, you&apos;ll become an MF Insider - with
              FREE access to exclusive insights, private Q+As, and inspiring
              episodes of MarieTV, delivered with 💜 to your inbox. (Unsub
              anytime in a click.) You also agree to our Terms of Use and
              Privacy Policy.
            </p>
          </form>
        </div>
        <Image
          src={"/aboutsection.PNG"}
          alt=""
          width={500}
          height={500}
          className="w-80 md:w-96 rounded-t-lg mx-auto"
        />
      </div>

      <p className="leading-8">
        It&apos;ll walk you through the fundamentals of turning your dreams into
        reality while living a deeply rich and meaningful life. Can&apos;t wait
        for you to listen.
      </p>
      <p className="leading-8">
        Thank you so much for taking the time to visit. I&apos;m thrilled
        we&apos;re connected and I&apos;m excited for the journey ahead.
      </p>
      <p className="flex flex-col">
        <span>With all my love,</span> <span>XO</span>
      </p>
      <p style={{ fontFamily: "Amsterdam One" }}>Adi Shakti</p>
    </div>
  );
}

export default Final;
