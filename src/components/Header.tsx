"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight((imageRef.current as HTMLImageElement).clientHeight);
    }
  }, []);
  return (
    <header
      className="relative w-full flex justify-center p-10 z-0"
      style={{ height: imageHeight }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/header.png"
          alt="Blurred face"
          width={974.74}
          height={0}
          className="object-cover sm:w-full h-[100vh] sm:h-auto"
          unoptimized
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            setImageHeight(target.clientHeight);
          }}
        />
        {/* <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/50 to-transparent" /> */}
      </div>
      <div className="w-full overflow-hidden flex items-start justify-between">
        <Image
          src={`/images/logo.png`}
          alt="logo"
          width={662}
          height={0}
          className="object-cover h-auto z-10"
          unoptimized
        />
        <Image
          src={`/images/hamburger.svg`}
          alt="Hamburger"
          width={119}
          height={0}
          className="object-cover h-auto z-10"
          unoptimized
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-6 left-0 right-0 flex justify-between items-center w-full px-6 mt-10"
      >
        <h4
          className="text-white font-semibold"
          style={{ fontSize: "42px", lineHeight: "1" }}
        >
          DESIGN STUDIO BASED <br /> IN OSAKA — TOKYO
        </h4>

        <button className="flex items-start gap-2 px-5 py-2 border-2 border-white rounded-full text-white text-lg font-semibold hover:bg-white hover:text-black transition-all">
          Get in Touch <ArrowUpRight size={20} />
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
