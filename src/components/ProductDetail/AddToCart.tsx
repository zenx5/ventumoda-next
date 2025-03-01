"use client"

import Cart from "@/tools/Cart"
import Link from "next/link"
import { useState } from "react"

export default function AddToCart({ productId }:{ productId:number }) {
    const [quantity, setQuantity] = useState(1)

    const handleClick = () => {
        Cart.add(productId, quantity)
        setQuantity(1)
    }


    return <div className="flex flex-row gap-1">
        <input type="number" className="border w-20 text-center rounded" value={quantity} onChange={ev=>setQuantity(Number(ev.target.value))}/>
        <button onClick={handleClick} className="py-2 px-8 bg-blue-500 text-lg text-white rounded text-nowrap">Añadir al carrito</button>
        <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK as string} className="py-2 px-8 bg-green-500 text-lg text-white rounded text-nowrap">Comprar por Whatsapp</Link>
    </div>

}