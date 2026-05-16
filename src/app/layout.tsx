import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/GridBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astra Capital — Backing the Next Generation of Acquisition Entrepreneurs",
  description:
    "A family office providing flexible capital, real-world experience, and aligned partnership for search funds and long-term holding companies.",
  metadataBase: new URL("https://astracapital.example"),
  openGraph: {
    title: "Astra Capital",
    description:
      "Flexible capital and aligned partnership for operators building enduring companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-canvas text-ink antialiased">
        <GridBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
