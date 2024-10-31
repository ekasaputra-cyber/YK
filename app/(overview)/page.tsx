'use client';

import React , {useState, useEffect} from "react"; // Tambahkan import React
import TestimonialSlider from "../ui/testi";
import { MdiWhatsapp } from "../ui/MdiWhatsapp";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  // Metadata untuk halaman
  const pageMetadata = {
    title: "Beranda",
    description: "Selamat datang di halaman beranda kami, tempat inovasi dan solusi digital untuk bisnis Anda.",
  };

  // pop up
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState<{ src: string; alt: string }>({ src: "", alt: "" });

  const openPopup = (src: string, alt: string) => {
    setPopupImage({ src, alt });
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Mengatur metadata di useEffect
  React.useEffect(() => {
    document.title = pageMetadata.title; // Mengatur judul halaman
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", pageMetadata.description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = pageMetadata.description;
      document.head.appendChild(newMeta);
    }
  }, [pageMetadata]); // Menjalankan efek saat metadata berubah

  return (
    <main className="relative flex flex-col items-center justify-between bg-slate-100 mb-5">

      <section className="relative flex flex-col justify-center items-center text-center text-gray-100 md:text-gray-800 px-4 lg:px-0 h-screen max-lg:h-[600px] max-2xl:h-[800px] overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Revolusi Bisnis Anda melalui Inovasi Teknologi</h1>
          <h3 className="text-sm md:text-base lg:text-lg xl:text-xl mb-16 my-4 px-0 md:px-30 lg:px-60">Atasi Hambatan Teknologi dan Percepat Kemajuan Bisnis Anda ke Jalur yang Lebih Tepat</h3>
          <a href="#card" className="inline-flex items-center rounded-lg border px-5 py-2 lg:text-lg text-sm text-white bg-purple-800 hover:bg-purple-900">
            Kenali Lebih Jauh <FaArrowDown className="text-base text-white mt-2 ml-2 animate-bounce" />
          </a>

        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-600 to-transparent rounded-t-full w-[800px] md:w-full h-5/6 md:h-5/6"></div>
        

      </section>

      <section id="card" className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8 lg:mx-36 lg:absolute lg:top-[650px] 2xl:top-[800px] z-10">
          <div className="bg-white rounded-lg shadow-lg p-6 m-6 mt-0 md:m-0 md:w-[20rem] md:h-[20rem] lg:m-0 lg:w-[28rem] lg:h-[28rem] xl:w-full xl:h-auto">
            <h2 className="text-lg md:text-xl 2xl:text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
            <a href="#" className="text-orange-500 mt-4 block text-sm md:text-base lg:text-lg">Lorem, ipsum.</a>
            <img src="/img/400x200.png" alt="img" className="mt-4 w-full h-42 object-cover rounded-md" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 m-6 mt-0 md:m-0 md:w-[20rem] md:h-[20rem] lg:m-0 lg:w-[28rem] lg:h-[28rem] xl:w-full xl:h-auto">
            <h2 className="text-lg md:text-xl 2xl:text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lorem ipsum dolor si t, amet consectetur adipisicing elit. Aliquid, suscipit?</p>
            <a href="#" className="text-orange-500 mt-4 block text-sm md:text-base lg:text-lg">Lorem, ipsum.</a>
            <img src="/img/400x200.png" alt="img" className="mt-4 w-full h-42 object-cover rounded-md" />
          </div>
      </section>

      <section className="flex flex-col md:flex-row items-center px-6 my-8 md:my-8 md:mx-20 md:mt-[400px]">
        <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl text-black font-bold">Mengutamakan Kesejahteraan Masyarakat</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Fokus pada pemberdayaan masyarakat dengan menyediakan akses yang adil dan merata terhadap sumber daya, pendidikan, kesehatan, dan layanan sosial. Memberikan pelayanan masyarakat yang komprehensif.
          </p>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden h-72 md:h-96">
          <img 
            src="https://template176.webekspor.com/wp-content/uploads/2024/09/layanan8.jpg" 
            alt="Gambar" 
            className="w-full h-full object-cover object-center rounded"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center px-6 my-8 md:mx-20 md:mt-[100px]">
        <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-4 mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl text-black font-bold">Mewujudkan Ide Digital Anda</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Yukti fokus pada pengembangan solusi digital yang inovatif dan efisien. Kami menyediakan desain website kustom, pengembangan responsif, dan dukungan pemasaran digital untuk membantu bisnis Anda tumbuh dan berkembang.
          </p>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden h-72 md:h-96 order-2 md:order-1">
          <img 
            src="https://template176.webekspor.com/wp-content/uploads/2024/09/layanan8.jpg" 
            alt="Gambar" 
            className="w-full h-full object-cover object-center rounded"
          />
        </div>
      </section>

      <section className="px-6 my-8 md:my-12 md:mx-10 w-full">
        <h2 className="text-xl md:text-2xl text-black font-bold text-center">Layanan Kami</h2>
        <div className="flex flex-col md:flex-row mt-6">
          <div className="w-full md:w-1/3 p-4 text-center">
            <img 
              src="/img/webdev.avif" 
              alt="Desain Website" 
              className="mx-auto mb-4 h-48 w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105 rounded"
              onClick={() => openPopup('/img/webdev.avif', 'Desain Website')}
            />
            <h3 className="font-bold">Desain Website Kustom</h3>
            <p className="text-gray-600">Desain yang unik sesuai kebutuhan bisnis Anda.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <img 
              src="/img/devlop.avif" 
              alt="Pengembangan Web" 
              className="mx-auto mb-4 h-48 w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105 rounded"
              onClick={() => openPopup('/img/devlop.avif', 'Pengembangan Web')}
            />
            <h3 className="font-bold">Pengembangan Web Responsif</h3>
            <p className="text-gray-600">Website yang optimal untuk semua perangkat.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <img 
              src="/img/seo.avif" 
              alt="SEO" 
              className="mx-auto mb-4 h-48 w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105 rounded"
              onClick={() => openPopup('/img/seo.avif', 'SEO')}
            />
            <h3 className="font-bold">SEO dan Pemasaran Digital</h3>
            <p className="text-gray-600">Tingkatkan visibilitas online Anda.</p>
          </div>
        </div>

        { /* Popup */}
        {isPopupOpen && (
          <div onClick={closePopup} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-transparent rounded shadow-lg max-w-2xl w-full relative">
              {/* <button onClick={closePopup} className="absolute top-0 right-1 text-gray-700 hover:text-gray-800 text-3xl">&times;</button> */}
              <img src={popupImage.src} alt={popupImage.alt} className="w-full h-auto rounded-md" />
            </div>
          </div>
        )}
      </section>

        {/* testi */}
      <TestimonialSlider />

      <section className="px-6 my-8 md:my-12 md:mx-20">
        <h2 className="text-xl md:text-2xl text-black font-bold text-center">Proyek Terbaru Kami</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Admin Dashboard',
              description: 'Kelola data dan aktivitas bisnismu dengan mudah menggunakan template admin dashboard kami.',
              link: '/',
              image: '/dash.png',
            },
            {
              title: 'Web E-commerce',
              description: 'Bangun toko online profesional dengan template web e-commerce yang menarik dan fungsional.',
              link: '/',
              image: '/ecom.png',
            },
            {
              title: 'Web Portal Berita',
              description: 'Sajikan berita terkini dan terpercaya dengan template web portal berita yang responsif dan modern.',
              link: '/',
              image: '/port.png',
            },
            {
              title: 'Web Gudang',
              description: 'Optimalkan manajemen stok dan logistik dengan template web gudang yang efisien.',
              link: '/',
              image: '/gud.png',
            },

          ].map((project, index) => (
            <div key={index} className="overflow-hidden rounded shadow-md">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center px-6 my-8 md:my-12 md:mx-20 bg-gray-100 p-6 rounded">
        <h2 className="text-xl md:text-2xl text-black font-bold text-center">Siap Memulai Proyek Anda?</h2>
        <p className="text-gray-600 mt-2 text-center">
          Hubungi kami hari ini untuk konsultasi gratis dan wujudkan ide digital Anda!
        </p>
        <a href="/kontak" className="mt-4 px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-950">
          Hubungi Kami
        </a>
      </section>



      {/* <div className="fixed bottom-10 md:bottom-10 right-1.5 md:right-5 z-20">
        <button className=" relative bg-green-500 text-white p-2 rounded-full flex items-center justify-center group transition-all duration-300 w-12 h-12 overflow-hidden">
          <MdiWhatsapp className="h-6 w-6" /> 
        </button>
      </div> */}
      
    </main>
  );
}