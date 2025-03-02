"use client"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ButtonPayProps = {
    className: string
    src: string | StaticImport 
    width: number
    height: number
}

export default function ButtonPay({ className = "", src, width, height }:ButtonPayProps) {

    return <button className={"flex items-center justify-center " + className}>
        <Image src={src} alt="" width={width} height={height}/>
    </button>
}