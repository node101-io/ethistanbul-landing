"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FooterImage1 from "@/assets/footer_image.webp";

const FooterImage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -450]);

  return (
    <motion.div
      ref={container}
      style={{ y }}
      className="relative w-full h-[65vh] z-20"
    >
      <Image
        src={FooterImage1}
        alt="Footer"
        fill
        className="object-cover rounded-none"
      />
    </motion.div>
  );
};

export default FooterImage;
