import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaPhone } from "react-icons/fa";


const page = () => {
  return (
    <section className="font-sans bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[50vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contact-banner.jpg`}
          fill
          priority
          alt="Fogászati rendelő, kapcsolat"
          className="absolute inset-0 object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
        <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
          <p className="text-blue-100 uppercase tracking-wider text-sm">Lépjen kapcsolatba velünk</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Kapcsolat – <span className="text-blue-200">Optident</span>
          </h1>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Fogászati rendelőnk szeretettel várja Pomázon – kérdéseivel forduljon hozzánk bizalommal!
          </p>
        </div>
        <div className="poly bg-sky-50" />
      </div>

      {/* Elérhetőségek */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Elérhetőségeink</h2>
        <div className="space-y-6 text-lg text-gray-700">
          <p className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span>
              <strong>Cím:</strong> 2013 Pomáz, Kossuth Lajos utca 12.
            </span>
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <span>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+36301234567" className="text-blue-600 hover:underline">
                +36 30 123 4567
              </a>
            </span>
          </p>
        </div>
      </div>




      {/* Térkép */}
      <div className="relative pb-40">
        <div className="max-w-[800px] h-[400px] mx-auto  bg-gray-200">
          <iframe
            title="Pomáz térkép"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8690753735764!2d19.01782267672965!3d47.6481109851096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d62d5c33f23d%3A0xcb32456b781f1765!2sPom%C3%A1z%2C%20Kossuth%20Lajos%20u.%2012%2C%202013!5e0!3m2!1shu!2shu!4v1759156466277!5m2!1shu!2shu"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="poly-reverse bg-sky-50" />
      </div>
      {/* CTA */}
      <div className="relative bg-sky-50 pt-12 pb-30 text-center text-white">
        <h3 className="text-2xl font-bold text-blue-700">Kérdése van vagy időpontot szeretne foglalni?</h3>
        <p className="mt-2 text-gray-600">Hívjon minket bizalommal – szívesen segítünk!</p>
        <a
          href="tel:+36301234567"
          className="inline-flex items-center justify-center gap-2 mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
        >
          <FaPhone className="text-xl" />
          Hívás most
        </a>
        <div className="poly bg-blue-500" />
      </div>
    </section >
  );
};

export default page;
