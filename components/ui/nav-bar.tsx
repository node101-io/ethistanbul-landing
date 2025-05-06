"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TextLogo from "@/assets/text-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ position }: { position?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);

      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const style = window.getComputedStyle(section);
        const paddingTop = parseFloat(style.paddingTop);

        const top = section.offsetTop - paddingTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(`#${id}`);
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        const lastSection = sections[sections.length - 1];
        setActiveSection(`#${lastSection.getAttribute("id")}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = id;
    } else {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const navLinks = [
    {
      label: "Overview",
      href:
        typeof window !== "undefined" && window.location.pathname !== "/"
          ? "/#overview"
          : "#overview",
    },
    // {
    //   label: "Schedule",
    //   href:
    //     typeof window !== "undefined" && window.location.pathname !== "/"
    //       ? "/#schedule"
    //       : "#schedule",
    // },
    // {
    //   label: "HackerKit",
    //   href:
    //     typeof window !== "undefined" && window.location.pathname !== "/"
    //       ? "/#hacker-kit"
    //       : "#hacker-kit",
    // },
    {
      label: "Contributors",
      href:
        typeof window !== "undefined" && window.location.pathname !== "/"
          ? "/#contributors"
          : "#contributors",
    },
    // {
    //   label: "Partners",
    //   href:
    //     typeof window !== "undefined" && window.location.pathname !== "/"
    //       ? "/#partners"
    //       : "#partners",
    // },
    // {
    //   label: "Venue",
    //   href:
    //     typeof window !== "undefined" && window.location.pathname !== "/"
    //       ? "/#venue"
    //       : "#venue",
    // },
    // {
    //   label: "Prizes",
    //   href:
    //     typeof window !== "undefined" && window.location.pathname !== "/"
    //       ? "/#prizes"
    //       : "#prizes",
    // },
    {
      label: "FAQ",
      href:
        typeof window !== "undefined" && window.location.pathname !== "/"
          ? "/#faq"
          : "#faq",
    },
  ];

  return (
    <>
      <motion.nav
        className={`w-full flex justify-center px-4 z-40 ${
          position === "top" || isScrolled
            ? "fixed top-0 py-2"
            : "absolute bottom-6"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="container max-w-7xl bg-white border-1 border-black text-black rounded-full px-6 sm:px-8 md:px-12 py-3 flex items-center justify-between"
          layout
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
          }}
        >
          <Image
            src={TextLogo}
            alt="Logo"
            width={120}
            height={40}
            className="w-24 sm:w-32 md:w-36 h-auto"
          />
          <div className="hidden lg:flex space-x-3 xl:space-x-6 items-center">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 pb-2 pt-1 rounded-full cursor-pointer ${
                  activeSection === link.href
                    ? "bg-[#D1BAFF] border border-black"
                    : "hover:bg-purple-100"
                }`}
                animate={{
                  backgroundColor:
                    activeSection === link.href ? "#D1BAFF" : "transparent",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white text-black z-50 lg:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="container mx-auto py-8 px-6 relative h-full">
              <motion.button
                className="absolute top-4 right-4 p-2 z-50"
                onClick={() => setIsMobileMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <div className="flex flex-col justify-center h-full pt-12">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-2xl font-medium py-4 px-4 hover:bg-purple-100 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
