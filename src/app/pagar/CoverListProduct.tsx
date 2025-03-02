"use client"
import ListProduct from "@/components/Cart/ListProduct"
import useProductCart from "@/tools/useProductCart"

export default function CoverListProduct() {
    const { products, total } = useProductCart()

    return <>
        <ListProduct products={products} />
        <ul className="divide-y">
            <li className="bg-main text-white">
                <span className="grid grid-cols-3 py-4 px-4">
                    <span className="col-span-1 col-start-2 text-center uppercase font-bold text-lg">TOTAL</span>
                    <span className="col-span-1 text-center uppercase font-bold text-lg">{ total }</span>
                </span>
            </li>
        </ul>
    </>
}