'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import ini menggantikan useRouter

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Gunakan usePathname untuk mendapatkan path saat ini

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
          <div className={`text-2xl font-bold text-black`}>YUKTI</div>
        </Link>
        <div className="md:hidden lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black font-bold">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul className="hidden md:flex lg:flex space-x-4 font-semibold">
          {['/', '/tentang', '/portofolio'].map((path) => (
            <li key={path}>
              <Link 
                href={path} 
                className={`${
                  pathname === path
                    ? 'text-cyan-700' // Kelas aktif
                    : isScrolled
                    ? 'text-gray-900 hover:text-cyan-700'
                    : 'text-gray-900 hover:text-cyan-700'
                }`}
              >
                {path === '/' ? 'Beranda' : path === '/tentang' ? 'Tentang Kami' : 'portofolio'}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`absolute top-0 right-0 w-64 h-full bg-sky-900 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white font-bold">✖</button>
            </div>
            <ul className="space-y-2">
              {['/', '/tentang', '/portofolio'].map((path) => (
                <li key={path}>
                  <Link 
                    href={path} 
                    className={`${
                      pathname === path
                        ? 'text-cyan-500'
                        : 'text-white hover:text-cyan-500'
                    }`}
                  >
                    {path === '/' ? 'Beranda' : path === '/tentang' ? 'Tentang Kami' : 'portofolio'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
