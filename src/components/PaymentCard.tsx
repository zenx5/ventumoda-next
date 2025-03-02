import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

export default function PaymentCard({ src,className, children }:{ src:string|StaticImageData, className?:string, children?:ReactNode }) {

    return <div className="shadow p-4 divide-y-2 flex flex-col gap-2">
        <Image src={src} alt="" className="h-10 w-fit mx-auto my-4"/>
        <div className={className}>
            { children }
        </div>
    </div>
}