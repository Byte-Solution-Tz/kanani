import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanani Services Limited",
  description:
    "Trusted supplier of cement, steel, scrap and hardware for industrial and construction projects.",
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
