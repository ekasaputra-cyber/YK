'use client';

import Image from "next/image";
import { MdiWhatsapp } from "../ui/MdiWhatsapp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between bg-slate-100">
      <section className="relative flex flex-col items-center text-center text-gray-800 px-4 pt-32 md:pt-54 lg:pt-64 lg:pb-20 mt-32 mb-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold relative z-10">Revolusi Bisnis Anda melalui Inovasi Teknologi</h1>
        <h3 className="text-sm md:text-base my-4 px-0 md:px-60 relative z-10">Atasi Hambatan Teknologi dan Percepat Kemajuan Bisnis Anda ke Jalur yang Lebih Tepat</h3>
        <a href="#section-2" className="rounded-lg border px-5 py-2 md:text-lg md:mt-8 text-sm text-white bg-purple-800 hover:bg-purple-900 relative z-10 flex items-center">
          Kenali Lebih Jauh
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs md:text-sm" /> 
        </a>
        <div className="absolute transform-translate-x-1/2 bottom-0 bg-gradient-to-b from-purple-600 to-transparent rounded-t-full w-10/12 h-full"></div> {/* Mengatur posisi di tengah */}
      </section>
    
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center space-x-8 z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[30rem] h-[30rem]">
          <h2 className="text-lg font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
          <a href="#" className="text-orange-500 mt-4 block">Lorem, ipsum.</a>
          <img src="/path/to/image1.jpg" alt="img" className="mt-4 w-full h-32 object-cover rounded-md" />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-[30rem] h-[30rem]">
          <h2 className="text-lg font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
          <a href="#" className="text-orange-500 mt-4 block">Lorem, ipsum.</a>
          <img src="/path/to/image1.jpg" alt="img" className="mt-4 w-full h-32 object-cover rounded-md" />
        </div>
      </section>

      <section id="section-2" className="relative flex flex-col items-center text-center text-white px-6 md:px-10 py-10 md:py-60 md:pt-[450px] bg-gradient-to-b from-slate-100 to-purple-700">
        <h2 className="text-xl md:text-4xl font-medium">Pilih Produk Web yang Kamu Inginkan</h2>
        <p className="text-sm md:text-base mt-4 md:px-60">Kami menyediakan beberapa pilihan template web yang dapat disesuaikan dengan kebutuhan bisnismu.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/dash.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Menggunakan flex-grow dan justify-end untuk memindahkan konten ke bawah */}
              {/* Bagian hitam di bawah */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> 
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-xl font-semibold">Admin Dashboard</h3>
                  <p className="mt-2 text-xs md:text-sm">Kelola data dan aktivitas bisnismu dengan mudah menggunakan template admin dashboard kami.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/ecom.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Flex untuk mengatur posisi */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> {/* Bagian hitam di bawah */}
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-xl font-semibold">Web E-commerce</h3>
                  <p className="mt-2 text-xs md:text-sm">Bangun toko online profesional dengan template web e-commerce yang menarik dan fungsional.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/port.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Flex untuk mengatur posisi */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> {/* Bagian hitam di bawah */}
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-xl font-semibold">Web Portal Berita</h3>
                  <p className="mt-2 text-xs md:text-sm">Sajikan berita terkini dan terpercaya dengan template web portal berita yang responsif dan modern.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/gud.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Flex untuk mengatur posisi */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> {/* Bagian hitam di bawah */}
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-xl font-semibold">Web Gudang</h3>
                  <p className="mt-2 text-xs md:text-sm">Optimalkan manajemen stok dan logistik dengan template web gudang yang efisien.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      <div className="fixed bottom-4 md:bottom-10 right-1 md:right-5">
        <button className="relative bg-green-500 text-white p-2 rounded-full flex items-center justify-center group transition-all duration-300 w-12 h-12 overflow-hidden">
          <MdiWhatsapp className="h-6 w-6" /> 
        </button>
      </div>
      
    </main>
  );
}