"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

function Secondary() {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="max-w-6xl text-lg mx-auto px-8 md:px-12 pb-16 space-y-8 py-10 md:py-20">
      <p className="leading-8">
        Born with an innate curiosity and a deep longing to understand the
        mysteries of life,{" "}
        <span className="text-[var(--primary)]">Adi Shakti</span> embarked on a
        lifelong quest for spiritual truth and self-realization.
      </p>
      <p className="leading-8">
        She delved into various ancient wisdom traditions,{" "}
        <span className="font-semibold">studied trauma</span>,{" "}
        <span className="font-semibold">meditation</span>, and energy healing
        modalities, and traveled extensively to learn from renowned{" "}
        <span className="font-semibold">spiritual masters</span> and gurus
        across the globe.{" "}
      </p>

      <div>
        <p>Akhanda Lineage and the Nath Shiv Tradition</p>
        <ul className="list-disc marker:text-sm p-5 space-y-3">
          <li>
            <span className="font-medium ">Lineage and Authority</span> : Guided
            by Yogrishi Vishvketu and blessed by the{" "}
            <span className="text-[var(--primary)]">Akhanda Lineage</span>,
            rooted in the Nath Shiv tradition of the{" "}
            <span className="font-medium italic">Himalayan</span> foothills.
          </li>
          <li>
            <span className="font-medium ">Integrated Practices</span> : Nath
            yogis combine asanas, pranayama,
            <span className="text-[var(--primary)]"> kundalini awakening</span>,
            and meditation in their daily sadhana.
          </li>
          <li>
            <span className="font-medium ">Spiritual Goal</span> : These
            practices awaken inner energies, deepen spiritual awareness, and
            lead to union with the divine.
          </li>
        </ul>
      </div>

      <p className="leading-8">
        The lineage encourages practitioners to engage in self-inquiry and
        introspection to understand their true nature and{" "}
        <span className="font-semibold">
          unravel the layers of conditioning and ego
        </span>
        . This process of inner exploration leads to greater self-awareness and
        spiritual growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="leading-8">
            Combining her diverse knowledge and experiences,{" "}
            <span className="font-semibold">Adi Shakti </span>
            developed a unique and holistic approach to personal transformation
            via <span className="font-semibold">SoulWork</span>.
          </p>

          <h1 className="text-3xl md:text-5xl playfair mt-5">
            &quot;Post Traumatic Growth&quot;{" "}
            <span className="text-lg">
              through the <span className="font-semibold">SoulWork</span> Lens.
            </span>
          </h1>

          <p className="leading-8">
            Why is it that sometimes we crumble after challenges in our lives,
            and sometimes we soar?{" "}
            <span className="font-semibold">My upcoming</span>{" "}
            <span className="text-[var(--primary)] font-semibold">book</span>{" "}
            dives into the stories of our SoulWork community, and we uncover the
            conditions, tools, support + practices necessary to alchemize pain
            into greatness.
          </p>

          <p className="leading-8">
            <em>Adi</em> is not only a transformative guide but also a
            passionate advocate for global change and humanitarian efforts.
          </p>
        </div>

        <div className="bg-gray-100 p-8 w-full overflow-hidden">
          <Image
            src={"/about/adi.jpg"}
            width={500}
            height={500}
            alt="adi"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 grayscale-100"
          />
        </div>
      </div>

      <p className="leading-8">
        She guides individuals on a profound inner journey to reclaim their
        authentic selves, heal emotional wounds, and cultivate a deep connection
        with their soul&apos;s purpose.
      </p>
      <p className="leading-8">
        Adi is not only a transformative guide but also a passionate{" "}
        <span className="font-semibold">
          advocate for global change and humanitarian efforts
        </span>
        . With her extensive knowledge and expertise, she has trained thousands
        of teachers, empowering them to carry forth the principles of SoulWork
        and touch the lives of countless individuals around the world.
      </p>

      <p className="leading-8">
        Recognizing the importance of cultivating leaders in the holistic
        community,{" "}
        <span className="font-semibold">
          <em className="text-[var(--primary)]">Adi Shakti</em> has played a
          pivotal role in nurturing and supporting aspiring teachers
        </span>
        . Through her mentorship and guidance, she has provided expansive
        opportunities for holistic leaders to step into their own power and
        share their wisdom with others.
      </p>

      <h1 className="text-3xl md:text-5xl playfair tracking-tight">
        I measure my success in my inner metric of joy.
      </h1>
    </div>
  );
}

export default Secondary;
