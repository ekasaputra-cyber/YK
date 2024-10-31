'use client';

import React, { useState, useEffect } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      quote: "Yukti membantu kami membuat website yang luar biasa dan meningkatkan bisnis kami secara signifikan!",
      author: "Mr Robert, Perusahaan"
    },
    {
      quote: "Layanan yang luar biasa, dukungan yang cepat, dan hasil yang sangat memuaskan!",
      author: "Mrs Sarah, Bisnis Online"
    },
    {
      quote: "Yukti membantu kami memperluas jangkauan pemasaran digital kami dengan strategi yang tepat.",
      author: "Mr Alex, Pemasaran Digital"
    }
  ];

  const [current, setCurrent] = useState(0); // untuk melacak indeks slide saat ini
  const delay = 3000; // delay antar slide dalam milidetik

  // Mengubah testimonial setiap beberapa detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="px-6 my-8 md:my-10 md:mx-10 w-1/2">
      <h2 className="text-xl md:text-2xl text-black font-bold text-center">Apa Kata Klien Kami</h2>
      <div className="mt-6 relative overflow-hidden h-32 md:h-40">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className={`absolute w-full transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="border-l-4 border-blue-500 pl-4 italic text-center">
              “{testimonial.quote}”
            </p>
            <footer className="mt-2 font-bold text-center">— {testimonial.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
