import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function Insider() {
  return (
    <div className="max-w-6xl text-lg mx-auto px-8 md:px-12 pb-16 space-y-8 py-10 md:py-24 border-t-[1px] border-b-[1px] mb-10 border-[#e6c5c0] grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-3">
        <h1 className="text-3xl tracking-tight md:text-5xl playfair">
          Become an ADI Insider
        </h1>
        <p>
          You&apos;ll get weekly motivation and first dibs on scholarship seats,
          giveaways and other subscriber-only resources you can&apos;t get
          anywhere else.
        </p>
      </div>

      <div className="mx-10">
        <form action="" className="space-y-3">
          <Input
            type="text"
            placeholder="First Name"
            className="rounded-none border-[1px] border-[#e6c5c0] placeholder:text-black placeholder:text-lg py-4 text-lg"
          />
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="rounded-none border-[1px] border-[#e6c5c0] placeholder:text-black placeholder:text-lg py-4 text-lg"
          />
          <Button
            className=" cursor-pointer bg-black text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[var(--primary)]/90 w-full font-semibold"
            size={"lg"}
          >
            YES, PLEASE!
          </Button>
          <p className="text-xs text-justify ">
            By entering your info, you&apos;ll become an MF Insider - with FREE
            access to exclusive insights, private Q+As, and inspiring episodes
            of MarieTV, delivered with 💜 to your inbox. (Unsub anytime in a
            click.) You also agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Insider;
