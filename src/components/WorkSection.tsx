"use client";

import { useState, useEffect } from "react";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";

interface Work {
  src: string;
  category: string;
  title: string;
}

const WorksSection = () => {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const abortController = new AbortController();
      const response = await fetch(`/api/works?category=all`, {
        signal: abortController.signal,
      });
      const data = await response.json();
      setWorks(data);
    };

    fetchWorks();
  }, []);

  return (
    <section className="bg-black py-16 md:px-10 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <h2 className="text-white font-bold md:text-[100px] text-[80px]">
          WORKS
        </h2>
        <h4
          className="text-gray-500 font-semibold"
          style={{ fontSize: "42px", lineHeight: "1" }}
        >
          <span className="hidden md:inline">
            PHOTOGRAPHER BASED <br /> IN OSAKA — TOKYO
          </span>
          <span className="md:hidden">
            PHOTOGRAPHER <br /> BASED IN OSAKA <br />— TOKYO
          </span>
        </h4>
      </div>
      <div className="grid gap-10 md:grid-cols-1">
        {works.map((work: any, index: number) => (
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
  );
};

export default WorksSection;
