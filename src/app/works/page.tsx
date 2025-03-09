"use client";

import SubHeader from "@/components/SubHeader";
import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import { motion } from "framer-motion";
import clsx from "clsx";
import Footer from "@/components/Footer";

const categories = ["ALL", "FASHION", "ART", "CINEMA", "ADVERTISEMENT"];

const works = [
  {
    title: "KOZMO",
    imageSrc: "/images/Works Card.png",
    description: "AI RESEARCH TOOL",
  },
  {
    title: "KOZMO",
    imageSrc: "/images/Works Card1.png",
    description: "AI RESEARCH TOOL",
  },
  {
    title: "KOZMO",
    imageSrc: "/images/Works Card2.png",
    description: "AI RESEARCH TOOL",
  },
];
export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <>
      <SubHeader />
      <section className="flex flex-col bg-black text-white min-h-screen md:px-10 px-4 md:py-8 pt-16 pb-[260px]">
        <h1 className="text-[106px] md:text-[405px] md:leading-[327.5px] leading-[93.6px] font-semibold text-center tracking-[-0.04em]">
          WORKS
        </h1>

        <div className="flex md:flex-row flex-col md:justify-center justify-start items-start md:space-x-6 space-y-0 md:mt-6 mt-4 text-sm uppercase tracking-wide">
          {categories.map((category) => (
            <button
              key={category}
              className={clsx(
                "transition-all duration-200 text-[20px] leading-[34px]",
                activeCategory === category
                  ? "text-white font-semibold"
                  : "text-gray-500 hover:text-gray-300"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-10 mt-10 md:grid-cols-1">
          {works.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={index}
            >
              <WorkCard key={index} {...work} />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
