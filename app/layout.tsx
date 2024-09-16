import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/app/ui/navbar";
import "./globals.css";
import Footer from "./ui/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

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
    <html lang="id">
      <body className={poppins.className}>
        <div className="z-20 sticky top-0"><Navbar /></div>
        <div className="z-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}