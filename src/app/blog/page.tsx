"use client";

import Footer from "@/components/Footer";
import SubHeader from "@/components/SubHeader";
import { motion } from "framer-motion";
import Image from "next/image";

type ImageGridProps = {
  images: { src: string; alt: string }[];
};

const images = [
  { src: "/images/blog/blog (1).png", alt: "blog-1" },
  { src: "/images/blog/blog (2).png", alt: "blog-2" },
  { src: "/images/blog/blog (3).png", alt: "blog-3" },
  { src: "/images/blog/blog (4).png", alt: "blog-4" },
  { src: "/images/blog/blog (5).png", alt: "blog-5" },
  { src: "/images/blog/blog (6).png", alt: "blog-6" },
  { src: "/images/blog/blog (7).png", alt: "blog-7" },
  { src: "/images/blog/blog (8).png", alt: "blog-8" },
  { src: "/images/blog/blog (9).png", alt: "blog-9" },
  { src: "/images/blog/blog (10).png", alt: "blog-10" },
  { src: "/images/blog/blog (11).png", alt: "blog-11" },
  { src: "/images/blog/blog (12).png", alt: "blog-12" },
];

export default function Blog() {
  return (
    <>
      <SubHeader />
      <div className="bg-black md:px-10 px-4 md:pt-16 pt-8 md:pb-[150px] pb-[120px] md:space-y-20 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h1 className="text-white md:text-[349.3px] text-[80px] md:leading-[284.2px] leading-[76px] font-semibold uppercase">
            blog
          </h1>
        </motion.div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 bg-black text-white">
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              key={index}
              className="relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={420}
                className="w-full rounded-2xl rounded-b-none border-gray-500 border-2 border-b-0"
                unoptimized
              />
              <div className="bottom-0 left-0 w-full md:p-6 p-4 border-gray-500 border-2 border-t-0 bg-black bg-opacity-50 md:text-[30px] text-2xl md:leading-[34px] text-start font-semibold rounded-b-2xl opacity-70">
                THE POWER OF VISUAL IDENTITY: HOW BRANDING TRANSFORMS BUSINESSES
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
