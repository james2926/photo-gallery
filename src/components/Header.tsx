"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, []);

  return (
    <header className="relative w-full flex justify-center md:p-10 p-4 z-0 md:h-[1219px] h-[900px]">
      <div className="absolute inset-0">
        <Image
          src="/images/header.png"
          alt="Blurred face"
          width={974.74}
          height={0}
          className="object-cover w-full md:h-[1219px] h-[900px]"
          unoptimized
          ref={imageRef}
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            setImageHeight(target.clientHeight);
          }}
        />
      </div>

      <div className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="absolute top-6 right-6 z-20">
          <Image
            src={`/images/hamburger.svg`}
            alt="Hamburger"
            width={119}
            height={40}
            className="object-cover h-auto"
            unoptimized
          />
        </div>

        <div className="absolute mt-14 md:mt-0 md:relative md:top-auto z-20">
          <Image
            src={`/images/logo.png`}
            alt="logo"
            width={662}
            height={0}
            className="object-cover h-auto z-10 md:w-[662px] w-[330px] mr-8 md:mr-0"
            unoptimized
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:absolute bottom-6 left-0 right-0 flex flex-col md:flex-row items-start justify-between md:px-6 z-20 md:mt-0 mt-[500px] mr-10 md:mr-0"
        >
          <h4
            className="text-white font-semibold text-xl text-[42px] md:text-left"
            style={{ lineHeight: "42px" }}
          >
            <span className="hidden md:inline">
              DESIGN STUDIO BASED <br /> IN OSAKA — TOKYO
            </span>
            <span className="md:hidden">
              DESIGN STUDIO <br /> BASED IN OSAKA <br />— TOKYO
            </span>
          </h4>

          <button className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full text-white text-md md:text-lg font-semibold hover:bg-white hover:text-black transition-all">
            Get in Touch <ArrowUpRight size={20} />
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
