import NavMenu from "./Navigation/NavMenu";
import { links } from "@/tools/constant";
import logo from "@/assets/logo.png"
import FacebookIcon from "@/assets/facebook.svg"
import TwitterIcon from "@/assets/twitter.svg"
import YoutubeIcon from "@/assets/youtube.svg"
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Footer() {

    return <footer className="flex flex-col">
        <div className="grid grid-cols-12">
            <span className="col-span-5">
                <NavMenu links={links}/>
            </span>
            <span className="flex flex-row justify-center items-center gap-4 col-span-3">
                <IconRrss src={FacebookIcon} />
                <IconRrss src={TwitterIcon} />
                <IconRrss src={YoutubeIcon} />
            </span>
            <span className="col-span-4 text-center">
                <Image src={logo} alt="" width={252} height={152} className="mx-8"/>
            </span>
        </div>
        <div className="bg-[#13181B] py-8 text-center">
            <span className="font-bold text-white text-lg">@2025 VentuModa</span>
        </div>
    </footer>
}

function IconRrss({ src }:{ src:string|StaticImport }) {

    return <span className="rounded-full p-6 h-10 w-10 border flex items-center justify-center relative">
        <Image src={src} alt="Facebook" width={32} height={32} className="z-10 absolute "/>
    </span>
}