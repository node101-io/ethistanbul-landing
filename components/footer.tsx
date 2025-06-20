"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Determine scroll container element synchronously on client
  const scrollContainerEl =
    typeof window !== "undefined"
      ? (document.getElementById("scrollable") as HTMLDivElement | null)
      : null;

  const { scrollYProgress } = useScroll({
    container: scrollContainerEl ? { current: scrollContainerEl } : undefined,
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const overlay = useTransform(scrollYProgress, [0, 0.6], [1.4, 0]);

  return (
    <motion.footer
      id="faq"
      ref={containerRef}
      className="relative flex flex-col z-30 max-h-[40vh] min-h-[40vh] w-full bg-[#D5FFCA] overflow-hidden"
    >
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-black pointer-events-none z-10"
      />

      <motion.div className="relative w-full flex flex-col items-center justify-between pb-6 md:pb-10 h-[42dvh] min-h-[320px]">
        <div className="w-full px-4 md:px-10 py-8">
          <motion.div
            ref={titleRef}
            style={{ x }}
            className="relative hover-title select-none"
          >
            <h1 className="relative z-10 text-[#B996FF] text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[11rem] font-black leading-none tracking-tight transition-all duration-200">
              LIVE ISTANBUL
            </h1>
          </motion.div>

          <motion.p
            style={{ x: useTransform(scrollYProgress, [0, 1], [40, 0]) }}
            className="mt-2 text-[#B996FF] text-lg sm:text-2xl md:text-3xl font-semibold tracking-wider"
          >
            MOVE TO ITS RHYTHM.
          </motion.p>
        </div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, 0]) }}
          className="w-full mb-16 px-4 md:px-10 mt-auto flex flex-row justify-between items-center gap-4 text-xs sm:text-base text-[#A374FF] font-medium"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            href="https://www.figma.com/design/DMg8MPKWMPMRLx3ZKY6VSi/ETHIstanbul-Brand-Kit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#B996FF] transition-all"
          >
            Brand Kit
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            href="mailto:hello@ethistanbul.io"
            className="hover:text-[#B996FF] transition-all"
          >
            hello@ethistanbul.io
          </motion.a>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.13 }}
              href="https://x.com/ETHIstanbul_io"
              className="hover:text-[#B996FF] transition-all"
              aria-label="X"
            >
              X
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.13 }}
              href="https://t.me/ETHIstanbul_io"
              className="hover:text-[#B996FF] transition-all"
              aria-label="Telegram"
            >
              Telegram
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
