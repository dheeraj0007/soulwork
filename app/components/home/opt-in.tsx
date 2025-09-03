import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

function OptIn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    first_name: "",
    instagram_handle: "",
    email_address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.first_name || !formData.email_address) {
      alert("Please fill in your first name and email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Redirect to ConvertKit with form data
      const convertKitUrl = "https://soulwork.kit.com/6ecb3fe716";
      const params = new URLSearchParams({
        first_name: formData.first_name,
        instagram_handle: formData.instagram_handle,
        email_address: formData.email_address
      });
      
      window.open(`${convertKitUrl}?${params.toString()}`, '_blank');
      
      // Clear form after successful submission
      setFormData({
        first_name: "",
        instagram_handle: "",
        email_address: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
                className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black "
              />
              <Input
                type="text"
                name="instagram_handle"
                placeholder="Instagram handle"
                value={formData.instagram_handle}
                onChange={handleInputChange}
                className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black "
              />
            </div>
            <Input
              type="email"
              name="email_address"
              placeholder="Enter your email"
              value={formData.email_address}
              onChange={handleInputChange}
              required
              className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black "
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[var(--primary)]/80 border-[1px] border-[var(--secondary)] uppercase w-full text-white px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 disabled:opacity-50"
              size={"lg"}
            >
              {isSubmitting ? "Submitting..." : "Get Free Training"}
            </Button>
          </form>
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
