import { motion } from "framer-motion";
import React from "react";

const AnimatedHeading = () => {
  const text1 = "BUILD YOUR OWN";
  const text2 = "NEW ROME";
  const text3 = "IN TECH";

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.03,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  };

  const renderAnimatedText = (text: string, className: string = "") => (
    <motion.span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-8 sm:mb-12 md:mb-16 overflow-visible"
    >
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[110px] mb-4 font-bold relative">
        <div className="relative">
          {renderAnimatedText(text1)}
          <br />
          <div className="inline-flex items-center gap-3">
            {renderAnimatedText(text2, "text-[#9F62FF]")}
            {renderAnimatedText(text3)}
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 blur-3xl -z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        />
      </h2>
    </motion.div>
  );
};

export default AnimatedHeading;
