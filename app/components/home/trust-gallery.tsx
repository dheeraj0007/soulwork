"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import ImageGallery from "./image-gallery";
function TrustGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto"
      >
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/4299883a-3d06-40bd-9429-2f8538de6ffe/Crania_SoulCamp_379.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/560ccb1a-31d5-4ce2-8d21-aefb6dd8619e/Crania_SoulCamp_061.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/203142db-6c41-4240-9d18-3cf9728f3546/Crania_SoulCamp_103.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/58f1695e-ae61-4fec-bb4e-f3cb3486f6d8/Crania_SoulCamp_126.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/5338ce71-4ce7-4220-a28b-a1372cc2b5de/Crania_SoulCamp_177.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/b06a4d55-61c0-4386-8a85-256c4f3c6019/Crania_SoulCamp_152.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/bfe060d4-a4ac-4059-b652-ae68e43d927f/Crania_SoulCamp_205.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/b94752c9-6449-467f-bd80-dd320b279e09/Crania_SoulCamp_231.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/6b219bf8-e696-446a-a939-1593b24a32b3/Crania_SoulCamp_256.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/5c09982f-933e-4555-b643-9f99fc9a06f9/Crania_SoulCamp_351.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/cc0ba4db-59e5-4182-b48b-66a855dd9672/Crania_SoulCamp_501.jpg?format=1000w"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1080}
            height={1920}
            className="h-auto max-w-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/01e3e13f-5bd4-48c4-8384-6675c33c0a0a/Crania_SoulCamp_043.jpg?format=1000w"
            alt=""
          />
        </div>
      </motion.div>

      <ImageGallery />

      <p className="text-center text-white mt-8 text-xl md:text-3xl w-full md:w-1/2 mx-auto">
        <em className="text-[var(--primary)]">Adi Shakti</em> has trained  Trauma Informed Yoga Teachers + Facilitators globally
      </p>
    </>
  );
}

export default TrustGallery;
