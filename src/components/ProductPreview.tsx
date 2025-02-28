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


    return <Link href={href} className="flex flex-col group relative pb-16 my-4 mb-20 cursor-pointer" >
        <Image src={product1} alt="product1" className="w-full mx-auto"/>
        <span className="w-full mx-auto absolute group-hover:-bottom-2 -bottom-12 transition-all">
            <span className="flex flex-col w-10/12 mx-auto bg-white px-4 pt-4">
                <span className="text-lg font-bold">{ title }</span>
                <span className="text-lg font-semibold">{ price }</span>
                <AddToCart productId={productId} />
            </span>
        </span>
    </Link>
}