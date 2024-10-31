import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/app/ui/navbar";
import "./globals.css";
import "./javascript.js";
import Footer from "./ui/footer";
import Head from "next/head"; // Tambahkan import ini

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
  title = "Beranda", // Default title
  description = "Beranda Web Pengguna", // Default description
}: Readonly<{
  children: React.ReactNode;
  title?: string;
  description?: string;
}>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <html lang="id" className="scroll-smooth">
        <body className={poppins.className}>
          <div className="z-20 sticky top-0"><Navbar /></div>
          <div className="z-0 text-white">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}