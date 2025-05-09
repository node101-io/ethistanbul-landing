"use client";
import Image from "next/image";
import React from "react";
import FooterImage from "@/assets/footer_image.webp";

const Footer = () => {
  return (
    <footer
      id="faq"
      className="h-screen flex flex-col"
    >
      <div className="relative w-full h-[65vh]">
        <Image
          src={FooterImage}
          alt="Footer"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
      </div>
      <div className="bg-[#D5FFCA] w-full flex flex-col items-center justify-between pb-4 md:pb-6 lg:pb-8 h-[40vh]">
        <div className="w-full px-4 md:px-6">
          <h1 className="text-[#B996FF] text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black mb-0 leading-none">
            LIVE ISTANBUL
          </h1>
          <p className="text-[#B996FF] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide">
            MOVE TO ITS RHYTHM.
          </p>
        </div>
        <div className="w-full mb-20 px-4 md:px-6 mt-auto flex justify-between items-center text-xs sm:text-sm text-[#A374FF]">
          <a
            href="https://www.figma.com/design/DMg8MPKWMPMRLx3ZKY6VSi/ETHIstanbul-Brand-Kit"
            target="_blank"
            className="hover:text-[#B996FF]"
          >
            Brand Kit
          </a>
          <a
            href="mailto:hello@ethistanbul.io"
            className="hover:text-[#B996FF]"
          >
            hello@ethistanbul.io
          </a>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a
              href="https://x.com/ETHIstanbul_io"
              className="hover:text-[#B996FF]"
            >
              X
            </a>
            <a
              href="https://t.me/ETHIstanbul_io"
              className="hover:text-[#B996FF]"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
