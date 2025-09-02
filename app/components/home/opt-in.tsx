import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

function OptIn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="free-training" className="bg-[var(--light-primary)] py-14">
      <motion.div
        ref={ref}
        className="w-full lg:w-2/3 mx-auto text-center px-6 flex flex-col md:flex-row justify-center items-center md:items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <h2 className="text-3xl md:text-5xl mb-4 playfair">
            Join SoulWork&apos;s{" "}
            <em className="italic font-serif">Philanthropic Femme</em> Movement
          </h2>
          <p className="mb-8 text-lg">
            Get INSTANT ACCESS to the facilitation skills + business foundations
            that scaled a{" "}
            <em className="italic font-semibold">
              multi-million dollar company
            </em>{" "}
            rooted in spiritual depth.
          </p>

          {/* Mobile-only image between paragraph and form */}
          <div className="md:hidden mb-6 flex justify-center">
            <Image
              src={"/optin.PNG"}
              height={300}
              width={300}
              alt="opt-in mobile"
              className="rounded-lg"
            />
          </div>

          {/* ConvertKit Opt-in Form */}
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black "
              />
              <Input
                type="text"
                name="instagram_handle"
                placeholder="Instagram handle"
                className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black "
              />
            </div>
            <Input
              type="email"
              name="email_address"
              placeholder="Enter your email"
              className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black "
            />

            <Link href={"https://soulwork.kit.com/6ecb3fe716"} target="_blank">
              <Button
                className="bg-[var(--primary)]/80 border-[1px] border-[var(--secondary)] uppercase w-full text-white px-4 py-2 rounded-full cursor-pointer transition-colors duration-200"
                size={"lg"}
              >
                Get Free Training
              </Button>
            </Link>
          </div>
          <Link className="text-xs text-gray-500 mt-4" href={"/privacy-policy"}>
            By entering your info, you&apos;ll become a SoulWorker and receive
            updates to your inbox. (Unsububscribe any time) You also agree to
            our Terms of Use and Privacy Policy.
          </Link>
        </div>
        <div className="mt-4 hidden md:block">
          <Image
            src={"/optin.PNG"}
            height={400}
            width={400}
            alt="opt-in"
            className="md:h-44"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default OptIn;
