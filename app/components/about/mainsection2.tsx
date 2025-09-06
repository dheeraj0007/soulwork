import Image from "next/image";
import React from "react";

function MainSection2() {
  return (
    <div className="max-w-6xl text-lg mx-auto px-8 md:px-12 pb-16 space-y-8 py-10 md:py-24">
      <h1 className="text-3xl md:text-5xl playfair tracking-tight">
        I inspires others to recognize their potential as agents of change and
        to engage in meaningful efforts that uplift humanity as a whole.
      </h1>

      <p className="leading-8">
        Beyond her dedication to personal transformation, Adi Shakti has
        initiated and actively supported various humanitarian projects, with a
        special focus on Costa Rica and India.Recognizing the interconnectedness
        of all beings, she has utilized her platform and resources to make a
        positive impact in these communities.
      </p>

      <p className="leading-8">
        Adi&apos;s compassionate nature and deep empathy create a safe and
        nurturing space for individuals to explore their inner landscapes.
      </p>

      <div className="grid space-y-3 md:space-y-0 grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-3">
          <Image
            width={1080}
            height={1920}
            className="h-96 max-w-full object-cover rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/d9748400-07c1-4f82-ac51-9211537ea068/IMG_7309.jpg?format=2500w"
            alt=""
          />
          <div>
            <h1 className="text-3xl playfair">Lorem Lipsum</h1>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              dignissimos!
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <Image
            width={1080}
            height={1920}
            className="h-96 max-w-full object-cover rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/6bd686cb-a5f5-4a17-960b-24861c866f2c/IMG_7307.jpg?format=1500w"
            alt=""
          />
          <div>
            <h1 className="text-3xl playfair">Lorem Lipsum</h1>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              dignissimos!
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <Image
            width={1080}
            height={1920}
            className="h-96 max-w-full object-cover rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/d4c89b63-0367-48bd-8ff7-76d368f28efb/IMG_7308.jpg?format=1500w"
            alt=""
          />
          <div>
            <h1 className="text-3xl playfair">Lorem Lipsum</h1>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              dignissimos!
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl playfair tracking-tight py-10">
        I believe that by embracing our shadows and integrating all aspects of
        ourselves, we can awaken our innate wisdom and live a life of meaning
        and fulfillment.
      </h1>
    </div>
  );
}

export default MainSection2;
