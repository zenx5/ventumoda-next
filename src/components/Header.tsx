import Image from "next/image"
import logo from "@/assets/logo.png"
import Link from "next/link"
import NavMenu from "./Navigation/NavMenu"
import Select from "./Select"
import { links, currencies } from "@/tools/constant"


export default async function Header() {

    return <header className="flex flex-row justify-between py-1 max-w-screen-2xl w-full mx-auto">
        <div className="flex w-1/2">
            <Image src={logo} alt="" width={126} height={76} className="mx-8"/>
            <nav className="w-full">
                <NavMenu links={links} />
            </nav>
        </div>
        <div className="grid grid-cols-10 gap-1 w-1/2">
            <span className="col-span-3 col-start-2 flex items-center justify-center">
                <span className="flex flex-row gap-1 border border-slate-700 px-2 rounded-full items-center overflow-hidden mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="search" className="py-1 border-none outline-none "/>
                </span>
            </span>
            <span className="col-span-2 flex items-center justify-center">
                <Select items={currencies}/>
            </span>
            <span className="col-span-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </span>
            <span className="col-span-2 flex items-center justify-center">
                <Link href="/login" className="font-bold text-sm text-slate-600 hover:text-[#FFB3B3]">Login</Link>
            </span>
        </div>
    </header>
}