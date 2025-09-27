import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Háttérkép */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20 home-banner"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/50"></div>

        {/* Tartalom */}
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Üdvözöljük az <span className=" text-blue-500 text-7xl font-black  [text-shadow:_1px_1px_0_white,_-1px_1px_0_white,_1px_-1px_0_white,_-1px_-1px_0_white]">Optdent</span> fogászat honlapján!
          </h1>

          <p className="mt-6 text-xl text-blue-50 max-w-2xl mx-auto">
            Professzionális fogászati ellátás Pomáz szívében – modern technológia, barátságos környezet és ragyogó mosoly minden páciensnek.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link  href="/kapcsolat" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 shadow-lg transition cursor-pointer">
              Időpontfoglalás
            </Link>

            <Link href="/szolgaltatasaink" className="bg-white hover:bg-blue-50 text-blue-600 font-semibold py-3 px-8 shadow-lg  transition cursor-pointer">
              Szolgáltatásaink
            </Link>
          </div>
        </div>

        {/* Hullám */}
        <div className="poly"></div>
      </section>

      {/* Miért válasszon minket */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-600">Miért válasszon minket?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
          Tapasztalt szakorvosaink, modern berendezéseink és empatikus hozzáállásunk gondoskodik róla, hogy mosolya mindig a legjobb formáját mutassa.
        </p>
      </section>
    </div>
  );
}
