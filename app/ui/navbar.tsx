'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between items-center p-4">
        <Link href="/" className="text-white text-xl font-bold">
          <div className="text-2xl font-bold text-white-700">YUK<span className="text-purple-500">TI</span></div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/tentang" className="text-white hover:text-gray-300">
              Tentang
            </Link>
          </li>
          <li>
            <Link href="/layanan" className="text-white hover:text-gray-300">
              Layanan
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="text-white hover:text-gray-300">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;