import Link from "next/link"
import Image from "next/image"
import product1 from "@/assets/product1.jpg"
import AddToCart from "./AddToCart"

type typeProductPreview = {
    productId:  number
    price:      string
    slug:       string
    status:     string
    href:       string
    title:      string
    content:    string
    excerpt:    string
}

export default function ProductPreview({ productId, title, href, price }:typeProductPreview) {

    const textResponsive = {
        fontSize: "clamp(12px, 1vw, 24px)",
        maxWidth: "100%"
    }

    return <Link href={href} className="group relative my-4 mb-26 flex h-100 w-80 cursor-pointer flex-col pb-28 shadow overflow-hidden">
        <div className="relative h-80 w-80 overflow-hidden bg-black">
            <Image src={product1} alt="product1" className="absolute mx-auto h-auto w-96 blur" width={384} height={320}/>
            <Image src={product1} alt="product1" className="absolute right-7 left-7 bottom-0 h-auto w-11/12 blur-sm" width={267} height={320}/>
            <Image src={product1} alt="product1" className="absolute right-7 left-7 bottom-0 h-auto w-10/12" width={267} height={320}/>
        </div>
        <span className="h-20 absolute bottom-8 mx-auto w-full transition-all group-hover:bottom-16">
        <span className="mx-auto flex w-10/12 flex-col bg-white px-4">
            <span className="h-16 font-bold" style={textResponsive}>{ title }</span>
            <span className="text-md font-semibold" style={textResponsive}>{ price }</span>
            <AddToCart productId={productId} />
        </span>
        </span>
    </Link>
}
