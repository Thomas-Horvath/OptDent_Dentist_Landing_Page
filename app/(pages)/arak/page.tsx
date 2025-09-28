import React from "react";

const page = () => {
  const prices = [
    { name: "Szájüregi daganatszűrés és állapotfelmérés", price: "Ingyenes" },
    { name: "Fogkő eltávolítás ultrahangos készülékkel", price: "14 000 Ft" },
    { name: "Íny alatti tisztítás és zárt küret", price: "19 000 Ft" },
    { name: "Kisméretű röntgenfelvétel (periapikális)", price: "2 500 Ft" },
    { name: "Panoráma röntgenfelvétel", price: "6 000 Ft" },
    { name: "Esztétikus fogtömés egy felszínen", price: "16 000 Ft" },
    { name: "Esztétikus fogtömés több felszínen", price: "21 000 Ft" },
    { name: "Gyökércsap behelyezés (üvegszálas)", price: "7 000 Ft" },
    { name: "Egyszerű fogeltávolítás", price: "16 000 Ft" },
    { name: "Gyökérkezelés csatornánként", price: "11 000 Ft" },
    { name: "Gyökércsatorna feltárás és fertőtlenítés csatornánként", price: "6 000 Ft" },
    { name: "Professzionális rendelői fogfehérítés", price: "48 000 Ft" },
    { name: "Fémkerámia korona vagy hídtag", price: "46 000 Ft" },
    { name: "Cirkon korona CAD/CAM technológiával", price: "52 000 Ft" },
    { name: "Teljes cirkónium kerámia borító korona", price: "53 000 Ft" },
    { name: "Préskerámia borító korona", price: "52 000 Ft" },
    { name: "Prémium implantátum beültetés", price: "135 000 Ft" },
    { name: "Felépítmény implantátumra", price: "38 000 Ft" },
  ];


  return (
    <section className=" relative font-sans bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[38vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/prices-banner.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
        <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Árlista – <span className="text-blue-300">Optident</span>
          </h1>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Áraink minden esetben tájékoztató jellegűek – a pontos összeget személyes konzultáció során határozzuk meg.
          </p>
        </div>
        <div className="poly bg-sky-50" />
      </div>






      {/* Árlista */}
      <div className="relative pb-20">
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">Szolgáltatásaink díjai</h2>

          <div className="space-y-4">
            {prices.map((item) => (
              <div
                key={item.name}
                className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-lg border-b border-dotted border-gray-300 pb-2"
              >
                <span className="text-gray-800">{item.name}</span>
                <span className="text-blue-600 font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-gray-500 text-sm max-w-2xl mx-auto">
            * Az árak tájékoztató jellegűek, egyes kezelések ára az egyéni igényektől és a kezelés összetettségétől függően eltérhet.
            A pontos díjról személyes konzultáció során adunk részletes tájékoztatást.
          </p>
        </div>
        <div className="poly-reverse bg-sky-50" />
      </div>

      {/* Extra infó / CTA */}
      <div className="pt-20 pb-36 bg-sky-50 text-center">
        <h3 className="text-2xl font-bold text-blue-700">Nem biztos benne, melyik kezelésre van szüksége?</h3>
        <p className="mt-3 text-gray-600">
          Kérjen időpontot egy ingyenes konzultációra, és segítünk megtalálni az Ön számára legjobb megoldást.
        </p>
        <a
          href="/kapcsolat"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
        >
          Időpontfoglalás
        </a>
      </div>
      <div className="poly bg-blue-500" />
    </section>
  );
};

export default page;
