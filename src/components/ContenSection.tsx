import React from "react";
import Image from "next/image";

const ContentSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start md:items-center justify-center bg-black text-white py-[250px] md:py-[350px] md:px-10 px-4">
      <div className="items-center">
        <h2 className="font-semibold leading-tight text-[100px] md:text-[300px]">
          <span className="hidden md:inline">PIXEL OBSESSION</span>
          <span className="md:hidden">
            PIXEL OBSESS
            <br />
            ION
          </span>
        </h2>
        <div className="flex items-center mt-4">
          <span className="text-5xl font-semibold text-gray-500 md:text-[260px] text-[100px]">
            — SINCE
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-7xl font-bold text-gray-500 md:text-[250px] text-[100px]">
            1996
          </span>
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full ml-4 md:w-[200px] md:h-[200px] w-[83px] h-[83px]"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
