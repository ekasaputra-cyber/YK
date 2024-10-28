"use client"; // Menandai ini sebagai Client Component

import React, { useEffect } from 'react';

const projects = [
  {
    title: 'Proyek 1',
    description: 'lorem ipsum dolor si amet 1.',
    link: 'https://link-ke-proyek1.com',
    image: '/img/400x200.png',
  },
  {
    title: 'Proyek 2',
    description: 'lorem ipsum dolor si amet 2.',
    link: 'https://link-ke-proyek2.com',
    image: '/img/400x200.png',
  },
  {
    title: 'Proyek 3',
    description: 'lorem ipsum dolor si amet 3.',
    link: 'https://link-ke-proyek3.com',
    image: '/img/400x200.png',
  },
  {
    title: 'Proyek 4',
    description: 'lorem ipsum dolor si amet 4.',
    link: 'https://link-ke-proyek4.com',
    image: '/img/400x200.png',
  },
  {
    title: 'Proyek 5',
    description: 'lorem ipsum dolor si amet 5.',
    link: 'https://link-ke-proyek5.com',
    image: '/img/400x200.png',
  },
  {
    title: 'Proyek 6',
    description: 'lorem ipsum dolor si amet 6.',
    link: 'https://link-ke-proyek6.com',
    image: '/img/400x200.png',
  },
];

const Portofolio: React.FC = () => {
  const pageMetadata = {
    title: "Portofolio Saya",
    description: "Lihat berbagai proyek yang telah saya kerjakan.",
  };

  // Kirim metadata ke layout
  useEffect(() => {
    document.title = pageMetadata.title; // Mengatur judul halaman
    // Mengatur meta tag deskripsi
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
    <div className=" min-h-screen flex flex-col justify-center bg-white py-8">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-xl md:text-3xl font-bold mt-20 mb-6">Portofolio</h1>
        <p className="mb-2">beberapa contoh produk yang penah kami buat</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-cyan-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Proyek
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;