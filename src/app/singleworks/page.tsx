"use client";

import SubHeader from "@/components/SubHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SingleWork() {
  return (
    <>
      <SubHeader />
      <section className="flex flex-col items-center bg-black text-white min-h-screen md:px-10 px-4 md:pt-16 pt-8 md:pb-[250px] pb-[120px] md:space-y-14 space-y-10">
        <h1 className="text-[103px] md:text-[349px] md:leading-[284.2px] leading-[104px] font-semibold text-start tracking-[-0.04em] mb-8">
          CHERRY PICKS®
        </h1>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full md:space-y-0 space-y-8">
          <h4 className="text-[42px] leading-[42px] text-gray-500">
            PHOTOGRAPHER BASED <br /> IN OSAKA — TOKYO
          </h4>
          <div className="flex md:flex-row flex-col md:items-center items-start md:gap-x-4 gap-x-0 md:space-y-0 space-y-4">
            <div className="flex flex-row md:gap-x-4 gap-x-4">
              <button className="h-[50px] w-[140px] text-[16px] leading-[34px] font-bold border-2 tracking-[0.02em] border-gray-500 rounded-2xl text-gray-500 hover:bg-white hover:text-black transition-all opacity-75">
                MARCH 2088
              </button>
              <button className="h-[50px] w-[140px] text-[16px] leading-[34px] font-bold border-2 tracking-[0.02em] border-gray-500 rounded-2xl text-gray-500 hover:bg-white hover:text-black transition-all opacity-75">
                FASHION
              </button>
            </div>
            <button className="h-[50px] w-[180px] text-[16px] leading-[34px] font-bold border-2 tracking-[0.02em] gap-x-8 border-gray-500 rounded-2xl text-gray-500 hover:bg-white hover:text-black transition-all opacity-75">
              LIVE REVIEW
            </button>
          </div>
        </div>
        <Image
          src="/images/singleworks/single-works1.png"
          alt="singleworks1"
          width={1000}
          height={750}
          className="w-full object-cover md:h-[750px] h-[450px] rounded-xl"
          unoptimized
        />
        <div className="flex flex-col items-center justify-center md:w-[586px] w-full md:py-20 py-10 space-y-6">
          <h4 className="text-[42px] leading-[42px] tracking-[-0.02em] uppercase text-start font-semibold">
            <span className="md:hidden">
              The client's <br />
              goal was to <br />
              create a brand <br /> identity that
              <br /> would resonate
              <br /> with <br />
              environmenta
              <br />
              lly conscious <br />
              consumers and <br />
              help position.
            </span>
            <span className="hidden md:inline">
              The client's goal was to
              <br /> create a brand identity that
              <br /> would resonate with
              <br /> environmentally conscious
              <br /> consumers and help
              <br /> position.
            </span>
          </h4>
          <p className="text-2xl leading-[30px] tracking-[-0.02em] text-gray-500">
            <span className="md:hidden">
              The client's goal was to create a <br />
              brand identity that would resonate <br />
              with environmentally conscious <br />
              consumers and help position their <br />
              business as a leader in sustainable <br />
              practices. Objectives included <br />
              increasing brand awareness and <br />
              driving customer engagement.
            </span>
            <span className="hidden md:inline">
              The client's goal was to create a brand identity that would
              resonate with environmentally conscious consumers and help
              position their business as a leader in sustainable practices.
              Objectives included increasing brand awareness and driving
              customer engagement.
            </span>
          </p>
        </div>
        <Image
          src="/images/singleworks/single-works2.png"
          alt="singleworks2"
          width={1000}
          height={705}
          className="w-full object-cover md:h-[705px] h-[400px] rounded-xl"
          unoptimized
        />
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 w-full md:gap-y-0 gap-y-10">
          <Image
            src="/images/singleworks/single-works3.png"
            alt="singleworks3"
            width={1000}
            height={705}
            className="w-full object-cover"
            unoptimized
          />
          <Image
            src="/images/singleworks/single-works4.png"
            alt="singleworks4"
            width={1000}
            height={705}
            className="w-full object-cover"
            unoptimized
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
