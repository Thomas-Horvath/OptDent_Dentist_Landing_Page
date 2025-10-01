import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const AdatvedelmiPage = () => {
  return (
    <section className="relative font-sans bg-sky-50 text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[38vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/law.jpg`}
          fill
          priority
          alt="Adatvédelem"
          className="absolute inset-0 object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
        <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
          <p className="text-blue-100 uppercase tracking-wider text-sm">Jogi információk</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Adatvédelmi nyilatkozat – <span className="text-blue-200">Optident</span>
          </h1>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Tájékoztatjuk Önt arról, hogyan kezeljük és védjük személyes adatait.
          </p>
        </div>
        <div className="poly bg-sky-50" />
      </div>

      {/* Tartalom */}
      <div className="max-w-4xl mx-auto px-6 py-20 leading-relaxed text-gray-700 space-y-8">
        <h2 className="text-2xl font-bold text-blue-700">1. Általános információk</h2>
        <p>
          Jelen adatvédelmi tájékoztató célja, hogy tájékoztassa Önt az <strong>Optident Kft.</strong> (székhely: 2013
          Pomáz, Kossuth Lajos utca 12., a továbbiakban: „Szolgáltató”) által kezelt személyes adatok köréről,
          kezelésének céljáról, jogalapjáról, időtartamáról, valamint az Ön jogairól és azok érvényesítésének
          módjáról.
        </p>

        <h2 className="text-2xl font-bold text-blue-700">2. Az adatkezelés célja és jogalapja</h2>
        <p>
          A Szolgáltató az Ön személyes adatait elsősorban a fogászati szolgáltatások nyújtása, időpontfoglalás,
          kapcsolattartás és tájékoztatás céljából kezeli. Az adatkezelés jogalapja minden esetben az Ön
          hozzájárulása, illetve a szerződés teljesítése vagy jogi kötelezettség teljesítése.
        </p>

        <h2 className="text-2xl font-bold text-blue-700">3. Kezelt adatok köre</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Név</li>
          <li>E-mail cím</li>
          <li>Telefonszám</li>
          <li>Egészségügyi állapottal kapcsolatos információk (kizárólag kezelési célból)</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-700">4. Adattárolás időtartama</h2>
        <p>
          Az adatokat a jogszabályi kötelezettségek teljesítéséhez szükséges ideig, illetve az Ön hozzájárulásának
          visszavonásáig tároljuk. Egészségügyi dokumentáció esetén a vonatkozó jogszabályban előírt megőrzési idő
          (általában 30 év) irányadó.
        </p>

        <h2 className="text-2xl font-bold text-blue-700">5. Adattovábbítás</h2>
        <p>
          Személyes adatait kizárólag jogszabályban meghatározott esetekben, illetve az Ön kifejezett hozzájárulása
          esetén továbbítjuk harmadik félnek (pl. fogtechnikai labor, hatóságok).
        </p>

        <h2 className="text-2xl font-bold text-blue-700">6. Az Ön jogai</h2>
        <p>Önt az alábbi jogok illetik meg személyes adatai kezelésével kapcsolatban:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>hozzáférés az Önről kezelt adatokhoz,</li>
          <li>az adatok helyesbítése vagy törlése,</li>
          <li>az adatkezelés korlátozása,</li>
          <li>az adatkezelés elleni tiltakozás,</li>
          <li>adatainak hordozhatósága,</li>
          <li>panasztétel joga a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH).</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-700">7. Kapcsolat</h2>
        <p>
          Amennyiben kérdése vagy észrevétele van adatkezelésünkkel kapcsolatban, kérjük, vegye fel velünk a kapcsolatot
          az alábbi elérhetőségek egyikén:
        </p>
        <div className="mt-4 space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span>2013 Pomáz, Kossuth Lajos utca 12.</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <span>
              +36 30 123 4567
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span>
              info@optident.hu
            </span>
          </p>
        </div>

        <p className="mt-10 text-sm text-gray-500 italic">
          Jelen adatvédelmi tájékoztató 2025. január 1-jén lép hatályba és visszavonásig érvényes.
        </p>
      </div>
      <div className="poly-reverse bg-blue-500" />
    </section>
  );
};

export default AdatvedelmiPage;
