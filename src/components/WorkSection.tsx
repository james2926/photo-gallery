"use client";

import WorkCard from "./WorkCard";
import { motion } from "framer-motion";

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

const WorksSection = () => {
  return (
    <section className="bg-black py-16 px-10">
      <div className="flex items-start justify-between">
        <h2 className="text-white font-bold" style={{ fontSize: "100px" }}>
          WORKS
        </h2>
        <h4 className="text-white" style={{ fontSize: "42px" }}>
          PHOTOGRAPHER BASED <br /> IN OSAKA — TOKYO
        </h4>
      </div>
      <div className="grid gap-10 md:grid-cols-1">
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
  );
};

export default WorksSection;
