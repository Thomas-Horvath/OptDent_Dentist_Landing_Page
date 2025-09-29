import Image from "next/image";
import { FaBuilding, FaMapMarkerAlt, FaIdCard, FaEnvelope, FaPhoneAlt, FaFileContract } from "react-icons/fa";

export default function ImpresszumPage() {
  return (
    <section className="relative font-sans bg-sky-50 text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[38vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/law.jpg"
          fill
          priority
          alt="Impresszum - jogi információk"
          className="absolute inset-0 object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
        <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
          <p className="text-blue-100 uppercase tracking-wider text-sm">Jogi információk</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Impresszum – <span className="text-blue-200">Optident</span>
          </h1>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Az oldal üzemeltetőjének hivatalos adatai és jogi információk.
          </p>
        </div>
        <div className="poly bg-sky-50" />
      </div>

      {/* Tartalom */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Üzemeltetői adatok</h2>

        <div className="space-y-6 text-lg">
          <p className="flex items-center gap-3">
            <FaBuilding className="text-blue-500 text-2xl" />
            <span><strong>Cégnév:</strong> Optident Kft.</span>
          </p>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span><strong>Székhely:</strong> 2013 Pomáz, Kossuth Lajos utca 12.</span>
          </p>

          <p className="flex items-center gap-3">
            <FaIdCard className="text-blue-500 text-2xl" />
            <span><strong>Adószám:</strong> 12345678-1-12</span>
          </p>

          <p className="flex items-center gap-3">
            <FaFileContract className="text-blue-500 text-2xl" />
            <span><strong>Cégjegyzékszám:</strong> 01-09-123456</span>
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:info@optident.hu" className="text-blue-600 hover:underline">info@optident.hu</a>
            </span>
          </p>

          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <span>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+36301234567" className="text-blue-600 hover:underline">+36 30 123 4567</a>
            </span>
          </p>
        </div>

        {/* Jognyilatkozat */}
        <div className=" mt-12 text-sm text-gray-500 italic border-t border-blue-200 pt-6">
          <p>
            Az oldalon szereplő minden tartalom az Optident Kft. tulajdona. A tartalom másolása, terjesztése vagy
            bármilyen módon történő felhasználása kizárólag az üzemeltető írásos engedélyével lehetséges.
          </p>
          <p className="mt-2">
            Utolsó frissítés dátuma: <strong>2025. január 1.</strong>
          </p>
        </div>
        <div className="poly-reverse bg-blue-500" />
      </div>
    </section>
  );
}
