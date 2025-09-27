"use client";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 h-18 w-full  bg-bg z-50 shadow-sm ">

            <div className="mx-auto  max-w-7xl w-full h-full flex items-center justify-between px-2">


                <Link href="/" className="h-full flex items-center gap-2 bg-blue-500 px-8">
                    <Image src="/logo.ico" alt="logo" width={50} height={50} className="mr-2" />
                    <h1 className="text-5xl font-bold text-white mb-2">Optdent</h1>
                </Link>


                <div className="h-full">
                    <ul className="flex h-full">
                        <li className="h-full flex items-center hover:bg-blue-500 font-semibold text-lg text-gray-700 hover:text-gray-100 px-2">
                            <Link href="/" className="h-full flex items-center">Kezdőlap</Link>
                        </li>
                        <li className="h-full flex items-center hover:bg-blue-500 font-semibold text-lg text-gray-700 hover:text-gray-100 px-2">
                            <Link href="/szolgaltatasaink" className="h-full flex items-center">Szolgáltatások</Link>
                        </li>
                        <li className="h-full flex items-center hover:bg-blue-500 font-semibold text-lg text-gray-700 hover:text-gray-100 px-2">
                            <Link href="/rolunk" className="h-full flex items-center">Rólunk</Link>
                        </li>
                        <li className="h-full flex items-center hover:bg-blue-500 font-semibold text-lg text-gray-700 hover:text-gray-100 px-2">
                            <Link href="/kapcsolat" className="h-full flex items-center">Kapcsolat</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar