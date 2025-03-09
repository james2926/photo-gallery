"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaDribbble, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, []);

  return (
    <header
      className={`relative w-full flex justify-center md:p-10 p-4 z-0 md:h-[1219px] h-[900px]
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/header.png"
          alt="Blurred face"
          width={974.74}
          height={0}
          className="object-cover w-full md:h-[1219px] h-[900px]"
          unoptimized
          ref={imageRef}
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            setImageHeight(target.clientHeight);
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="w-full flex flex-col md:flex-row items-start md:justify-between">
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
              height={40}
              className="object-cover h-auto"
              onClick={() => setIsMenuOpen(true)}
              unoptimized
            />
          )}
        </div>

        <div className="absolute mt-14 md:mt-0 md:relative md:top-auto z-20">
          <Image
            src={`/images/logo.png`}
            alt="logo"
            width={662}
            height={0}
            className="object-cover h-auto z-10 md:w-[662px] w-[330px] mr-8 md:mr-0"
            unoptimized
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:absolute md:bottom-6 bottom-0 left-0 right-0 flex flex-col md:flex-row items-start justify-between md:px-6 z-20 md:mt-0 mt-[500px] mr-10 md:mr-0"
        >
          <h4 className="text-white font-semibold text-[42px] leading-[42px] md:text-left tracking-[-0.02em]">
            <span className="hidden md:inline">
              DESIGN STUDIO BASED <br /> IN OSAKA — TOKYO
            </span>
            <span className="md:hidden">
              DESIGN STUDIO <br /> BASED IN OSAKA <br />— TOKYO
            </span>
          </h4>

          <Link
            href="/contact"
            className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 border-2 border-white rounded-2xl text-white text-md md:text-lg font-semibold hover:bg-white hover:text-black transition-all"
          >
            Get in Touch <ArrowUpRight size={20} />
          </Link>
        </motion.div>
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
    </header>
  );
};

export default Header;
