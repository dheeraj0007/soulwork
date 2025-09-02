"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Desktop & Mobile Navigation Bar */}
      <nav className="fixed top-0 w-full backdrop-blur-sm z-50 bg-black">
        <div className="max-w-9xl mx-auto px-6 py-2 text-white">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                {" "}
                <Image
                  src={"/logo2.jpeg"}
                  width={200}
                  height={60}
                  alt="soul logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 font-medium text-lg">
              <div className="relative group">
                <Link
                  href="#"
                  className="text-white hover:text-[#c78067] transition-colors flex items-center"
                >
                  Invest
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/#ascent" className="block px-4 py-2 text-sm ">
                      The Ascent
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className=" hover:text-[#c78067] transition-colors"
              >
                Film
              </Link>
              <Link
                href="https://podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
                target="_blank"
                className=" hover:text-[#c78067] transition-colors"
              >
                Podcast
              </Link>
              <Link
                href="#"
                className="  hover:text-[#c78067] transition-colors"
              >
                About
              </Link>
              <div className="relative group">
                <Link
                  href="#"
                  className="  hover:text-[#c78067] transition-colors flex items-center"
                >
                  More
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/testimonials"
                      className="block px-4 py-2 text-sm "
                    >
                      Testimonials
                    </Link>
                    <Link href="/media-kit" className="block px-4 py-2 text-sm ">
                      Media Kit
                    </Link>
                  </div>
                </div>
              </div>
              <Button
                className="bg-[var(--secondary)] hover:border-t-2 hover:border-b-0 text-white font-medium px-4 py-2 rounded-full  pt-2 border-b-2 border-[var(--primary)] "
                size={"lg"}
              >
                Free Training
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                // variant="ghost"
                size="sm"
                className="text-[var-(--secondary)] bg-[#ccc2a2]"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 scale-200" />
                ) : (
                  <Menu className="w-6 h-6 scale-200 " />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-[#f6f1eb]">
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <div className="text-xl font-bold tracking-tight text-white">
                SOUL WORK
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white p-2"
                onClick={toggleMenu}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                {/* Invest Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("invest")}
                    className="flex items-center justify-between w-full text-left text-lg  text-gray-900 hover:text-[#c78067] transition-colors border-b-[1px] border-b-[#c78067] pb-4"
                  >
                    Invest
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === "invest" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "invest" && (
                    <div className="mt-3 ml-4 space-y-3">
                      <Link
                        href="/#ascent"
                        className="block text-base  hover:text-gray-900 transition-colors"
                      >
                        The Ascent
                      </Link>
                    </div>
                  )}
                </div>

                {/* Film */}
                <div>
                  <Link
                    href="#"
                    className="block text-lg text-gray-900 hover:text-[#c78067] transition-colors border-b-[1px] border-b-[#c78067] pb-4"
                  >
                    Film
                  </Link>
                </div>

                {/* Podcast */}
                <div>
                  <Link
                    href="https://podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
                    target="_blank"
                    className="block text-lg  text-gray-900 hover:text-[#c78067] transition-colors border-b-[1px] border-b-[#c78067] pb-4"
                  >
                    Podcast
                  </Link>
                </div>

                {/* About */}
                <div>
                  <Link
                    href="#"
                    className="block text-lg  text-gray-900 hover:text-[#c78067] transition-colors border-b-[1px] border-b-[#c78067] pb-4"
                  >
                    About
                  </Link>
                </div>

                {/* More Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("more")}
                    className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-[#c78067] transition-colors border-b-[1px] border-b-[#c78067] pb-4"
                  >
                    More
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === "more" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "more" && (
                    <div className="mt-3 ml-4 space-y-3">
                      <Link
                        href="/testimonials"
                        className="block text-base  hover:text-gray-900 transition-colors"
                      >
                        Testimonials
                      </Link>
                      <Link
                        href="/media-kit"
                        className="block text-base  hover:text-gray-900 transition-colors"
                      >
                        Media Kit
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
