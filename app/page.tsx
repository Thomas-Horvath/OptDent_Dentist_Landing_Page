import Image from "next/image";
import Link from "next/link";
import { FaTooth, FaUserMd, FaHandsHelping, FaStar } from "react-icons/fa";




export default function Home() {
  return (
    <section className="pt-16 lg:pt-18 font-sans bg-gradient-to-b from-sky-50 to-white text-gray-800">





      {/* Hero */}
      <div className="relative w-full pb-20 lg:pb-0 lg:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Háttérkép */}
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/banner.jpg`}
          className="absolute inset-0 object-cover object-center  opacity-50 "
          fill
          priority
          alt="Fogorvosi rendelő és orvosi szék."
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/60"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div> */}


        {/* Tartalom */}
        <div className="relative z-10 max-w-4xl text-center px-6 pt-10 pb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Üdvözöljük az <span className=" text-blue-500 text-5xl md:text-7xl font-black  [text-shadow:_1px_1px_0_white,_-1px_1px_0_white,_1px_-1px_0_white,_-1px_-1px_0_white]">Optident</span> fogászat honlapján!
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-50 max-w-2xl mx-auto">
            Professzionális fogászati ellátás Pomáz szívében – modern technológia, barátságos környezet és ragyogó mosoly minden páciensnek.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kapcsolat" className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 shadow-lg transition cursor-pointer">
              Időpontfoglalás
            </Link>

            <Link href="/szolgaltatasaink" className="rounded-lg bg-white hover:bg-blue-50 text-blue-600 font-semibold py-3 px-8 shadow-lg  transition cursor-pointer">
              Szolgáltatásaink
            </Link>
          </div>
        </div>

        {/* Polygone*/}
        <div className="poly bg-bg"></div>
      </div>






      {/* Miért válasszon minket */}
      <div className="relative pt-24 pb-52 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-600">Miért válasszon minket?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
          Tapasztalt szakorvosaink, modern berendezéseink és empatikus hozzáállásunk gondoskodik róla, hogy mosolya mindig a legjobb formáját mutassa.
        </p>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

          {/* 1️ */}
          <div className="p-8 bg-sky-50 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-blue-500 text-5xl mb-4 flex justify-center"><FaTooth /></div>
            <h3 className="text-xl font-semibold text-gray-800">Modern technológia</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Legkorszerűbb eszközökkel és innovatív eljárásokkal dolgozunk a tökéletes eredményért.
            </p>
          </div>

          {/* 2️ */}
          <div className="p-8 bg-sky-50 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-blue-500 text-5xl mb-4 flex justify-center"><FaUserMd /></div>
            <h3 className="text-xl font-semibold text-gray-800">Szakértő csapat</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Tapasztalt fogorvosaink és asszisztenseink elhivatottan dolgoznak az Ön mosolyáért.
            </p>
          </div>

          {/* 3️ */}
          <div className="p-8 bg-sky-50 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-blue-500 text-5xl mb-4 flex justify-center"><FaHandsHelping /></div>
            <h3 className="text-xl font-semibold text-gray-800">Empatikus hozzáállás</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Barátságos, biztonságos környezetet biztosítunk minden páciensünk számára.
            </p>
          </div>

          {/* 4️ */}
          <div className="p-8 bg-sky-50 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-blue-500 text-5xl mb-4 flex justify-center"><FaStar /></div>
            <h3 className="text-xl font-semibold text-gray-800">Kiváló eredmények</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Több száz elégedett páciens és gyönyörű mosoly bizonyítja munkánk minőségét.
            </p>
          </div>

        </div>

        <div className="poly bg-sky-50"></div>
      </div>



      {/* Csapat szekció */}
      <aside className="py-24 relative bg-sky-50 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">Ismerje meg csapatunkat</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-6">

          {/* DOKTOR KÁRTYA */}
          <Link
            href="/rolunk"
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/dr-opt.jpg`}
                alt="Dr. Opt Tamás"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={500}
                height={350}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-600">Dr. Opt Tamás</h3>
              <p className="text-gray-600 mt-2">Fogszakorvos, rendelővezető</p>
              <p className="mt-4 text-sm text-gray-500">
                Több mint 10 év tapasztalattal, modern eljárásokkal és
                empatikus hozzáállással gondoskodom pácienseim mosolyáról.
              </p>
              <span className="inline-block mt-4 text-blue-500 font-semibold group-hover:underline">
                Részletek →
              </span>
            </div>
          </Link>




          {/* ASSZISZTENS KÁRTYA */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assistant.jpg`}
                alt="Kiss Anna"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                width={500}
                height={350}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-600">Kiss Anna</h3>
              <p className="text-gray-600 mt-2">Fogászati asszisztens</p>
              <p className="mt-4 text-sm text-gray-500">
                Barátságos hozzáállással és precíz munkával segítem a kezelések
                gördülékeny és kényelmes lefolyását.
              </p>
            </div>
          </div>

        </div>
        <div className="poly-reverse bg-blue-500"></div>
      </aside>

    </section>
  );
}
