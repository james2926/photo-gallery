import React from "react";
import Image from "next/image";

const ContentSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-black text-white py-[250px] sm:py-[350px] px-10">
      <div className="items-center">
        <h1 className="font-semibold leading-tight text-[100px] md:text-[300px]">
          PIXEL OBSESSION
        </h1>
        <div className="flex items-center mt-4">
          <span
            className="text-5xl font-semibold text-gray-500"
            style={{ fontSize: "250px" }}
          >
            — SINCE
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span
            className="text-7xl font-bold text-gray-500"
            style={{ fontSize: "250px" }}
          >
            1996
          </span>
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full ml-4"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
