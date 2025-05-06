"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/ui/nav-bar";

type Category =
  | "General Info"
  | "Getting to Istanbul"
  | "Where to Stay"
  | "History, Culture & Food"
  | "Tips from Locals"
  | "Transportation"
  | "Safety";

interface SectionContent {
  title?: string;
  content: string | React.JSX.Element;
}

const IstanbulGuidePage = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("General Info");
  const contentRefs = useRef<Record<Category, HTMLDivElement | null>>({
    "General Info": null,
    "Getting to Istanbul": null,
    "Where to Stay": null,
    "History, Culture & Food": null,
    "Tips from Locals": null,
    Transportation: null,
    Safety: null,
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    "General Info",
    "Getting to Istanbul",
    "Where to Stay",
    "History, Culture & Food",
    "Tips from Locals",
    "Transportation",
    "Safety",
  ];

  const contentData: Record<Category, SectionContent[]> = {
    "General Info": [
      {
        title: "The Intercontinental City",
        content: (
          <>
            <p className="mb-4">
              Welcome to Istanbul, the capital of the Roman, Byzantine, and
              Ottoman Empires, the pearl of the Bosphorus, and the geographical,
              cultural, and commercial bridge where the East and the West meet.
            </p>
            <p className="mb-4">
              You can reach Istanbul, one of the most visited cities in the
              world, with its new and big airport (IST). Istanbul is the largest
              city in Europe. The city is quite affordable; public
              transportation is developed and cheap, and its residents are
              hospitable. Things to do before leaving the city; visit Hagia
              Sophia, Basilica Cistern, Topkapi and Dolmabahce Palaces,
              Bosphorus, and Grand Bazaar; Eat baklava, Turkish delight, doner
              kebabs and drink Turkish coffee and raki.
            </p>
          </>
        ),
      },
      {
        title: "Quick Tips",
        content: (
          <div className="rounded-3xl py-4">
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-3 ">
              Quick Tips
            </h3>
            <div className="space-y-2">
              <div className="bg-white rounded-full border-1 border-black px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-medium">Timezone:</p>
                  <p className="ml-2">GMT +3</p>
                </div>
                <p className="text-black">Current Time</p>
              </div>

              <div className="bg-white rounded-full border-1 border-black px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-medium">Visa:</p>
                  <p className="ml-2">Tourist Visa (30/90 Days) & E-Visa</p>
                </div>
                <p className="text-black">Requirements</p>
              </div>

              <div className="bg-white rounded-full border-1 border-black px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-medium">Currency:</p>
                  <p className="ml-2">Turkish Lira</p>
                </div>
                <p className="text-black">Current Time</p>
              </div>

              <div className="bg-white rounded-full border-1 border-black px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-medium">Currency:</p>
                  <p className="ml-2">Turkish Lira</p>
                </div>
                <p className="text-black">Exchange Rate</p>
              </div>

              <div className="bg-white rounded-full border-1 border-black px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-medium">Official Language:</p>
                  <p className="ml-2">Turkish</p>
                </div>
              </div>

              <div className="bg-white rounded-full border-1 border-black px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-medium">Weather:</p>
                  <p className="ml-2">There are four climates</p>
                </div>
                <p className="text-black">Weather Report</p>
              </div>
            </div>
          </div>
        ),
      },
    ],
    "Getting to Istanbul": [
      {
        content: (
          <div className="rounded-3xl py-4">
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-4">
              Getting to Istanbul
            </h3>

            <div className="mb-6">
              <p className="mb-2 font-medium">Visa Requirements:</p>
              <p className="">
                Get your visa before you start your trip. Fortunately, Türkiye
                offers visa-free visits to citizens of many countries. Find out
                if you need a Visa by clicking{" "}
                <span className="text-blue-600 underline">here</span>.
              </p>
            </div>

            <div>
              <p className="text-xl font-medium mb-4">Istanbul Airports</p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">IST (Istanbul Airport)</p>
                    <p className="text-sm text-gray-700">{`Istanbul's main airport, located on the European side, can be reached by metro, bus, and taxi.`}</p>
                  </div>
                  <button className="bg-purple-300 text-purple-800 px-4 py-2 rounded-full">
                    Get Directions
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">SAW (Sabiha Gökçen Airport)</p>
                    <p className="text-sm text-gray-700">{`Istanbul's secondary airport, located on the Asian side, can be reached by metro, bus, and taxi.`}</p>
                  </div>
                  <button className="bg-purple-300 text-purple-800 px-4 py-2 rounded-full">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    "Where to Stay": [
      {
        content: (
          <div className="rounded-3xl py-4">
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-4">
              Where to Stay
            </h3>

            <div className="mb-6">
              <p className="mb-4">
                The Bosphorus divides Istanbul right in the middle. Districts
                where you can stay on the European side: Historical peninsula
                (Fatih), Beyoğlu, Karaköy, Galata, Şişli, Beşiktaş, Nişantaşı,
                Osmanbey, Maçka, Sarıyer, Etiler, Bebek, Arnavutköy, Emirgan,
                Yeniköy, Levent, Maslak.
              </p>
              <p className="mb-4">
                Districts where you can stay on the Asian side: Kadıköy,
                Üsküdar, Bostancı, Kuzguncuk, Kandilli, Çengelköy, Kanlıca,
                Beykoz, Kuleli, Harem.
              </p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <p className="font-bold">The coolest neighborhoods in Istanbul</p>
              <div className="flex items-center text-gray-600">
                <span>→</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 w-full h-96">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1f849Kw3dnj-ir_3ByWY9JDZlLMb2bBs&femb=1&ll=41.03872994995544%2C29.027711600000003&z=11"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Istanbul Neighborhoods Map"
                className="w-full h-full"
              ></iframe>
            </div>

            <ul className="list-disc pl-5 mt-2">
              <li>Karaköy - For hipster cafes and galleries</li>
              <li>Kadıköy - Vibrant Asian side neighborhood</li>
              <li>Beyoğlu - For nightlife and shopping</li>
              <li>Sultanahmet - Historic center with major attractions</li>
            </ul>
          </div>
        ),
      },
    ],
    "History, Culture & Food": [
      {
        content: (
          <>
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-4">
              History, Culture & Food
            </h3>
            <p className="mb-4">
              Istanbul does not only stand out because it is the only city
              established on two continents. As a corner where many
              civilizations and cultures intersect, it is a part of the common
              heritage of human history.
            </p>
            <p className="mb-4">
              It is thought that the first permanent settlement was made by the
              Greek colonists around the 7th century BC, under the name
              Byzantium. The Roman Emperor Constantine the Great named the city
              Constantinople after he chose the city as the new capital of the
              Roman Empire, and the Medieval Ages began. When the Ottomans
              conquered the city in 1453, the Middle Ages closed, and the New
              Age began, and the name Constantinople continued to be used until
              the 1930s. With the establishment of the modern Turkish Republic,
              the name of the city becomes Istanbul.
            </p>
            <div className="mt-6">
              <p className="font-bold mb-2">
                Recommended Restaurants to Try Turkish Cuisine:
              </p>
              <ul className="list-disc pl-5">
                <li>Çiya Sofrası - Traditional Anatolian cuisine</li>
                <li>Karaköy Lokantası - Classic Turkish dishes</li>
                <li>Mikla - Modern Turkish fine dining</li>
                <li>Asitane - Ottoman palace cuisine</li>
                <li>
                  Hatay Medeniyetler Sofrası - Southern Turkish specialties
                </li>
              </ul>
            </div>
          </>
        ),
      },
    ],
    "Tips from Locals": [
      {
        content: (
          <>
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-4">
              Tips from Locals
            </h3>
            <div className="mb-6">
              <p className="font-bold mb-2">Currency & Payment</p>
              <ul className="list-disc pl-5">
                <li>Turkish Lira is the local currency</li>
                <li>
                  Credit Card: You can use your credit card almost anywhere, but
                  you may need to have cash for taxis
                </li>
                <li>
                  Best exchange: Instead of currency exchange at airports, you
                  can prefer exchange offices in the busiest parts of the city
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-2">Mobile & Internet</p>
              <ul className="list-disc pl-5">
                <li>E-SIM providers: You can use Holafly or Airalo</li>
                <li>
                  {`SIM cards with best 4G coverage: Turkcell, Türk Telekom and
                  Vodafone are Turkey's largest service providers`}
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-2">Other Tips</p>
              <ul className="list-disc pl-5">
                <li>Tipping culture: 5-10% will please everyone</li>
                <li>
                  Tap Water: Not recommended for drinking. Bottled water is
                  available everywhere
                </li>
                <li>Emergency number: 112</li>
                <li>
                  Negotiating: Feel free to bargain in touristy markets and
                  bazaars
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-2">
                CatIstanbul: Cats and Dogs of the City
              </p>
              <p>
                Did you know that more than a million stray cats live on the
                streets of Istanbul? Most of the stray cats videos you probably
                see on social media were recorded in Istanbul. The love of
                animals is an integral part of Turkish culture.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">Do locals speak English?</p>
              <p>
                Yes, many of them speak English, although not very fluent. And
                no matter what, when you ask them a question, they try very hard
                to answer. You can ask any question you want.
              </p>
            </div>
          </>
        ),
      },
    ],
    Transportation: [
      {
        content: (
          <>
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-4">
              Transportation
            </h3>
            <p className="mb-4">
              {`Istanbul's public transport possibilities are varied and the
              departure times are arranged quite frequently. As a cheap and
              effective transportation option, you can keep your carbon
              footprint to a minimum by choosing public transportation. Public
              transport and highways are very busy between 7:30-10:30 AM and
              4:30-7:30 PM.`}
            </p>

            <p className="font-bold mt-4 mb-2">
              Your Public Transport Options:
            </p>
            <ul className="list-disc pl-5 mb-6">
              <li>
                <span className="font-medium">Metro:</span>{" "}
                {`"M" is the sign of
                    metro Istanbul. By using the lines connecting various points of 
                    the city, you can reach your desired destination in the fastest
                    and most comfortable way.`}
              </li>
              <li>
                <span className="font-medium">Metrobus:</span> It is a special
                bus line that connects the European side of the city and the
                Anatolian side using the D-100 highway using the Bosphorus
                Bridge.
              </li>
              <li>
                <span className="font-medium">Tram:</span> You can explore the
                city with Tram lines connecting the most historical areas.
              </li>
              <li>
                <span className="font-medium">Ferry (Vapur):</span> It is by far
                the most characteristic and first public transportation vehicle
                of Istanbul.
              </li>
              <li>
                <span className="font-medium">Marmaray:</span> You can use this
                tube crossing, which connects Europe to Asia with a railway
                under the Bosphorus.
              </li>
            </ul>

            <p className="mb-4">
              To use public transport, you need a public transport card called
              Istanbulkart. You can get this card from kiosks, metro stations,
              piers and some bus stops all over the city.
            </p>

            <p className="font-bold mt-4 mb-2">
              Transportation from Airports to City Center:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-medium">Havabus:</span> Official bus lines
                operating between Sabiha Gökçen Airport (SAW) and Taksim,
                Kadıköy and Yenisahra districts.
              </li>
              <li>
                <span className="font-medium">Havaist:</span> Official bus lines
                connecting various points of the city with Istanbul Airport
                (IST).
              </li>
              <li>
                <span className="font-medium">Metro:</span> You can reach
                Istanbul Sabiha Gökçen Airport (SAW) with the M4 line, and
                Istanbul Airport (IST) with the M11 line.
              </li>
            </ul>
          </>
        ),
      },
    ],
    Safety: [
      {
        content: (
          <>
            <h3 className="text-2xl font-medium text-[#1a1a2e] mb-4">Safety</h3>
            <p className="mb-4">
              It is a safe city in general. However, it should not be forgotten
              that Istanbul is a very large and global city with a population of
              over twenty million. Therefore, pay attention to our
              recommendations.
            </p>

            <ul className="list-disc pl-5 mb-4">
              <li>
                Keep an eye on your belongings in tourist areas when public
                transport is at its busiest.
              </li>
              <li>
                Use applications such as BiTaksi, Uber: If you are going to
                travel by taxi, prefer to travel with the vehicles you will call
                from these applications.
              </li>
              <li>Use public transport when possible.</li>
              <li>
                Respect the dress code in places of religious importance: Dress
                appropriately for mosques and places of worship such as the Blue
                Mosque, Hagia Sophia, Topkapı Palace Museum of Sacred Relics.
                Female visitors will be asked to cover their heads lightly.
              </li>
              <li>
                Earthquake risk: Istanbul expects an earthquake that could cause
                significant damage in the upcoming time period. You may want to
                learn about the earthquake resistance of the building you will
                be staying in.
              </li>
            </ul>

            <p>
              In case of emergency, dial 112 for all emergency services (police,
              ambulance, fire).
            </p>
          </>
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
        id="istanbul-guide"
        className="min-h-screen pt-44 bg-[#E0D2FF]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-10 text-[#1a1a2e]">
              ISTANBUL GUIDE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <div className="flex flex-col space-y-6 md:sticky md:top-24">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`text-left text-lg cursor-pointer transition-colors duration-300 ${
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
                maxHeight: "72vh",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <div className="space-y-32">
                {" "}
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
                      <div
                        key={index}
                        className="mb-6"
                      >
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

export default IstanbulGuidePage;
