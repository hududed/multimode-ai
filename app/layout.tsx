import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MultiMode AI - Halal Web Development & AI Solutions",
  description:
    "Professional web development, custom software, and AI solutions. Muslim-owned. No compromises. Your ethical alternative to mainstream vendors.",
  keywords: [
    "halal web development",
    "muslim web developer",
    "ethical web design",
    "custom software",
    "AI integration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
