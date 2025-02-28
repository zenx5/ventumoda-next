"use client"

export default function AddToCart({ productId }:{ productId:string|number }) {

    const handleClick = () => {
        console.log( productId )
    }

    return <button onClick={handleClick} className="flex flex-row w-full items-center justify-center gap-2 hover:text-main mt-2 group-hover:opacity-100 opacity-0 transition-opacity">
        <span className="py-1">Añadir al carrito</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
    </button>
}