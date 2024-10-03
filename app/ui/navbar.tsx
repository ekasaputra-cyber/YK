'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Tambahkan state untuk menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-slate-50 shadow-2xl' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-3 md:px-8 lg:px-8 flex justify-between items-center p-2 md:p-3">
      <Link href="/" className="flex items-center space-x-1">
      <img src="/favicon.ico" alt="Logo" className="w-10 h-auto objek-contain" />
      <div className={`text-2xl font-bold text-black`}>
        YUKTI
      </div>
    </Link>
        <div className="md:hidden lg:hidden"> {/* Menu Hamburger untuk layar kecil */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-black font-bold">
            {isOpen ? '✖' : '☰'} {/* Ikon menu */}
          </button>
        </div>
        <ul className="hidden md:flex lg:flex space-x-4 font-semibold"> {/* Tampilkan menu di layar desktop */}
          <li>
            <Link href="/" className={` ${isScrolled ? 'text-gray-900 hover:text-cyan-700' : 'text-gray-900 hover:text-cyan-700'}`} onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/tentang" className={`${isScrolled ? 'text-gray-900 hover:text-cyan-700' : 'text-gray-900 hover:text-cyan-700'}`} onClick={() => setIsOpen(false)}>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="/layanan" className={`${isScrolled ? 'text-gray-900 hover:text-cyan-700' : 'text-gray-900 hover:text-cyan-700'}`} onClick={() => setIsOpen(false)}>
              Layanan Kami
            </Link>
          </li>
          <li>
            <Link href="/kontak" className={`${isScrolled ? 'text-gray-900 hover:text-cyan-700' : 'text-gray-900 hover:text-cyan-700'}`} onClick={() => setIsOpen(false)}>
              Hubungi Kami
            </Link>
          </li>
        </ul>
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}> {/* Latar belakang untuk bilah samping */}
          <div className={`absolute top-0 right-0 w-64 h-full bg-sky-900 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}> {/* Bilah navigasi dari samping kanan */}
            <div className="flex justify-end "> {/* Tambahkan div untuk mengatur posisi tombol */}
              <button onClick={() => setIsOpen(false)} className="text-white font-bold">✖</button> {/* Tombol close */}
            </div>
            <ul className="space-y-2"> {/* Tambahkan kelas untuk mengatur jarak antar item */}
              <li>
                <Link href="/" className={`${isScrolled ? 'text-white hover:text-cyan-500' : 'text-white hover:text-cyan-500'}`} onClick={() => setIsOpen(false)}>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className={`${isScrolled ? 'text-white hover:text-cyan-500' : 'text-white hover:text-cyan-500'}`} onClick={() => setIsOpen(false)}>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/layanan" className={`${isScrolled ? 'text-white hover:text-cyan-500' : 'text-white hover:text-cyan-500'}`} onClick={() => setIsOpen(false)}>
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className={`${isScrolled ? 'text-white hover:text-cyan-500' : 'text-white hover:text-cyan-500'}`} onClick={() => setIsOpen(false)}>
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;