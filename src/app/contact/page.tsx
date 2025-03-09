"use client";

import Footer from "@/components/Footer";
import SubHeader from "@/components/SubHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <SubHeader />
      <div className="bg-black md:px-10 px-4 md:pt-16 pt-8 md:pb-[250px] pb-[120px] md:space-y-20 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center md:space-y-16 space-y-8"
        >
          <div className="w-full">
            <h1 className="text-white md:text-[269px] text-[80px] md:leading-[213px] leading-[76px] tracking-[-0.04em] font-semibold uppercase">
              get in <br />
              touch
            </h1>
          </div>
          <Image
            src="/images/contact/contact-bg.png"
            alt="contact-bg"
            width={100}
            height={650}
            className="w-full md:h-[650px] h-[350px] object-cover rounded-2xl opacity-70"
            unoptimized
          />
        </motion.section>
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          <div className="w-full grid md:grid-cols-2 md:gap-[120px] md:space-y-0 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-[42px] leading-[42px] font-semibold">
                HAVE AN IDEA? LET ME KNOW <br />
                WHAT’S ON YOUR MIND. <br />
                I’LL REPLY WITHIN 12 HOURS.
              </h2>
              <p className="text-gray-500 mt-4 text-base leading-[30px] tracking-[0.02em]">
                {`The client's goal was to create a brand identity that would
                resonate with environmentally conscious consumers and help
                position their business as a leader.`}
              </p>
              <div className="flex md:flex-row flex-col items-start gap-4">
                <div className="flex flex-row gap-4">
                  <button className="border-2 border-gray-500 text-gray-500 text-base leading-[34px] tracking-[0.02em] px-[20px] py-2 rounded-2xl hover:bg-gray-800">
                    DRIBBBLE
                  </button>
                  <button className="border-2 border-gray-500 text-gray-500 text-base leading-[34px] tracking-[0.02em] px-[20px] py-2 rounded-2xl hover:bg-gray-800">
                    BEHANCE
                  </button>
                </div>
                <button className="border-2 border-gray-500 text-gray-500 text-base leading-[34px] tracking-[0.02em] px-[20px] py-2 rounded-2xl hover:bg-gray-800">
                  MEDIUM
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black rounded-md"
            >
              <form className="space-y-10">
                <div className="space-y-8">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white placeholder-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white placeholder-gray-500"
                  />
                  <select className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white text-gray-500">
                    <option className="bg-black text-white">Department</option>
                    <option className="bg-black text-white">Design</option>
                    <option className="bg-black text-white">Development</option>
                    <option className="bg-black text-white">Marketing</option>
                  </select>
                  <textarea
                    placeholder="Message"
                    className="w-full h-[150px] bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white placeholder-gray-500"
                    rows={3}
                  />
                </div>
                <button className="w-full text-2xl bg-white text-black font-semibold py-3 px-7 rounded-md hover:bg-gray-300">
                  SEND
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
