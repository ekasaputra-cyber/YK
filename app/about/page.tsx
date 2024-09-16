"use client";

import React from 'react';
import '../ui/HalamanUtama.css'; // Pastikan untuk mengimpor file CSS

const AboutPage: React.FC = () => {
    const pageMetadata = {
        title: "Tentang Kami",
        description: "Informasi tentang perusahaan dan layanan kami.",
    };
    return (
        <>

            <div className="container min-h-screen content-center">
                <h2 id="services">Layanan Kami</h2>
                <div className="services">
                    <div className="service">
                        <img src="https://via.placeholder.com/300x200" alt="Pembuatan Website" />
                        <h3>Pembuatan Website</h3>
                        <p>Kami menawarkan pembuatan website profesional untuk bisnis Anda.</p>
                    </div>
                    <div className="service">
                        <img src="https://via.placeholder.com/300x200" alt="Hosting Server Sendiri" />
                        <h3>Hosting Server Sendiri</h3>
                        <p>Dengan server sendiri, kami menjamin kecepatan dan keamanan data Anda.</p>
                    </div>
                    <div className="service">
                        <img src="https://via.placeholder.com/300x200" alt="Support 24/7" />
                        <h3>Support 24/7</h3>
                        <p>Tim kami siap membantu Anda kapan saja dengan layanan pelanggan terbaik.</p>
                    </div>
                </div>
                <h2 id="about">Tentang Kami</h2>
                <p>Kami adalah perusahaan yang berkomitmen untuk memberikan solusi digital terbaik untuk bisnis Anda. Dengan pengalaman bertahun-tahun, kami siap membantu Anda mencapai tujuan online Anda.</p>
            </div>

        </>
    );
};

export default AboutPage;
