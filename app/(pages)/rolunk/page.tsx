import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="font-sans bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[38vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/about-banner.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
        <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
          <p className="text-blue-100 uppercase tracking-wider text-sm">Rendelőnk</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Rólunk – <span className="text-blue-300">Optident</span>
          </h1>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Modern technológia, empatikus gondoskodás és letisztult környezet – Pomáz szívében.
          </p>
        </div>
        <div className="poly bg-sky-50" />
      </div>

      {/* Doktor bemutatkozás */}
      <div className="relative">
        <div className=" max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Kép */}
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-md bg-white">
                <img
                  src="/about.jpg"
                  alt="Dr. Opt Tamás"
                  className="w-full h-[420px] object-cover"
                />
              </div>

            </div>

            {/* Szöveg */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-blue-700">Dr. Opt Tamás</h2>
              <p className="text-gray-600 mt-1">fogorvos, rendelővezető</p>

              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
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
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-medium">
                  10 év szakmai tapasztalat
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-4 py-1 text-sm font-medium">
                  Empatikus, páciens-központú ellátás
                </span>
                <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-1 text-sm font-medium">
                  Esztétikai és implantációs megoldások
                </span>
              </div>

              {/* CTA-k */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kapcsolat"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition text-center"
                >
                  Időpontfoglalás
                </Link>
                <Link
                  href="/szolgaltatasaink"
                  className="bg-white hover:bg-blue-50 text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md transition text-center"
                >
                  Szolgáltatásaink
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="poly-reverse bg-white" />
      </div>


      {/* Praktikus infók */}
      <div className="relative bg-white pb-30">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">
              Miért válassza az Optidentet?
            </h3>
            <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
              Tapasztalt csapat, korszerű eszközök és átlátható ellátási folyamat – hogy a kezelés
              útja kényelmes és kiszámítható legyen.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">Elhelyezkedés</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Budapesthez közel, mégis nyugodt környezetben várjuk pácienseinket.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">Parkolás</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Ingyenes parkolás biztosított közvetlenül a rendelő közelében.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">Időpont és kapcsolat</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Online időpontfoglalás és gyors visszajelzés – kérdéseire örömmel válaszolunk.
              </p>
              <div className="mt-4">
                <Link href="/kapcsolat" className="text-blue-600 hover:underline font-medium">
                  Lépjen velünk kapcsolatba →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="poly bg-blue-500" />
      </div>

    </section>
  );
};

export default page;
