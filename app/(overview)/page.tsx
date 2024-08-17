'use client';

import Image from "next/image";
import { MdiWhatsapp } from "../ui/MdiWhatsapp";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between">
      <section className="relative flex min-h-screen flex-col items-center text-center text-white px-5 pt-28 md:pt-28 bg-contain bg-no-repeat md:bg-cover bg-bottom md:bg-center bg-purple-800" style={{ backgroundImage: "url('/bg.png')" }}>
        <h1 className="text-3xl md:text-5xl font-medium">Bikin website tanpa ribet</h1>
        <p className="mt-4 md:px-60">Yuk, cek domain kamu sekarang juga dan dapatkan penawaran harga spesial dari kami. Kamu juga akan mendapatkan akun email sesuai dengan domain yang dipilih.</p>
        <div className="mt-8 md:flex md:space-x-4 space-y-2 md:space-y-0">
          <input type="text" placeholder="Nama domain kamu" className="p-3 w-full md:w-96 rounded-xl border-none" />
          <button className="bg-purple-500 text-white p-2 rounded-md w-full md:w-36">CARI DOMAIN</button>
        </div>
        <div className=" mt-4 flex flex-wrap justify-center space-x-3 md:space-x-6">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">.com Rp 97.000</span>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">.co.id Rp 327.000</span>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">.id Rp 316.000</span>
        </div>
      </section>
      <section className="relative flex flex-col items-center text-center text-white px-14 py-10 md:py-16 bg-gradient-to-b from-purple-950 to-purple-800">
        <h2 className="text-2xl md:text-4xl font-medium">Pilih Produk Web yang Kamu Inginkan</h2>
        <p className="mt-4 md:px-60">Kami menyediakan berbagai pilihan template web yang dapat disesuaikan dengan kebutuhan bisnismu.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white text-gray-800 p-5 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Admin Dashboard</h3>
              <p className="mt-2 text-sm">Kelola data dan aktivitas bisnismu dengan mudah menggunakan template admin dashboard kami.</p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-600 text-left">Disukai oleh 1.200 orang</p>
              <p className="text-xs text-gray-600 text-left">Digunakan oleh 800 orang</p>
            </div>
          </div>
          <div className="bg-white text-gray-800 p-5 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Web E-commerce</h3>
              <p className="mt-2 text-sm">Bangun toko online profesional dengan template web e-commerce yang menarik dan fungsional.</p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-600 text-left">Disukai oleh 1.200 orang</p>
              <p className="text-xs text-gray-600 text-left">Digunakan oleh 800 orang</p>
            </div>
          </div>
          <div className="bg-white text-gray-800 p-5 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Web Portal Berita</h3>
              <p className="mt-2 text-sm">Sajikan berita terkini dan terpercaya dengan template web portal berita yang responsif dan modern.</p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-600 text-left">Disukai oleh 1.200 orang</p>
              <p className="text-xs text-gray-600 text-left">Digunakan oleh 800 orang</p>
            </div>
          </div>
          <div className="bg-white text-gray-800 p-5 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Web Gudang</h3>
              <p className="mt-2 text-sm">Optimalkan manajemen stok dan logistik dengan template web gudang yang efisien dan mudah digunakan.</p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-600 text-left">Disukai oleh 1.200 orang</p>
              <p className="text-xs text-gray-600 text-left">Digunakan oleh 800 orang</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-10 right-5 md:right-10">
        <button className="relative bg-green-500 text-white p-2 rounded-full flex items-center justify-center group transition-all duration-300 w-12 h-12 hover:w-48 overflow-hidden">
          <MdiWhatsapp className="h-6 w-6" />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Butuh bantuan?</span>
        </button>
      </div>
    </main>
  );
}