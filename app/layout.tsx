import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darker_grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-darker-grotesque",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ETHIstanbul",
  description:
    "ETHIstanbul is a conference and hackathon connecting you with global talents, industry professionals, and web3 companies advancing technology.",
  keywords: [
    "ethereum",
    "blockchain",
    "conference",
    "hackathon",
    "istanbul",
    "web3",
    "crypto",
  ],
  metadataBase: new URL("https://ethistanbul.io"),
  openGraph: {
    title: "ETHIstanbul 2025",
    description:
      "ETHIstanbul is a conference and hackathon connecting you with global talents, industry professionals, and web3 companies advancing technology.",
    url: "https://ethistanbul.io",
    siteName: "ETHIstanbul",
    images: [
      {
        url: "https://ethistanbul.io/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "ETHIstanbul 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETHIstanbul 2025",
    description:
      "ETHIstanbul is a conference and hackathon connecting you with global talents, industry professionals, and web3 companies advancing technology.",
    images: ["https://ethistanbul.io/opengraph-image.webp"],
    creator: "@ETHIstanbul_io",
    site: "@ETHIstanbul_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${darker_grotesque.variable}`}
    >
      <body>
        <main className="relative z-10 overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
