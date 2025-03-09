"use client";

import SubHeader from "@/components/SubHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
  {
    name: "International Photography Awards",
    organization: "British Photography Awards",
  },
  {
    name: "Wildlife Photographer of the Year",
    organization: "British Photography Awards",
  },
  { name: "Lucie Awards", organization: "British Photography Awards" },
  { name: "Inge Morath Award", organization: "British Photography Awards" },
  {
    name: "European Publishers Award for Photography",
    organization: "British Photography Awards",
  },
  { name: "Camera Austria Award", organization: "British Photography Awards" },
  { name: "Sheed Award", organization: "British Photography Awards" },
  {
    name: "Photographic Society of Japan Awards",
    organization: "British Photography Awards",
  },
];

export default function About() {
  return (
    <>
      <SubHeader />
      <section className="w-full flex flex-row items-center justify-stretch bg-black text-white px-4 md:px-10 md:space-y-0 space-y-8">
        <div className="w-full flex flex-col md:flex-row items-center md:gap-x-12 gap-y-8">
          <div className="items-start justify-start">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="md:text-[260px] text-[80px] md:leading-[210px] leading-[76px] font-semibold tracking-[-0.04em]"
            >
              BEYOND <br />
              THE —
              <br />
              FRAME.
            </motion.h1>
            <p className="mt-6 text-gray-400 text-lg">
              The client’s goal was to create a brand identity that would
              <br />
              resonate with environmentally conscious consumers and help
              <br />
              position their business as a leader.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 0, x: 100, scale: 0 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            className="w-full rounded-2xl overflow-hidden"
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/about/about.png"
              alt="Beyond the Frame"
              width={590}
              height={960}
              className="object-cover w-full"
              unoptimized
            />
          </motion.div>
        </div>
      </section>
      <section className="md:py-[150px] py-[120px] md:px-10 px-4">
        <div className="flex flex-col items-start justify-between md:gap-y-6 gap-y-10">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-2xl leading-[30px] font-semibold tracking-[-0.02em] text-gray-500"
          >
            PHOTOGRAPHER BASED IN <br />
            OSAKA — TOKYO
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="md:flex md:flex-row flex-col items-center justify-between gap-x-12 w-full md:h-12 grid grid-cols-2 md:space-x-0 gap-y-12"
          >
            <Image
              src="/images/about/logo1.png"
              width={100}
              height={100}
              alt="logo1"
              className="opacity-50"
              unoptimized
            />
            <Image
              src="/images/about/logo2.png"
              width={100}
              height={100}
              alt="logo2"
              className="opacity-50"
              unoptimized
            />
            <Image
              src="/images/about/logo3.png"
              width={100}
              height={100}
              alt="logo3"
              className="opacity-50"
              unoptimized
            />
            <Image
              src="/images/about/logo4.png"
              width={100}
              height={100}
              alt="logo4"
              className="opacity-50"
              unoptimized
            />
            <Image
              src="/images/about/logo5.png"
              width={100}
              height={100}
              alt="logo5"
              className="opacity-50"
              unoptimized
            />
            <Image
              src="/images/about/logo6.png"
              width={100}
              height={100}
              alt="logo6"
              className="opacity-50"
              unoptimized
            />
            <Image
              src="/images/about/logo7.png"
              width={100}
              height={100}
              alt="logo7"
              className="opacity-50"
              unoptimized
            />
            <Image
              src="/images/about/logo8.png"
              width={100}
              height={100}
              alt="logo8"
              className="opacity-50"
              unoptimized
            />
          </motion.div>
        </div>
      </section>
      <section className="py-[120px] md:px-10 px-4 space-y-6 md:grid md:grid-cols-2 md:space-x-20">
        <div className="flex flex-col items-start justify-center gap-y-6 h-auto">
          <h3 className="text-[80px] leading-[76px] font-semibold tracking-[-0.03em]">
            <span className="hidden md:inline">
              RESONATE. <br /> FRAME.
            </span>
            <span className="md:hidden">
              RESONA
              <br />
              TE.
              <br /> FRAME.
            </span>
          </h3>
          <p className="text-gray-500 text-2xl leading-[30px] tracking-[-0.02em]">
            The client's goal was to create a brand identity that would resonate
            with environmentally conscious consumers and help position their
            business as a leader in sustainable practices. Objectives included
            increasing brand awareness and driving customer engagement.
            <br />
            <br />
            The client's goal was to create a brand identity that would resonate
            with environmentally conscious consumers and help position their
            business as a leader in sustainable practices. Objectives included
            increasing brand awareness and driving customer engagement.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          className="bg-black flex items-end"
        >
          <div className="relative max-w-4xl w-full h-auto">
            <div className="absolute flex items-end left-0 bottom-0 md:top-16 w-2/3 md:w-1/2 rounded-2xl overflow-hidden">
              <Image
                src="/images/about/responate-frame1.png"
                alt="Gradient Abstract"
                width={442}
                height={428}
                className="w-full h-auto"
                unoptimized
              />
            </div>

            <div className="relative ml-auto w-3/4 md:w-2/3 rounded-2xl overflow-hidden">
              <Image
                src="/images/about/responate-frame2.png"
                alt="Textured Swirls"
                width={442}
                height={572}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </section>
      <section className="bg-black text-white pt-[120px] pb-[250px] md:px-10 px-4">
        <div className="mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-[80px] leading-[76px] font-semibold tracking-[-0.03em]"
            >
              AWARDS
            </motion.h2>
            <motion.h4
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-gray-500 text-2xl text-[42px] leading-[42px] font-semibold tracking-[-0.02em] mt-4"
            >
              <span className="hidden md:inline">
                PHOTOGRAPHER BASED <br />
                IN OSAKA — TOKYO
              </span>
              <span className="md:hidden">
                PHOTOGRAPHER <br />
                BASED IN OSAKA <br />— TOKYO
              </span>
            </motion.h4>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="md:w-2/3"
          >
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col justify-between py-6 border-b border-gray-700 md:space-y-0 space-y-4"
              >
                <span className="text-2xl leading-[30px] text-gray-500 text-wrap">
                  {award.name}
                </span>
                <span className="text-2xl leading-[30px] text-gray-500 text-wrap">
                  {award.organization}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
