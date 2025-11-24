"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ListProduct from "./ListProduct"
import useProductCart from "@/tools/useProductCart"

export default function BadgedCart() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const { quantity, products } = useProductCart()

    useEffect(()=>{
        const disableScroll = () => window.scrollTo(0,0)
        if( open ) window.addEventListener('scroll', disableScroll)
        else window.removeEventListener('scroll', disableScroll)
        return () => window.removeEventListener('scroll', disableScroll)
    },[open])

    const getTotal = () => {
        return products.reduce( (acc, item)=>{
            return acc + item.price * item.quantity
        },0)
    }

    const disabled = pathname==='/pagar'

    if( disabled && open ) setOpen(false)

    return <>
        <button className="relative disabled:text-slate-400" onClick={()=>setOpen(prev => !prev)} disabled={disabled}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {quantity>0 && <BadgedNumber value={quantity} disabled={disabled} />}
        </button>
        { ( !disabled && open) && <div className="w-screen h-screen absolute top-0 left-0 z-20 bg-slate-50 opacity-80 blur"/>}
        { ( !disabled && open) && <div className="absolute bg-white w-1/3 h-screen top-0 right-0 z-30 py-1 px-4 shadow">
            <div className="flex flex-row justify-end mt-4 h-[5%]">
                <button onClick={()=>setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col justify-between h-[90%]">
                <span className="">
                    <span className="flex flex-row justify-between px-4 my-5">
                        <h2 className="font-bold text-xl">Carrito</h2>
                        <span className="font-bold text-xl">{ getTotal() }</span>
                    </span>
                    <ListProduct products={products} />
                </span>
                <div className="px-4">
                    <Link href="/pagar" className="block text-center bg-green-500 text-white py-2 px-8 w-full rounded">Pagar</Link>
                </div>
            </div>
        </div>}
    </>
}

function BadgedNumber({ value, disabled = false }:{ value:number, disabled:boolean }) {
    return <span className={`${disabled ? 'bg-red-300' :'bg-red-600'} absolute text-xs -top-2 -right-3 text-white p-2 w-4 h-4 rounded-full flex items-center justify-center`}>{ value }</span>
}