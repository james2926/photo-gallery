import { FaInstagram, FaDribbble, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="lg:w-1/4 w-full md:px-10 md:py-10 px-4 py-10">
          <Image
            src="/images/logo.png"
            alt="BLURR Logo"
            width={268}
            height={0}
            className="h-auto"
            unoptimized
          />
        </div>
        <div className="lg:w-3/4 border-l border-gray-800 flex flex-col">
          <div className="font-semibold flex items-end md:p-10 p-4 h-[300px] md:ml-auto ml-0 text-[42px] leading-[42px]">
            HELLO@
            <br />
            BLURR.IO
          </div>

          <div className="flex flex-col md:flex-row justify-between md:items-center items-start md:p-10 p-4 border-t border-gray-800 space-y-6 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="#"
                aria-label="Instagram"
                className="opacity-60 hover:opacity-100 transition"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="opacity-60 hover:opacity-100 transition"
              >
                <FaDribbble className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="opacity-60 hover:opacity-100 transition"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            <div className="text-sm opacity-60">
              © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
