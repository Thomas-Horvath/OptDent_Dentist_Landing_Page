"use client";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const linkData = [
    { href: "/", label: "Kezdőlap" },
    { href: "/rolunk", label: "Rólunk" },
    { href: "/szolgaltatasaink", label: "Szolgáltatások" },
    { href: "/arak", label: "Árak" },
    { href: "/kapcsolat", label: "Kapcsolat" },
];


const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);


    const handleOnclick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


    return (
        <nav className="fixed top-0 h-16 lg:h-18 w-full  bg-bg z-50 shadow-sm ">

            <div className="mx-auto  max-w-7xl w-full h-full flex items-center justify-between lg:px-2">


                <Link href="/" className="h-full flex items-center gap-1 pl-4" onClick={() => setIsOpen(false)}>
                    <Image src="/logo.svg" alt="logo" width={50} height={50} className="mr-2 h-8 w-8 lg:h-12 lg:w-12" />
                    <h1 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-1 lg:mb-2">Optident</h1>
                </Link>


                <div className="h-full hidden md:flex mr-4 ">
                    <ul className="flex h-full">

                        {linkData.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);



                            return (
                                <li key={link.href} className={`h-full flex items-center hover:bg-blue-500 font-semibold text-lg  hover:text-gray-100 px-2  ${isActive ? ' text-blue-700 underline underline-offset-8 decoration-2' : ''}`}>
                                    <Link href={link.href} className="h-full flex items-center">{link.label}</Link>
                                </li>)
                        })
                        }

                    </ul>


                </div>


                {/* Hamburger ikon */}
                {!isOpen ? <RiMenu3Fill className="md:hidden pr-4 text-5xl text-blue-500 hover:text-blue-300 cursor-pointer duration-150" onClick={handleOnclick} />
                    :
                    <IoCloseSharp className={`md:hidden pr-4 text-5xl text-blue-500 hover:text-blue-300 cursor-pointer duration-150 ${isOpen ? 'block' : 'hidden'}`} onClick={handleOnclick} />
                }
                {/* Mobil menü */}

                <ul className={`absolute top-16 flex w-full bg-(--color-bg) ${isOpen ? 'flex-col' : 'hidden'}`}>

                    {linkData.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);



                        return (
                            <li
                                key={link.href}
                                className={`border-b border-blue-500 h-full first:border-t first:border-t-blue-500-blue-500 flex items-center hover:bg-blue-500 cursorer-pointer
                                            font-semibold text-lg  hover:text-gray-100 px-2 ${isActive ? ' text-blue-700' : ''}`}
                                onClick={handleOnclick}
                            >
                                <Link href={link.href} className="h-full w-full py-2 flex items-center ">{link.label}</Link>
                            </li>)
                    })
                    }

                </ul>

            </div>

        </nav>
    )
}

export default Navbar