"use client";

import React from 'react';
import '../ui/about.css'; // Pastikan untuk mengimpor file CSS

const AboutPage: React.FC = () => {
    const pageMetadata = {
        title: "Tentang Kami",
        description: "Informasi tentang perusahaan dan layanan kami.",
    };

    // Kirim metadata ke layout
    React.useEffect(() => {
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
        <>
        <main className="py-32">
            <div className="atas container min-h-screen content-center">
                <h2 id="services" className=" font-bold text-lg">Layanan Kami</h2>
                <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div className="service">
                        <img src="/img/400x200.png" alt="Pembuatan Website" className="w-full h-auto mb-5 mt-1" />
                        <h3 className="text-lg font-semibold my-2">Pembuatan Website</h3>
                        <p>Kami menawarkan pembuatan website profesional untuk bisnis Anda.</p>
                    </div>
                    <div className="service">
                        <img src="/img/400x200.png" alt="Hosting Server Sendiri" className="w-full h-auto mb-5 mt-1" />
                        <h3 className="text-lg font-semibold my-2">Hosting Server Sendiri</h3>
                        <p>Dengan server sendiri, kami menjamin kecepatan dan keamanan data Anda.</p>
                    </div>
                    <div className="service">
                        <img src="/img/400x200.png" alt="Support 24/7" className="w-full h-auto mb-5 mt-1" />
                        <h3 className="text-lg font-semibold my-2">Support 24/7</h3>
                        <p>Tim kami siap membantu Anda kapan saja dengan layanan pelanggan terbaik.</p>
                    </div>
                </div>
                
                <h2 id="about" className="my-5 font-bold text-lg">Tentang Kami</h2>
                <p>Kami adalah perusahaan yang berkomitmen untuk memberikan solusi digital terbaik untuk bisnis Anda. Dengan pengalaman bertahun-tahun, kami siap membantu Anda mencapai tujuan online Anda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non quasi, inventore odit dolores ducimus debitis, esse saepe reiciendis vel commodi quas? Facere porro, velit cupiditate cumque doloremque consequatur esse doloribus enim ut atque beatae nostrum quibusdam? Minima quisquam voluptatibus libero natus necessitatibus aut eius quasi cumque animi fugit commodi porro nulla, deleniti architecto? Delectus iure eveniet minima. Earum, dolore porro molestias cumque ducimus sint! Pariatur quibusdam, libero blanditiis, expedita fugiat corrupti odio cum numquam temporibus ipsum accusantium officia qui possimus mollitia aliquid laboriosam veniam necessitatibus ullam! Veritatis vel illo at quas, quo pariatur molestias necessitatibus? Consequuntur autem impedit quis?</p>
                
            </div>
        </main>
        </>
    );
};

export default AboutPage;
