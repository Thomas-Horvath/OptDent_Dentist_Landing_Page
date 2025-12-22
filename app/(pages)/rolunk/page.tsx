import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <section className="bg-sky-50 font-sans">
      {/* Banner */}
      <div className="flex h-[50vh] items-center justify-center md:h-[45vh] overflow-hidden relative w-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/about-banner.jpg`}
          className="absolute inset-0 object-center object-cover opacity-50"
          fill
          priority
          alt="Fogászati eszközök, fúró, elszívó stb."
        />
        <div className="absolute bg-gradient-to-r from-blue-900/70 inset-0 to-transparent via-blue-900/50" />
        <div className="max-w-5xl md:text-left px-6 relative text-center w-full z-10">
          <p className="text-blue-100 text-sm tracking-wider uppercase">Rendelőnk</p>
          <h1 className="font-extrabold leading-tight md:text-5xl sm:text-3xl text-2xl text-white">
            Rólunk – <span className="text-blue-200">Optident</span>
          </h1>
          <p className="max-w-2xl mt-3 text-blue-50">
            Modern technológia, empatikus gondoskodás és letisztult környezet – Pomáz szívében.
          </p>
        </div>
        <div className="bg-sky-50 poly" />
      </div>

      {/* Doktor bemutatkozás */}
      <div className="relative">
        <div className="max-w-6xl mx-auto pb-24 pt-16 px-6">
          <div className="gap-10 grid grid-cols-1 md:grid-cols-5">
            {/* Kép */}
            <div className="md:col-span-2">
              <div className="bg-white overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/about.jpg`}
                  alt="Dr. Opt Tamás"
                  className="h-[420px] object-cover w-full"
                  width={450}
                  height={500}
                />

              </div>

            </div>

            {/* Szöveg */}
            <div className="md:col-span-3">
              <h2 className="font-bold text-3xl text-blue-700">Dr. Opt Tamás</h2>
              <p className="mt-1 text-gray-600">fogorvos, rendelővezető</p>

              <div className="leading-relaxed mt-6 space-y-4 text-gray-700">
                <p>
                  Dr. <strong>Opt Tamás</strong> több mint <strong>10 éve</strong> praktizál fogorvosként.
                  Már pályája elején célul tűzte ki, hogy pácienseinek magas szakmai színvonalú,
                  mégis kíméletes ellátást nyújtson – barátságos, biztonságos környezetben.
                </p>
                <p>
                  Különös figyelmet fordít a modern, konzerváló eljárásokra és az esztétikai fogpótlásokra,
                  a lehető legtermészetesebb végeredményre törekedve. Szükség esetén implantációs megoldásokkal
                  is stabil, hosszú távú fogpótlásokat készítünk – a saját fogak tiszteletben tartásával.
                </p>
                <p>
                  Rendelőnkben a korszerű diagnosztika és a precíz kivitelezés mellett a kommunikáció is kiemelt szerepet kap:
                  mindent közérthetően elmagyarázunk, és addig nem engedünk el senkit, amíg nem teljes az elégedettség.
                </p>
              </div>

              {/* Badge-ek */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-blue-100 font-medium inline-flex items-center px-4 py-1 rounded-full text-blue-700 text-sm">
                  10 év szakmai tapasztalat
                </span>
                <span className="bg-emerald-100 font-medium inline-flex items-center px-4 py-1 rounded-full text-emerald-700 text-sm">
                  Empatikus, páciens-központú ellátás
                </span>
                <span className="bg-sky-100 font-medium inline-flex items-center px-4 py-1 rounded-full text-sky-700 text-sm">
                  Esztétikai és implantációs megoldások
                </span>
              </div>

              {/* CTA-k */}
              <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                <Link
                  href="/kapcsolat"
                  className="bg-blue-500 font-semibold hover:bg-blue-600 px-6 py-3 rounded-lg shadow-md text-center text-white transition"
                >
                  Időpontfoglalás
                </Link>
                <Link
                  href="/szolgaltatasaink"
                  className="bg-white font-semibold hover:bg-blue-50 px-6 py-3 rounded-lg shadow-md text-blue-600 text-center transition"
                >
                  Szolgáltatásaink
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white poly-reverse" />
      </div>


      {/* Praktikus infók */}
      <div className="bg-white pb-30 relative">
        <div className="bg-white max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="font-bold md:text-3xl text-2xl text-blue-700 text-center">
              Miért válassza az Optidentet?
            </h3>
            <p className="max-w-3xl mt-3 mx-auto text-center text-gray-600">
              Tapasztalt csapat, korszerű eszközök és átlátható ellátási folyamat – hogy a kezelés
              útja kényelmes és kiszámítható legyen.
            </p>
          </div>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-blue-700 text-lg">Elhelyezkedés</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Budapesthez közel, mégis nyugodt környezetben várjuk pácienseinket.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-blue-700 text-lg">Parkolás</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Ingyenes parkolás biztosított közvetlenül a rendelő közelében.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-blue-700 text-lg">Időpont és kapcsolat</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Online időpontfoglalás és gyors visszajelzés – kérdéseire örömmel válaszolunk.
              </p>
              <div className="mt-4">
                <Link href="/kapcsolat" className="font-medium hover:underline text-blue-600">
                  Lépjen velünk kapcsolatba →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 poly-reverse" />
      </div>

    </section>
  );
};

export default page;
