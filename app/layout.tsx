import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kanan Services Limited",
  description:
    "Trusted supplier of cement, steel, scrap, roofing, and plastic products for industrial and construction projects.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
