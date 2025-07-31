"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/ui/nav-bar";

type Category = "Code of Conduct" | "Privacy Policy";

interface SectionContent {
  title?: string;
  content: string | React.JSX.Element;
}

const ConductPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Code of Conduct");
  const contentRefs = useRef<Record<Category, HTMLDivElement | null>>({
    "Code of Conduct": null,
    "Privacy Policy": null,
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = ["Code of Conduct", "Privacy Policy"];

  const contentData: Record<Category, SectionContent[]> = {
    "Code of Conduct": [
      {
        content: (
          <div className="rounded-3xl py-4">
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-6">
              ETHIstanbul Code of Conduct
            </h3>

            <div className="space-y-4 text-gray-800">
              <p>Dear Participant,</p>

              <p>
                ETHIstanbul is an event by the community, for the community. Its purpose is to bring builders together,
                foster collaboration, and create space for meaningful exchange. The ETHIstanbul team reserves the right
                to ask anyone to leave if their behavior is not respectful, constructive, or aligned with our shared values.
                We will not tolerate harassment or discrimination of any kind.
              </p>

              <p>
                We are committed to creating a safe and welcoming environment for everyone regardless of background,
                education, religion, beliefs, abilities, gender, or sexual identity. If someone disregards these values,
                we will take appropriate action.
              </p>

              <p>
                Please don't aggressively self-promote or shill. If you are promoting malicious or deceptive content,
                we will act accordingly.
              </p>

              <p>
                ETHIstanbul takes place in Istanbul, Türkiye. We ask all participants to comply with local laws and
                to respect the venues and spaces we gather in.
              </p>

              <p>
                If you witness behavior that negatively impacts others' ability to enjoy ETHIstanbul, please speak to
                a staff member (they will be clearly identifiable). You will be connected with someone who can handle
                your report privately and appropriately.
              </p>

              <p>
                We're glad to have you with us. Don't hesitate to reach out to our team, we're here to help and ensure
                ETHIstanbul is a great experience for everyone.
              </p>
            </div>
          </div>
        ),
      },
    ],
    "Privacy Policy": [
      {
        content: (
          <div className="rounded-3xl py-4">
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-4">
              Privacy Policy
            </h3>

            <div className="space-y-4 text-gray-800">
              <div>
                <p className="text-sm text-gray-600 mb-2">July 2025 - Version 1.0</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Notice</h4>
                <p>
                  The ETHIstanbul website is operated by the ETHIstanbul organizing team. This privacy policy outlines
                  how we handle and protect personal data in accordance with the General Data Protection Regulation (GDPR).
                </p>
                <p className="mt-2">You can reach us at: contact@ethistanbul.org</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Definitions</h4>
                <p className="mb-2">Throughout this policy:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Personal Data</strong> refers to any information relating to an identifiable person (GDPR Article 4).</li>
                  <li><strong>ETHIstanbul, We, Us</strong> refers to the organizing team responsible for the ETHIstanbul event.</li>
                  <li><strong>You, Participant</strong> refers to any individual whose data is collected or processed during participation in ETHIstanbul as an attendee, sponsor, speaker, or team member.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Data Collection and Use</h4>
                <p className="mb-4">We only collect data necessary to support your participation, including:</p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Action</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Data Collected</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Purpose</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Legal Basis</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm">Ticket Purchase</td>
                        <td className="px-4 py-3 text-sm">Name, email, billing info</td>
                        <td className="px-4 py-3 text-sm">Issue tickets, confirm payment</td>
                        <td className="px-4 py-3 text-sm">Contract</td>
                        <td className="px-4 py-3 text-sm">3 months post-event (active), 10 years (archival)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Speaker/Sponsor Participation</td>
                        <td className="px-4 py-3 text-sm">Name, contact info</td>
                        <td className="px-4 py-3 text-sm">Coordinate logistics, communication</td>
                        <td className="px-4 py-3 text-sm">Contract</td>
                        <td className="px-4 py-3 text-sm">3 months post-event (active), 10 years (archival)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Customer Support Requests</td>
                        <td className="px-4 py-3 text-sm">Name, email</td>
                        <td className="px-4 py-3 text-sm">Answer inquiries, ensure quality</td>
                        <td className="px-4 py-3 text-sm">Legitimate interest</td>
                        <td className="px-4 py-3 text-sm">2 years active, 5 years archive</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Newsletter Signup</td>
                        <td className="px-4 py-3 text-sm">Email, logs</td>
                        <td className="px-4 py-3 text-sm">Send updates and info</td>
                        <td className="px-4 py-3 text-sm">Consent</td>
                        <td className="px-4 py-3 text-sm">Until unsubscribed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  We may use analytics (e.g., cookies, IP address) to improve the website. These are collected based
                  on legitimate interest and retained up to 24 months.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Sharing Your Data</h4>
                <p>
                  We may share data with service providers assisting with logistics, communication, and hosting but
                  only to the extent needed and under strict compliance with GDPR. In rare cases, your data may be
                  transferred outside the EEA under approved legal safeguards.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Your Rights</h4>
                <p className="mb-2">You may:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Access your data</li>
                  <li>Request corrections</li>
                  <li>Ask for deletion</li>
                  <li>Limit processing</li>
                  <li>Withdraw consent (e.g., from newsletters)</li>
                </ul>
                <p className="mt-4">
                  Email us at contact@ethistanbul.org to exercise your rights. You may also contact the Turkish Data
                  Protection Authority (KVKK) if needed.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Security</h4>
                <p>
                  We use industry-standard measures to protect your data. In the unlikely event of a high-risk breach,
                  we will inform both the authorities and affected individuals within 72 hours.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Cookies</h4>
                <p>
                  We use cookies to improve website experience. Non-essential cookies are only used with your consent,
                  in compliance with EU and Turkish data regulations.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  };

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    if (contentRefs.current[category]) {
      contentRefs.current[category]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute(
              "data-category"
            ) as Category;
            if (category) {
              setActiveCategory(category);
            }
          }
        });
      },
      {
        threshold: 0.2,
        root: scrollContainerRef.current,
      }
    );

    Object.entries(contentRefs.current).forEach(([, ref]) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar position="top" />
      <section
        id="conduct"
        className="min-h-screen max-h-screen h-screen bg-[#E0D2FF] flex flex-col"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-10 text-[#1a1a2e]">
            CODE OF CONDUCT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:hidden overflow-x-auto whitespace-nowrap pb-4 noscrollbar border-b border-black">
              <div className="flex space-x-4 px-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`inline-flex items-center text-left text-lg transition-colors duration-300 ${
                      activeCategory === category
                        ? "text-black font-bold"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {activeCategory === category && (
                      <span className="size-1 bg-black rounded-full mr-2 mt-1"></span>
                    )}
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block md:col-span-3">
              <div className="flex flex-col space-y-6 md:sticky md:top-24">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`text-left text-lg transition-colors duration-300 ${
                      activeCategory === category
                        ? "text-black font-bold"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="md:col-span-9 noscrollbar"
              ref={scrollContainerRef}
              style={{
                maxHeight: "calc(100dvh - 300px)",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <div className="space-y-32">
                {categories.map((category) => (
                  <div
                    key={category}
                    ref={(el) => {
                      contentRefs.current[category] = el;
                    }}
                    data-category={category}
                    className="mb-16"
                  >
                    {contentData[category].map((section, index) => (
                      <div key={index} className="mb-6">
                        {section.content}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConductPage;