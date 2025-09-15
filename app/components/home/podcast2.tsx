"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface PodcastEpisode {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  episodeNumber?: string;
  seasonNumber?: string;
}

interface PodcastData {
  success: boolean;
  episodes: PodcastEpisode[];
  lastUpdated: string;
}

function Podcast2() {
  const [podcastData, setPodcastData] = useState<PodcastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const fetchPodcastData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/podcast');
        const data = await response.json();
        setPodcastData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching podcast data:', err);
        setError('Failed to load podcast episodes');
      } finally {
        setLoading(false);
      }
    };

    fetchPodcastData();
  }, [isClient]);

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
            {!isClient ? (
              <div className="flex justify-center items-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
                <span className="ml-3">Loading latest episodes...</span>
              </div>
            ) : loading ? (
              <div className="flex justify-center items-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
                <span className="ml-3">Loading latest episodes...</span>
              </div>
            ) : error ? (
              <div className="text-center py-10 text-red-600">
                <p>Failed to load podcast episodes. Please try again later.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 px-4 py-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary)]/90 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : podcastData?.episodes && podcastData.episodes.length > 0 ? (
              <>
                {podcastData.episodes.map((episode, index) => (
                  <Link
                    key={index}
                    className="pt-4 pb-8 border-b-[1px] border-b-[var(--primary)] flex justify-between relative group"
                    href={episode.link}
                    target="_blank"
                  >
                    <span className="absolute text-sm bottom-2 text-[var(--primary)]">
                      {episode.episodeNumber || `Episode ${index + 1}`}
                    </span>
                    <span className="transition-transform duration-200 group-hover:translate-x-5">
                      {episode.title}
                    </span>
                    <Image
                      src={"/playbutton.png"}
                      width={60}
                      height={60}
                      alt="playbutton"
                      className="hidden md:block"
                    />
                  </Link>
                ))}
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
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-600 mb-4">Unable to load latest episodes at the moment.</p>
                <p className="text-sm text-gray-500">Please check back later or visit the podcast directly.</p>
                <div className="flex justify-center mt-6">
                  <Link
                    href={
                      "https://podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
                    }
                    target="_blank"
                  >
                    <Button
                      className=" border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] cursor-pointer bg-[var(--primary)] text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[var(--primary)]/90"
                      size={"lg"}
                    >
                      Visit Podcast
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcast2;
