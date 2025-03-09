"use client";

import Image from "next/image";

const SubHeader = () => {
  return (
    <div className="w-full bg-black md:py-8 py-6 md:px-10 px-4 flex flex-row justify-between md:items-center items-start md:h-24 h-[76.37px]">
      <Image
        src="/images/subheader-logo.png"
        alt="BLURR®"
        width={100}
        height={30}
        className="object-contain"
        unoptimized
      />

      <Image
        src="/images/hamburger.svg"
        alt="Menu"
        width={119}
        height={24}
        className="object-contain"
        unoptimized
      />
    </div>
  );
};

export default SubHeader;
