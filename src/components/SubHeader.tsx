"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaDribbble, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { X } from "lucide-react";
const SubHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-black md:py-8 py-6 md:px-10 px-4 flex flex-row justify-between md:items-center items-start md:h-24 h-[76.37px]">
        <Image
          src="/images/subheader-logo.png"
          alt="BLURR®"
          width={100}
          height={30}
          className="object-contain"
          unoptimized
        />
        <div className="absolute top-6 right-6 z-50 cursor-pointer">
          {isMenuOpen ? (
            <X
              size={60}
              color="white"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer z-50 hover:rotate-180 transition-all duration-500"
            />
          ) : (
            <Image
              src={`/images/hamburger.svg`}
              alt="Hamburger"
              width={119}
              height={24}
              className="object-cover h-auto"
              onClick={() => setIsMenuOpen(true)}
              unoptimized
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black text-white flex flex-col items-start justify-between space-y-6 px-10 z-40 pt-24 pb-10"
          >
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-7xl font-semibold"
            >
              <ul className="space-y-4">
                <li className="hover:blur-sm hover:translate-x-6 hover:duration-300 cursor-pointer">
                  <Link href="/">HOME</Link>
                </li>
                <li className="hover:blur-sm hover:translate-x-6 hover:duration-300 cursor-pointer">
                  <Link href="/works">WORKS</Link>
                </li>
                <li className="hover:blur-sm hover:translate-x-6 hover:duration-300 cursor-pointer">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="hover:blur-sm hover:translate-x-6 hover:duration-300 cursor-pointer">
                  <Link href="/contact">CONTACT</Link>
                </li>
                <li className="hover:blur-sm hover:translate-x-6 hover:duration-300 cursor-pointer">
                  <Link href="/blog">BLOG</Link>
                </li>
                {/* <li className="hover:opacity-70 cursor-pointer">
              <Link href="/buy-template">BUY TEMPLATE</Link>
            </li> */}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <div className="mt-10 text-gray-500 font-semibold text-sm opacity-80 gap-4">
                <p>1132 CLONIFY STREET, NEW YORK, 12256</p>
                <p>TEL: +951 0475 1521</p>
              </div>
              <div className="flex space-x-10">
                <a
                  href="https://www.instagram.com/blurr.io/"
                  aria-label="Instagram"
                  className="opacity-60 hover:opacity-100 transition"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/blurr.io/"
                  aria-label="Dribbble"
                  className="opacity-60 hover:opacity-100 transition"
                >
                  <FaDribbble className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/blurr.io/"
                  aria-label="LinkedIn"
                  className="opacity-60 hover:opacity-100 transition"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SubHeader;
