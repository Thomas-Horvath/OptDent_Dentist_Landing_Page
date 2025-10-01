import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="font-sans bg-bg">
      {/* Banner */}
      <div className="relative w-full h-[55vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/services-banner.jpg`}
          fill
          priority
          alt="Fogászati eszközök, kezelőszék, rendelő"
          className="absolute inset-0 object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
        <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
          <p className="text-blue-100 uppercase tracking-wider text-sm">Szolgáltatásaink</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Fogászati kezelések az <span className="text-blue-200">Optident</span> rendelőben
          </h1>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Modern technológia, empatikus hozzáállás és személyre szabott megoldások minden páciensünk számára.
          </p>
        </div>
        <div className="poly bg-bg" />
      </div>

      {/* Szolgáltatások */}
      <div className="relative pb-20">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
          {/* 1️⃣ Konzerváló fogászat */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Konzerváló fogászat</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Minimál invazív technikákkal dolgozunk, célunk a saját foganyag megőrzése, miközben a lehető legjobb esztétikai és funkcionális eredményt érjük el.
            </p>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Plasztikus tömések modern, kíméletes eljárással</li>
              <li>Betétek (Inlay, Onlay) – CAD/CAM technológiával készített restaurációk</li>
              <li>Héjak – esztétikai korrekció minimális foganyag veszteséggel</li>
              <li>Gyökérkezelések – még a bölcsességfogak megmentése is lehetséges</li>
              <li>Fogsínezés adhezív technikával – baleseti sérülések után</li>
              <li>Barázdazárás – megelőző kezelés a szuvasodás ellen</li>
            </ul>
          </div>

          {/* 2️⃣ Fogpótlások */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Fogpótlások</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Fémmentes, esztétikus és tartós fogpótlásokat készítünk nagy pontosságú CAD/CAM technológiával.
            </p>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Cirkónium-dioxid és préskerámia koronák, hidak</li>
              <li>Adhezív (ragasztott) hidak minimális fogcsiszolással</li>
            </ul>
          </div>

          {/* 3️⃣ Szájsebészet */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Szájsebészet</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sebészeti beavatkozásaink célja a fogak megmentése és a hosszú távú stabilitás biztosítása.
            </p>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Rezekció – a gyökércsúcs eltávolítása és a gyulladt terület tisztítása</li>
              <li>Retrográd gyökértömés – a gyökércsatorna lezárása a csont felől</li>
              <li>Implantáció – hiányzó fogak pótlása modern műgyökérrel</li>
              <li>Augmentáció – csontpótlás és ínykontúr helyreállítás szükség esetén</li>
            </ul>
          </div>

          {/* 4️⃣ Fogfehérítés */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Fogfehérítés</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Hatékony, biztonságos és személyre szabott fogfehérítési eljárások az Ön igényeire szabva.
            </p>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Rendelői fogfehérítés LED technológiával</li>
              <li>Otthoni fogfehérítő sín készítése és anyag biztosítása</li>
              <li>Belső fogfehérítés elszíneződött gyökérkezelt fogaknál</li>
            </ul>
          </div>

          {/* 5️⃣ Fogékszer */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Fogékszer</h2>
            <p className="text-gray-700 leading-relaxed">
              Kiváló minőségű, csiszolás nélkül felhelyezhető fogékszereket kínálunk, amelyek bármikor eltávolíthatók nyom nélkül.
            </p>
          </div>

          {/* 6️⃣ Parodontológia */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Parodontológia</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Az egészséges fogíny az alapja minden kezelésnek. Komplex kezeléseinkkel helyreállítjuk a fogágy természetes állapotát.
            </p>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Íny feletti és alatti fogkő eltávolítás</li>
              <li>Íny alatti tisztítás feltárásból</li>
              <li>GTR – irányított szövetregeneráció csontpótló anyagokkal</li>
            </ul>
          </div>

          {/* 7️⃣ Röntgen diagnosztika */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Röntgen diagnosztika</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Korszerű digitális és hagyományos röntgenmegoldásainkkal pontos diagnózist és biztonságos kezelési tervet készítünk.
            </p>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Periapikális röntgen – egyes fogak részletes vizsgálatához</li>
              <li>Panoráma röntgen – teljes fogsor és állcsont áttekintése</li>
              <li>CT – implantációk és műtéti tervek előkészítéséhez</li>
            </ul>
          </div>
        </div>
        <div className="poly-reverse bg-sky-50" />
      </div>
      {/* CTA */}
      <div className="relative bg-sky-50 pt-16 pb-30 text-center text-white">
        <h3 className="text-2xl font-bold text-blue-700">Kérdése van vagy időpontot szeretne foglalni?</h3>
        <p className="mt-2 text-gray-600">Vegye fel velünk a kapcsolatot, és segítünk megtalálni az Ön számára legjobb megoldást.</p>
        <Link
          href="/kapcsolat"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"

        >
          Kapcsolatfelvétel →
        </Link>
        <div className="poly bg-blue-500" />
      </div>
    </section>
  );
};

export default page;
