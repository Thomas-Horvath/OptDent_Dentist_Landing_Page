import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="
                bg-bg font-sans
             ">
      {/* Banner */}
      <div className="
              flex h-[55vh] items-center justify-center md:h-[45vh]
              overflow-hidden relative w-full
           ">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/services-banner.jpg`}
          fill
          priority
          alt="Fogászati eszközök, kezelőszék, rendelő"
          className="
             absolute inset-0 object-center object-cover opacity-50
          "
        />
        <div className="
                absolute bg-gradient-to-r from-blue-900/70 inset-0
                to-transparent via-blue-900/50
             " />
        <div className="
                max-w-5xl md:text-left px-6 relative text-center w-full
                z-10
             ">
          <p className="
                text-blue-100 text-sm tracking-wider uppercase
             ">Szolgáltatásaink</p>
          <h1 className="
                 font-extrabold leading-tight md:text-5xl sm:text-3xl
                 text-2xl text-white
              ">
            Fogászati kezelések az <span className="
                                            text-blue-200
                                         ">Optident</span> rendelőben
          </h1>
          <p className="
                max-w-2xl mt-3 text-blue-50
             ">
            Modern technológia, empatikus hozzáállás és személyre szabott megoldások minden páciensünk számára.
          </p>
        </div>
        <div className="
                bg-bg poly
             " />
      </div>

      {/* Szolgáltatások */}
      <div className="
              pb-20 relative
           ">
        <div className="
                max-w-6xl mx-auto px-6 py-16 space-y-20
             ">
          {/* 1️⃣ Konzerváló fogászat */}
          <div>
            <h2 className="
                   font-bold mb-6 text-3xl text-blue-700
                ">Konzerváló fogászat</h2>
            <p className="
                  leading-relaxed mb-8 text-gray-700
               ">
              Minimál invazív technikákkal dolgozunk, célunk a saját foganyag megőrzése, miközben a lehető legjobb esztétikai és funkcionális eredményt érjük el.
            </p>
            <ul className="
                   list-disc list-inside space-y-4 text-gray-700
                ">
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
            <h2 className="
                   font-bold mb-6 text-3xl text-blue-700
                ">Fogpótlások</h2>
            <p className="
                  leading-relaxed mb-8 text-gray-700
               ">
              Fémmentes, esztétikus és tartós fogpótlásokat készítünk nagy pontosságú CAD/CAM technológiával.
            </p>
            <ul className="
                   list-disc list-inside space-y-4 text-gray-700
                ">
              <li>Cirkónium-dioxid és préskerámia koronák, hidak</li>
              <li>Adhezív (ragasztott) hidak minimális fogcsiszolással</li>
            </ul>
          </div>

          {/* 3️⃣ Szájsebészet */}
          <div>
            <h2 className="
                   font-bold mb-6 text-3xl text-blue-700
                ">Szájsebészet</h2>
            <p className="
                  leading-relaxed mb-8 text-gray-700
               ">
              Sebészeti beavatkozásaink célja a fogak megmentése és a hosszú távú stabilitás biztosítása.
            </p>
            <ul className="
                   list-disc list-inside space-y-4 text-gray-700
                ">
              <li>Rezekció – a gyökércsúcs eltávolítása és a gyulladt terület tisztítása</li>
              <li>Retrográd gyökértömés – a gyökércsatorna lezárása a csont felől</li>
              <li>Implantáció – hiányzó fogak pótlása modern műgyökérrel</li>
              <li>Augmentáció – csontpótlás és ínykontúr helyreállítás szükség esetén</li>
            </ul>
          </div>

          {/* 4️⃣ Fogfehérítés */}
          <div>
            <h2 className="
                   font-bold mb-6 text-3xl text-blue-700
                ">Fogfehérítés</h2>
            <p className="
                  leading-relaxed mb-8 text-gray-700
               ">
              Hatékony, biztonságos és személyre szabott fogfehérítési eljárások az Ön igényeire szabva.
            </p>
            <ul className="
                   list-disc list-inside space-y-4 text-gray-700
                ">
              <li>Rendelői fogfehérítés LED technológiával</li>
              <li>Otthoni fogfehérítő sín készítése és anyag biztosítása</li>
              <li>Belső fogfehérítés elszíneződött gyökérkezelt fogaknál</li>
            </ul>
          </div>

          {/* 5️⃣ Fogékszer */}
          <div>
            <h2 className="
                   font-bold mb-6 text-3xl text-blue-700
                ">Fogékszer</h2>
            <p className="
                  leading-relaxed text-gray-700
               ">
              Kiváló minőségű, csiszolás nélkül felhelyezhető fogékszereket kínálunk, amelyek bármikor eltávolíthatók nyom nélkül.
            </p>
          </div>

          {/* 6️⃣ Parodontológia */}
          <div>
            <h2 className="
                   font-bold mb-6 text-3xl text-blue-700
                ">Parodontológia</h2>
            <p className="
                  leading-relaxed mb-8 text-gray-700
               ">
              Az egészséges fogíny az alapja minden kezelésnek. Komplex kezeléseinkkel helyreállítjuk a fogágy természetes állapotát.
            </p>
            <ul className="
                   list-disc list-inside space-y-4 text-gray-700
                ">
              <li>Íny feletti és alatti fogkő eltávolítás</li>
              <li>Íny alatti tisztítás feltárásból</li>
              <li>GTR – irányított szövetregeneráció csontpótló anyagokkal</li>
            </ul>
          </div>

          {/* 7️⃣ Röntgen diagnosztika */}
          <div>
            <h2 className="
                   font-bold mb-6 text-3xl text-blue-700
                ">Röntgen diagnosztika</h2>
            <p className="
                  leading-relaxed mb-8 text-gray-700
               ">
              Korszerű digitális és hagyományos röntgenmegoldásainkkal pontos diagnózist és biztonságos kezelési tervet készítünk.
            </p>
            <ul className="
                   list-disc list-inside space-y-4 text-gray-700
                ">
              <li>Periapikális röntgen – egyes fogak részletes vizsgálatához</li>
              <li>Panoráma röntgen – teljes fogsor és állcsont áttekintése</li>
              <li>CT – implantációk és műtéti tervek előkészítéséhez</li>
            </ul>
          </div>
        </div>
        <div className="
                bg-sky-50 poly-reverse
             " />
      </div>
      {/* CTA */}
      <div className="
              bg-sky-50 pb-30 pt-16 relative text-center text-white
           ">
        <h3 className="
               font-bold text-2xl text-blue-700
            ">Kérdése van vagy időpontot szeretne foglalni?</h3>
        <p className="
              mt-2 text-gray-600
           ">Vegye fel velünk a kapcsolatot, és segítünk megtalálni az Ön számára legjobb megoldást.</p>
        <Link
          href="/kapcsolat"
          className="
             bg-blue-500 font-semibold hover:bg-blue-600 inline-block
             mt-6 px-8 py-3 rounded-lg shadow-md text-white transition
          "

        >
          Kapcsolatfelvétel →
        </Link>
        <div className="
                bg-blue-500 poly
             " />
      </div>
    </section>
  );
};

export default page;
