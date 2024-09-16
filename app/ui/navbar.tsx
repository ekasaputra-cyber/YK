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
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-gray-800 bg-opacity-75 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 flex justify-between items-center p-4">
        <Link href="/" className="text-white text-xl font-bold">
          <div className="text-2xl font-bold text-white-700">YUK<span className="text-purple-500">TI</span></div>
        </Link>
        <div className="md:hidden"> {/* Menu Hamburger untuk layar kecil */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? '✖' : '☰'} {/* Ikon menu */}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4"> {/* Tampilkan menu di layar desktop */}
          <li>
            <Link href="/" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/tentang" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Tentang
            </Link>
          </li>
          <li>
            <Link href="/layanan" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Layanan
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Kontak
            </Link>
          </li>
        </ul>
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}> {/* Latar belakang untuk bilah samping */}
          <div className={`absolute top-0 right-0 w-64 h-full bg-gray-800 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}> {/* Bilah navigasi dari samping kanan */}
            <div className="flex justify-end me-3"> {/* Tambahkan div untuk mengatur posisi tombol */}
              <button onClick={() => setIsOpen(false)} className="text-white">✖</button> {/* Tombol close */}
            </div>
            <ul className="space-y-2"> {/* Tambahkan kelas untuk mengatur jarak antar item */}
              <li>
                <Link href="/" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
                  Kontak
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