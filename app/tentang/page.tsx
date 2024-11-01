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
                
                <h2 id="about" className="mt-16 font-bold text-lg">Tentang Kami</h2>
                <p>Kami adalah perusahaan yang berkomitmen untuk memberikan solusi digital terbaik untuk bisnis Anda. Dengan pengalaman bertahun-tahun, kami siap membantu Anda mencapai tujuan online Anda.</p>
                
            </div>
        </main>
        </>
    );
};

export default AboutPage;
