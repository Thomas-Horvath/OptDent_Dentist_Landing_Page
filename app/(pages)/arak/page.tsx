import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const priceCategories = [
    {
      title: "Diagnosztika",
      items: [
        { name: "Szájüregi daganatszűrés és állapotfelmérés", price: "Ingyenes" },
        { name: "Kisméretű röntgenfelvétel (periapikális)", price: "2 500 Ft" },
        { name: "Panoráma röntgenfelvétel", price: "6 000 Ft" },
      ],
    },
    {
      title: "Konzerváló kezelések",
      items: [
        { name: "Esztétikus fogtömés egy felszínen", price: "16 000 Ft" },
        { name: "Esztétikus fogtömés több felszínen", price: "21 000 Ft" },
        { name: "Gyökérkezelés csatornánként", price: "11 000 Ft" },
        { name: "Gyökércsatorna feltárás és fertőtlenítés csatornánként", price: "6 000 Ft" },
        { name: "Gyökércsap behelyezés (üvegszálas)", price: "7 000 Ft" },
        { name: "Egyszerű fogeltávolítás", price: "16 000 Ft" },
      ],
    },
    {
      title: "Esztétikai kezelések",
      items: [
        { name: "Professzionális rendelői fogfehérítés", price: "48 000 Ft" },
        { name: "Préskerámia borító korona", price: "52 000 Ft" },
      ],
    },
    {
      title: "Protetikai és implantológiai kezelések",
      items: [
        { name: "Fémkerámia korona vagy hídtag", price: "46 000 Ft" },
        { name: "Cirkon korona CAD/CAM technológiával", price: "52 000 Ft" },
        { name: "Teljes cirkónium kerámia borító korona", price: "53 000 Ft" },
        { name: "Prémium implantátum beültetés", price: "135 000 Ft" },
        { name: "Felépítmény implantátumra", price: "38 000 Ft" },
      ],
    },
  ];



  return (
    <section className=" relative font-sans bg-bg text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[50vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/prices-banner.jpg`}
          className="absolute inset-0 object-cover object-center  opacity-50 "
          fill
          priority
          alt="Fogászati kezelés, fogorvos és a paciens."
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
        <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Árlista – <span className="text-blue-200">Optident</span>
          </h1>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Áraink minden esetben tájékoztató jellegűek – a pontos összeget személyes konzultáció során határozzuk meg.
          </p>
        </div>
        <div className="poly bg-bg" />
      </div>






      {/* Árlista */}
      <div className="relative pb-20">
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">Szolgáltatásaink díjai</h2>

          {priceCategories.map((category) => (
            <div key={category.title} className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-lg border-b border-dotted border-gray-300 pb-2"
                  >
                    <span className="text-gray-800">{item.name}</span>
                    <span className="text-blue-600 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
        <Link
          href="/kapcsolat"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
        >
          Időpontfoglalás
        </Link>
      </div>
      <div className="poly bg-blue-500" />
    </section>
  );
};

export default page;
