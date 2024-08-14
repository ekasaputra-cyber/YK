'use client';

import Image from "next/image";
import { MdiWhatsapp } from "../ui/MdiWhatsapp";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-8 bg-cover bg-center bg-purple-800 " style={{ backgroundImage: "url('/bg.png')" }}>
      <section className="relative flex flex-col items-center text-center text-white mt-10">
        <h1 className="text-5xl font-medium">Bikin website tanpa ribet</h1>
        <p className="mt-4 px-60">Yuk, cek domain kamu sekarang juga dan dapatkan penawaran harga spesial dari kami. Kamu juga akan mendapatkan akun email sesuai dengan domain yang dipilih.</p>
        <div className="mt-8 flex space-x-4">
          <input type="text" placeholder="Nama domain kamu" className="p-3 w-96 rounded-xl border-none" />
          <button className="bg-purple-500 text-white p-2 rounded-md">CARI DOMAIN</button>
        </div>
        <div className="mt-4 flex space-x-6">
          <span>.com Rp 97.000</span>
          <span>.co.id Rp 327.000</span>
          <span>.id Rp 316.000</span>
        </div>
      </section>
      <div className="fixed bottom-10 right-10">
        <button className="relative bg-green-500 text-white p-2 rounded-full flex items-center justify-center group transition-all duration-300 w-12 h-12 hover:w-48 overflow-hidden">
          <MdiWhatsapp className="h-6 w-6" />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Butuh bantuan?</span>
        </button>
      </div>
    </main>
  );
}