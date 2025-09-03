import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

// Declare ConvertKit types
declare global {
  interface Window {
    convertkit: {
      subscribeToForm: (formId: string, data: any, callback: (err: any, result: any) => void) => void;
      init: () => void;
    };
  }
}

function OptIn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    first_name: "",
    instagram_handle: "",
    email_address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load ConvertKit script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    script.onload = () => {
      // Initialize ConvertKit forms after script loads
      if (window.convertkit) {
        window.convertkit.init();
      }
    };
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted with data:", formData);
    
    // Validate required fields
    if (!formData.first_name || !formData.email_address) {
      alert("Please fill in your first name and email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting to ConvertKit...");
      
      // Use ConvertKit's JavaScript API
      if (window.convertkit) {
        window.convertkit.subscribeToForm('6ecb3fe716', {
          email_address: formData.email_address,
          first_name: formData.first_name,
          ...(formData.instagram_handle && { instagram_handle: formData.instagram_handle })
        }, (err: any, result: any) => {
          if (err) {
            console.error("ConvertKit error:", err);
            alert("There was an issue with the form submission. You'll be redirected to complete your enrollment manually.");
            window.open("https://soulwork.kit.com/6ecb3fe716", '_blank');
          } else {
            console.log("ConvertKit success:", result);
            
            // Clear our form
            setFormData({
              first_name: "",
              instagram_handle: "",
              email_address: ""
            });

            alert("Thank you! You've been successfully enrolled in SoulWork 101!");
            window.open("https://soulwork.kit.com/6ecb3fe716", '_blank');
          }
          setIsSubmitting(false);
        });
      } else {
        throw new Error("ConvertKit script not loaded");
      }
      
    } catch (error) {
      console.error("Error submitting to ConvertKit:", error);
      
      // Fallback: redirect to ConvertKit form
      alert("You'll be redirected to complete your enrollment in SoulWork 101.");
      window.open("https://soulwork.kit.com/6ecb3fe716", '_blank');
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

          {/* ConvertKit Embed Form */}
          <form 
            action="https://app.convertkit.com/forms/6ecb3fe716/subscriptions" 
            method="post" 
            className="grid gap-4"
            target="_blank"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black"
              />
              <input
                type="text"
                name="instagram_handle"
                placeholder="Instagram handle"
                className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black"
              />
            </div>
            <input
              type="email"
              name="email_address"
              placeholder="Enter your email"
              required
              className="px-4 py-5 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white placeholder:text-lg placeholder:text-black mt-4"
            />
            <button
              type="submit"
              className="bg-[var(--primary)]/80 border-[1px] border-[var(--secondary)] uppercase w-full text-white px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 mt-4"
            >
              Get Free Training
            </button>
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
