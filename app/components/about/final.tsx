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
        transformation and awakening. Her profound impact on the lives of
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
            action="https://app.kit.com/forms/8447521/subscriptions"
            method="post"
            target="_blank"
            className="space-y-3 "
          >
            <Input
              type="text"
              name="fields[first_name]"
              required
              placeholder="First Name"
              className="rounded-none  bg-white  placeholder:text-black placeholder:text-lg py-5 text-lg"
            />
            <Input
              type="text"
              name="fields[age]"
              required
              placeholder="Instagram handle"
              className="rounded-none  bg-white  placeholder:text-black placeholder:text-lg py-5 text-lg"
            />
            <Input
              type="email"
              name="email_address"
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
              By entering your info, you&apos;ll join the SoulWork Community —
              with FREE access to guided practices, exclusive teachings, and
              inspiring podcast episodes, delivered with ❤️ to your inbox.
              (Unsubscribe anytime with a single click.) You also agree to our
              Terms of Use and Privacy Policy.
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
        It will guide you to align with your soul&apos;s purpose and create a
        life rooted in depth, devotion, and joy. I can&apos;t wait for you to
        experience it.
      </p>
      <p className="leading-8">
        Thank you for being here. I&apos;m honored we&apos;re connected, and I
        look forward to walking this path of transformation together.
      </p>
      <p className="flex flex-col">
        <span>With all my love,</span> <span>XO</span>
      </p>
      <p style={{ fontFamily: "Amsterdam One" }}>Adi Shakti</p>
    </div>
  );
}

export default Final;
