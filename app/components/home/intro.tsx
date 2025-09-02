import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
    >
      {/* Left side - Text content */}
      <div className="bg-[var(--primary)]/10 flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-0">
        <div className="max-w-lg">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight playfair text-gray-900">
            I&apos;m
            <br />
            Adi Shakti.
          </h2>
          <div className="md:text-lg mb-6 leading-relaxed space-y-4">
            <p>
              I didn&apos;t set out to build a global company. I started out as a humanitarian with a massive heart determined to use my life meaningfully. What started as a vision to share yoga and healing has grown into SoulWork™ — a movement that has generated multi-millions in revenue, trained 3,000+ trauma-informed facilitators, and led 50+ international immersions rooted in the &quot;deep roots, wide branches&quot; methodology.
            </p>
            <p>
              When women rise in wealth with integrity, the ripple effects are unstoppable. That&apos;s why I birthed The Philanthropic Femme — mentoring the builders of Dharmic Legacy Brands that value spiritual depth, business excellence, and holy philanthropic redistribution.
            </p>
            <p>
              I measure my success in my inner metric of joy, in souls served and the tangible impact for causes like indigenous rights advocacy in Central America and support for survivors of human trafficking in India.
            </p>
            <p>
              This isn&apos;t theory. This is my life&apos;s work. I walk the talk. I&apos;ve built, served, failed, refined, and risen again. And now, I&apos;m here to mentor you in your own lifelong journey - to actualize your potential, live your purpose, and serve humanity with depth, devotion, and joy.
            </p>
            <p className="italic font-medium">
              Welcome to the journey from your SOUL to your WORK
            </p>
          </div>
          <div className="pb-4">
            <Link href={"#"}>
              <Button
                className="bg-[var(--primary)] border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] hover:bg-[var(--secondary)] text-white font-medium px-4 py-2 rounded-full cursor-pointer transition-colors duration-200"
                size={"lg"}
              >
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
     

      {/* Right side - Image */}
      <div className="relative h-full min-h-[70vh] sm:min-h-screen bg-[var(--primary)]/10">
        <Image
          src="/intro.svg"
          alt="Adi"
          fill
          className="object-contain sm:object-cover object-bottom md:object-center -mt-2"
          priority
        />
      </div>
    </section>
  );
}

export default Intro;
