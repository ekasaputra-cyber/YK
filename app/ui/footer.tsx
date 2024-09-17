'use client';

import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-5 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-white text-xl font-bold">
            <div className="text-2xl font-bold text-white-700">YUK<span className="text-purple-500">TI</span></div>
            </Link>
            <p className="mt-4 text-sm">Bikin website tanpa ribet dengan YUKTI. Kami menyediakan berbagai pilihan template web yang dapat disesuaikan dengan kebutuhan bisnismu.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-sm">
            <h2 className="text-xl font-bold">Navigasi</h2>
            <ul className="mt-2 grid md:grid-cols-2 gap-4">
              <li className="mt-1">
                <Link href="/" className="hover:underline">Beranda</Link>
              </li>
              <li className="mt-1">
                <Link href="/tentang" className="hover:underline">Tentang</Link>
              </li>
              <li className="mt-1">
                <Link href="/layanan" className="hover:underline">Layanan</Link>
              </li>
              <li className="mt-1">
                <Link href="/kontak" className="hover:underline">Kontak</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-sm">
            <h2 className="text-xl font-bold">Kontak Kami</h2>
            <p className="mt-2">Email: support@yukti.com</p>
            <p className="mt-2">Telepon: +62 123 4567 890</p>

          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy;{currentYear} YUKTI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
