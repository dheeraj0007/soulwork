import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Podcast2() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[80vh] object-cover"
        style={{ objectPosition: "20% 30%" }} // X% Y%
      >
        <source src="/podcast.mov" type="video/mp4" />
      </video>
      <div
        className="bg-[var(--pre-primary)]/30 pb-14 -mt-10 px-5 flex flex-col md:flex-row items-center justify-center"
        id="podcast"
      >
        <div className="md:-rotate-3 md:translate-x-3 z-1 shadow-sm rounded-md">
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            style={{
              maxWidth: "690px",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
          ></iframe>
        </div>
        <div className="w-full text-center max-w-[700px] mt-2 md:leading-7 bg-[#f8f8fa] md:text-lg h-fit p-10 py-14 border-[1px] border-[var(--secondary)] rounded-2xl mb-1 relative">
          <Image
            src={"/airpods.png"}
            width={100}
            height={100}
            alt="airpods"
            className="absolute -bottom-5 -right-5"
          />
          <h1 className="text-2xl font-medium md:text-4xl mb-5">
            Adi Shakti{" "}
            <span className="text-[var(--primary)] uppercase italic">
              Speaks
            </span>{" "}
            - THE PODCAST
          </h1>
          <p className="leading-8.5">
            <span className="text-[var(--primary)] font-medium ">
              {" "}
              Adi Shakti
            </span>{" "}
            Speaks is a podcast where I share my wisdom on building a
            multi-seven-figure, Dharmic Legacy business—one rooted in spiritual
            depth, philanthropy, and business excellence. My ideas inspire
            facilitators, spiritual entrepreneurs, and Philanthropic Femmes to
            grow companies that are deep in roots and wide in reach.
          </p>
          <div className="flex flex-col items-center justify-center mt-8">
            <h1 className="text-xl font-semibold italic">Listen on :</h1>
            <div className="flex space-x-2 mt-4">
              <Link
                href={"https://open.spotify.com/show/0hZis2ct6rQCDykQMNOHe1"}
                target="_blank"
              >
                {" "}
                <Image
                  src={
                    "https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64b96f89631c00a7b076be40_spotify-badge.svg"
                  }
                  width={200}
                  height={200}
                  alt="spotify"
                />
              </Link>
              <Link
                href={
                  "https://podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
                }
                target="_blank"
              >
                {" "}
                <Image
                  src={"/applelisten.png"}
                  width={200}
                  height={200}
                  alt="spotify"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-2 md:gap-20 pt-4 pb-0 bg-[var(--pre-primary)]/30 sm:px-10 md:px-20 min-h-screen">
        <div className="col-span-1 h-full">
          <Image
            src={"/latest-podcast.svg"}
            width={1080}
            height={1920}
            alt="movie"
            className="hidden md:block w-full min-h-80 object-contain"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center playfair-bold pb-10 ">
          <h1 className="md:text-center text-5xl md:mt-0 mb-10">The Latest</h1>

          <div className="text-black text-2xl sm:text-2xl  md:text-3xl">
            <Link
              className="pt-4 pb-8 border-b-[1px] border-b-[var(--primary)] flex justify-between relative group"
              href={
                "https://podcasts.apple.com/us/podcast/s3-e10-the-pioneer-code-that-separates-movers-from/id1435719818?i=1000724556867"
              }
              target="_blank"
            >
              <span className="absolute text-sm bottom-2 text-[var(--primary)]">
                S3:E10
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-5">
              The “Pioneer Code” That Separates Movers From the Masses w/ Bridget James Ling
              </span>
              <Image
                src={"/playbutton.png"}
                width={60}
                height={60}
                alt="playbutton"
                className="hidden md:block"
              />
            </Link>






            <Link
              className="pt-4 pb-8 border-b-[1px] border-b-[var(--primary)] flex justify-between relative group"
              href={
                "https://podcasts.apple.com/us/podcast/s3-e9-the-almighty-teaching-from-adi-shakti-herself/id1435719818?i=1000723257102"
              }
              target="_blank"
            >
              <span className="absolute text-sm bottom-2 text-[var(--primary)]">
                S3:E9
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-5">
                The Almighty Teaching from Adi Shakti herself
              </span>
              <Image
                src={"/playbutton.png"}
                width={60}
                height={60}
                alt="playbutton"
                className="hidden md:block"
              />
            </Link>






            <Link
              className="pt-4 pb-8 border-b-[1px] border-b-[var(--primary)] flex justify-between relative group"
              href={
                "https://podcasts.apple.com/us/podcast/s3-e8-visibility-as-spiritual-initiation-not-marketing/id1435719818?i=1000714350444"
              }
              target="_blank"
            >
              <span className="absolute text-sm bottom-2 text-[var(--primary)]">
                S3:E8
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-5">
                {" "}
                Visibility as Spiritual Initiation; Not Marketing Strategy
              </span>
              <Image
                src={"/playbutton.png"}
                width={60}
                height={60}
                alt="playbutton"
                className="hidden md:block"
              />
            </Link>
            <Link
              href={
                "https://podcasts.apple.com/us/podcast/s3-e7-the-camp-soul-success-case-study/id1435719818?i=1000711934783"
              }
              target="_blank"
              className="pt-4 pb-8 border-b-[1px] border-b-[var(--primary)] flex justify-between relative group"
            >
              <span className="absolute text-sm bottom-2 text-[var(--primary)]">
                S3:E7
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-5">
                {" "}
                The Camp Soul Success Case Study
              </span>
              <Image
                src={"/playbutton.png"}
                width={60}
                height={60}
                alt="playbutton"
                className="hidden md:block"
              />
            </Link>

            <Link
              href={
                "https://podcasts.apple.com/us/podcast/s3-e6-the-aligned-path-of-least-resistance-day-one/id1435719818?i=1000711016476"
              }
              target="_blank"
              className="pt-4 pb-8 border-b-[1px] border-b-[var(--primary)] flex justify-between relative group"
            >
              <span className="absolute text-sm bottom-2 text-[var(--primary)]">
                S3:E6
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-5">
                The Aligned Path of Least Resistance {"("}Day One{")"}
              </span>
              <Image
                src={"/playbutton.png"}
                width={60}
                height={60}
                alt="playbutton"
                className="hidden md:block"
              />
            </Link>
            {/* <Link
              href={
                "https://soulwork.libsyn.com/s3e5-from-broke-servant-to-dharmic-steward-my-story"
              }
              target="_blank"
              className="pt-4 pb-8 border-b-[1px] border-b-[var(--primary)] flex justify-between relative group"
            >
              <span className="absolute text-sm bottom-2 text-[var(--primary)]">
                S3:E5
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-5">
                From Broke Servant to Dharmic Steward: My story
              </span>
              <Image
                src={"/playbutton.png"}
                width={60}
                height={60}
                alt="playbutton"
                className="hidden md:block"
              />
            </Link> */}
            <div className="flex justify-center">
              <Link
                href={
                  "https://podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
                }
                target="_blank"
              >
                <Button
                  className=" border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] cursor-pointer mt-5  bg-[var(--primary)] text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[var(--primary)]/90"
                  size={"lg"}
                >
                  View All Episodes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcast2;
