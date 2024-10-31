'use client';

import Link from 'next/link';

import { FaMapMarkedAlt, FaEnvelopeOpenText, FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-white">
            <div className="bg-sky-900 text-white pb-3 md:py-10">
                <div className="container mx-auto justify-center md:items-center md:px-4 flex flex-col lg:flex-row justify-between md:h-44">
                    {/*Kontak */}
                    <div className="bg-sky-950 md:rounded-lg md:drop-shadow-2xl w-full lg:w-1/4 md:mb-6 lg:mb-0 overflow-visible p-8 z-100">
                        <h2 className="text-base md:text-xl font-semibold mb-4">Hubungi Kami</h2>
                        <div className="mb-4">
                            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                                <h4 className="font-semibold text-white text-sm md:text-base"><FaMapMarkedAlt className="inline mr-2" />Alamat</h4>
                                <p className="text-xs md:text-sm">Ngadilangkung, Kec. Kepanjen, Kabupaten Malang, Jawa Timur, Indonesia, 65163</p>
                            </a>
                        </div>
                        <div className="mb-4">
                            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                                <h4 className="font-semibold text-white text-sm md:text-base"><FaEnvelopeOpenText className="inline mr-2" />Email</h4>
                                <p className="text-xs md:text-sm">info@yukti.id</p>
                            </a>
                        </div>
                        <div className="mb-4">
                            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                                <h4 className="font-semibold text-white text-sm md:text-base"><FaWhatsapp className="inline mr-2" />WhatsApp</h4>
                                <p className="text-xs md:text-sm">+62 1234 567 8901</p>
                            </a>
                        </div>
                    </div>
                    
                    {/*Deskripsi */}
                    <div className="lg:w-2/5 p-6 md:px-0">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">YUKTI</h2>
                        <p className="text-xs md:text-sm">
                        Yukti adalah startup yang mengkhususkan diri dalam pembuatan website berkualitas untuk membantu bisnis dan individu membangun kehadiran online yang efektif. Kami menawarkan solusi desain dan pengembangan yang disesuaikan dengan kebutuhan Anda. Mari wujudkan ide Anda bersama Yukti!
                        </p>
                    </div>

                    <div className="lg:w-1/5 p-6 pb-0 md:p-0">
                        <h2 className="text-base md:text-xl font-semibold mb-4">Ikuti Kami</h2>
                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl md:text-2xl hover:text-gray-400" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-xl md:text-2xl hover:text-gray-400" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-xl md:text-2xl hover:text-gray-400" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="text-xl md:text-2xl hover:text-gray-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bagian Footer bawah*/}
            <div className="bg-gray-900 text-white py-4 md:pb-6 md:pt-16">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="hidden md:block flex space-x-4 mb-4 md:mb-0">
                        <Link href="/" className="text-white hover:text-cyan-500" >
                        Beranda
                        </Link>
                        <Link href="/" className="text-white hover:text-cyan-500">
                        Tentang Kami
                        </Link>
                        <Link href="/" className="text-white hover:text-cyan-500">
                        Layanan Kami
                        </Link>
                        <Link href="/" className="text-white hover:text-cyan-500">
                        Hubungi Kami
                        </Link>
                    </div>
                    <p className="text-xs md:text-sm">Copyright © Yukti. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
