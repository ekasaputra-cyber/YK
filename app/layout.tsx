import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/ui/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beranda",
  description: "Beranda Web Pengguna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-10 sticky top-0"><Navbar /></div>
        <div className="z-0">{children}</div>
      </body>
    </html>
  );
}
