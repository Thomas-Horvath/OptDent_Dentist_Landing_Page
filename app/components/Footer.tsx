import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full bg-blue-500 text-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + rövid leírás */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.ico" alt="logo" width={50} height={50} />
            <h2 className="text-2xl font-bold ml-2 text-white">Optident</h2>
          </div>
          <p className="text-sm text-blue-100 leading-relaxed">
            Professzionális fogászati ellátás Pomáz szívében. Modern technológia és empatikus gondoskodás egy helyen – hogy Ön mindig magabiztosan mosolyoghasson.
          </p>
        </div>

        {/* Menü */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Oldalaink</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Kezdőlap</Link></li>
            <li><Link href="/rolunk" className="hover:text-white transition">Rólunk</Link></li>
            <li><Link href="/szolgaltatasaink" className="hover:text-white transition">Szolgáltatások</Link></li>
            <li><Link href="/arak" className="hover:text-white transition">Árak</Link></li>
            <li><Link href="/kapcsolat" className="hover:text-white transition">Kapcsolat</Link></li>
          </ul>
        </div>

        {/* Elérhetőségek */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Elérhetőségek</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white text-lg" />
              2013 Pomáz, Kossuth Lajos utca 12.
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-white text-lg" />
              +36 30 123 4567</li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white text-lg" />
              info@optident.hu</li>
          </ul>
        </div>

        {/* Nyitvatartás */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Nyitvatartás</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Hétfő – Péntek: 8:00 – 18:00</li>
            <li>Szombat: 9:00 – 13:00</li>
            <li>Vasárnap: Zárva</li>
          </ul>
        </div>
      </div>

      {/* Alsó sáv */}
      <div className="mt-12 border-t border-blue-300 pt-4 text-center text-sm text-blue-100 flex flex-col md:flex-row items-center justify-center gap-4">
        <p>&copy; {new Date().getFullYear()} Optident Kft. – Minden jog fenntartva.</p>
        <div className="flex gap-4">
          <Link href="/impresszum" className="hover:text-white transition">Impresszum</Link>
          <Link href="/adatvedelmi-nyilatkozat" className="hover:text-white transition">Adatvédelmi nyilatkozat</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
