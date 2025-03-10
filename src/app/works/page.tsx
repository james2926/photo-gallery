"use client";

import SubHeader from "@/components/SubHeader";
import { useState, useEffect } from "react";
import WorkCard from "@/components/WorkCard";
import { motion } from "framer-motion";
import clsx from "clsx";
import Footer from "@/components/Footer";

const categories = ["ALL", "FASHION", "ART", "CINEMA", "ADVERTISEMENT"];

interface Work {
  src: string;
  category: string;
  title: string;
}

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const abortController = new AbortController();
      const categoryParam =
        activeCategory === "ALL" ? "all" : activeCategory.toLowerCase();
      const response = await fetch(`/api/works?category=${categoryParam}`, {
        signal: abortController.signal,
      });
      const data = await response.json();
      setWorks(data);
    };

    fetchWorks();
  }, [activeCategory]);

  return (
    <>
      <SubHeader />
      <section className="flex flex-col bg-black text-white min-h-screen md:px-10 px-4 md:py-8 pt-16 pb-[260px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        <div className="grid gap-10 mt-10 md:grid-cols-1">
          {works.map((work: Work, index: number) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
