type ListProductProps = {
    products:typeProductQuantifiable[]
}

export default function ListProduct({ products = [] }:ListProductProps) {

    return <ul className="divide-y">
        <li className="bg-main text-white">
            <span className="grid grid-cols-3 py-4 px-4">
                <span className="col-span-1 uppercase font-bold text-lg">Producto</span>
                <span className="col-span-1 text-center uppercase font-bold text-lg">Cantidad</span>
                <span className="col-span-1 text-center uppercase font-bold text-lg">Precio</span>
            </span>
        </li>
        { products.length>0 && products.map( product => <li key={product.id} className="hover:bg-main/10">
            <span className="grid grid-cols-3 py-4 px-4">
                <span className="col-span-1 text-lg ">{ product.title }</span>
                <span className="col-span-1 text-lg text-center">{ product.quantity }</span>
                <span className="col-span-1 text-lg text-center">{ product.price }</span>
            </span>
        </li> )}
    </ul>
}