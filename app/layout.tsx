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
  title: "ETHistanbul",
  description:
    "ETHistanbul is a conference and hackathon connecting you with global talents, industry professionals, and web3 companies advancing technology.",
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
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
