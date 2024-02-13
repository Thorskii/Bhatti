"use client"
import Link from "next/link";
import NavLink from "./navLink";
import Image from "next/image";
import { useState } from "react";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About"},
    { url: "/portfolio", title: "Portfolio"},
    { url: "/contact", title: "Contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-black dark:text-neutral-200">
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link=>(
                    <NavLink link={link} key={link.title}></NavLink>                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-2">Bhatti</span>
                    <span className="w-20 h-8 rounded bg-slate-300 text-black flex items-center justify-center">Real Estate</span>
                </Link>
            </div>
            {/* SOCIALS */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="/">
                    <Image src="/instagram.png" alt="" width={24} height={24}></Image>
                </Link>
                <Link href="/">
                    <Image src="/facebook.png" alt="" width={24} height={24}></Image>
                </Link>
            </div>
            {/* HAMBURGER MENU */}
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                    <div className="w-10 h-1 bg-black dark:bg-white rounded"></div>
                    <div className="w-10 h-1 bg-black dark:bg-white rounded"></div>
                    <div className="w-10 h-1 bg-black dark:bg-white rounded"></div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map(link=>(
                        <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                )}  
                </div>
            </div>
    )
}

export default Navbar