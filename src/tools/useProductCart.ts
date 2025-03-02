import { useState, useEffect } from "react"
import Cart from "./Cart"
import Product from "./Models/Product"

export default function useProductCart() {
    const [products, setProducts] = useState<typeProductQuantifiable[]>([])
    const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        const id = setInterval(()=>{
            setQuantity( Cart.getTotal() )
        }, 500)
        return ()=>clearInterval(id)
    },[])

    useEffect(()=>{
        const cart = Cart.get()
        const data = (new Product).get().map( (product:typeProduct) => {
            const index = cart.index.indexOf( product.id )
            if( index===-1 ) return null
            return {
                ...product,
                quantity: cart.quantity[ index ]
            }
        } ) as typeProductQuantifiable[]
        setProducts( data?.filter( item => item!==null ) )
    },[quantity])

    const total = products.reduce( (acc, item) => {
        return acc + Number( item.price.slice(1) ) * item.quantity
    },0)

    return { products, quantity, total }
}