'use client';

import Image from "next/image";
import { MdiWhatsapp } from "../ui/MdiWhatsapp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between bg-slate-100">

      <section className="relative flex flex-col justify-center items-center text-center text-gray-100 md:text-gray-800 px-4 lg:px-0 h-screen max-lg:h-[600px] max-2xl:h-[800px] overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Revolusi Bisnis Anda melalui Inovasi Teknologi</h1>
          <h3 className="text-sm md:text-base lg:text-lg xl:text-xl mb-16 my-4 px-0 md:px-30 lg:px-60">Atasi Hambatan Teknologi dan Percepat Kemajuan Bisnis Anda ke Jalur yang Lebih Tepat</h3>
          <a href="#card" className="rounded-lg border px-5 py-2 lg:text-lg text-sm text-white bg-purple-800 hover:bg-purple-900 w-max">
            Kenali Lebih Jauh
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs md:text-sm" /> 
          </a>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-600 to-transparent rounded-t-full w-[800px] md:w-full h-5/6 md:h-5/6"></div>
        

      </section>

      {/* <section className="flex flex-col lg:absolute lg:top-1/3 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 md:flex-row lg:flex-row justify-center space-y-1 md:space-x-5 md:space-y-0 lg:space-x-8 z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 m-8 md:m-0 md:w-[20rem] md:h-[20rem] lg:m-0 lg:w-[28rem] lg:h-[28rem]">
          <h2 className="text-lg font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
          <a href="#" className="text-orange-500 mt-4 block">Lorem, ipsum.</a>
          <img src="/path/to/image1.jpg" alt="img" className="mt-4 w-full h-32 object-cover rounded-md" />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 m-8 md:m-0 md:w-[20rem] md:h-[20rem] lg:m-0 lg:w-[28rem] lg:h-[28rem]">
          <h2 className="text-lg font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor si t, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
          <a href="#" className="text-orange-500 mt-4 block">Lorem, ipsum.</a>
          <img src="/path/to/image1.jpg" alt="img" className="mt-4 w-full h-32 object-cover rounded-md" />
        </div>
      </section> */}
      <section id="card" className="flex flex-col lg:absolute lg:inset-x-0 lg:top-[1050px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 md:flex-row lg:flex-row justify-center space-y-1 md:space-x-5 md:space-y-0 lg:space-x-8 z-10">

          <div className="bg-white rounded-lg shadow-lg p-6 m-8 md:m-0 md:w-[20rem] md:h-[20rem] lg:m-0 lg:w-[28rem] lg:h-[28rem] xl:w-full xl:h-[25rem]">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
            <a href="#" className="text-orange-500 mt-4 block text-sm md:text-base lg:text-lg">Lorem, ipsum.</a>
            <img src="/path/to/image1.jpg" alt="img" className="mt-4 w-full h-32 object-cover rounded-md" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 m-8 md:m-0 md:w-[20rem] md:h-[20rem] lg:m-0 lg:w-[28rem] lg:h-[28rem] xl:w-full xl:h-[25rem]">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lorem ipsum dolor si t, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
            <a href="#" className="text-orange-500 mt-4 block text-sm md:text-base lg:text-lg">Lorem, ipsum.</a>
            <img src="/path/to/image1.jpg" alt="img" className="mt-4 w-full h-32 object-cover rounded-md" />
          </div>
      </section>

      <section id="section-2" className="relative flex flex-col items-center text-center text-gray-800 px-6 md:px-10 py-24 md:py-30 lg:py-60 lg:mt-48 bg-gradient-to-b from-slate-100 to-purple-700">

        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">Pilih Produk Web yang Kamu Inginkan</h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-4 lg:px-60">Kami menyediakan beberapa pilihan template web yang dapat disesuaikan dengan kebutuhan bisnismu.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/dash.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Menggunakan flex-grow dan justify-end untuk memindahkan konten ke bawah */}
              {/* Bagian hitam di bawah */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> 
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold">Admin Dashboard</h3>
                  <p className="mt-2 text-xs md:text-sm lg:text-base">Kelola data dan aktivitas bisnismu dengan mudah menggunakan template admin dashboard kami.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/ecom.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Flex untuk mengatur posisi */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> {/* Bagian hitam di bawah */}
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold">Web E-commerce</h3>
                  <p className="mt-2 text-xs md:text-sm lg:text-base">Bangun toko online profesional dengan template web e-commerce yang menarik dan fungsional.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/port.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Flex untuk mengatur posisi */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> {/* Bagian hitam di bawah */}
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold">Web Portal Berita</h3>
                  <p className="mt-2 text-xs md:text-sm lg:text-base">Sajikan berita terkini dan terpercaya dengan template web portal berita yang responsif dan modern.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-cover bg-center h-64 rounded-md shadow-md flex flex-col justify-between" style={{ backgroundImage: "url('/gud.png')" }}> {/* Ganti dengan path gambar yang sesuai */}
            <div className="flex-grow flex flex-col justify-end"> {/* Flex untuk mengatur posisi */}
              <div className="m-2 p-2 bg-slate-900 bg-opacity-75 rounded-md"> {/* Bagian hitam di bawah */}
                <div className="flex flex-col justify-center items-center h-full text-white"> {/* Overlay untuk teks */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold">Web Gudang</h3>
                  <p className="mt-2 text-xs md:text-sm lg:text-base">Optimalkan manajemen stok dan logistik dengan template web gudang yang efisien.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      <div className="fixed bottom-10 md:bottom-10 right-1.5 md:right-5 z-20">
        <button className="relative bg-green-500 text-white p-2 rounded-full flex items-center justify-center group transition-all duration-300 w-12 h-12 overflow-hidden">
          <MdiWhatsapp className="h-6 w-6" /> 
        </button>
      </div>
      
    </main>
  );
}