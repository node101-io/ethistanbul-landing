"use client";

import React, { useEffect } from "react";

interface ClientPageWrapperProps {
  children: React.ReactNode;
}

const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollTo = sessionStorage.getItem("scrollToSection");
      if (scrollTo) {
        const section = document.querySelector(scrollTo);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
        sessionStorage.removeItem("scrollToSection");
        return;
      }
      if (window.location.hash) {
        const id = window.location.hash;
        const section = document.querySelector(id);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    }
  }, []);

  return <>{children}</>;
};

export default ClientPageWrapper;