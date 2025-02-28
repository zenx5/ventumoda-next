import ProductPreview from "@/components/ProductPreview"
import SectionBase from "@/components/SectionBase"

export default function News() {

    const products = [
        { id:1, name:"Producto ", price:"25,00$" },
        { id:2, name:"Producto ", price:"25,00$" },
        { id:3, name:"Producto ", price:"25,00$" },
        { id:4, name:"Producto ", price:"25,00$" },
    ]

    return <SectionBase>
        <h2 className="text-2xl uppercase font-bold text-center">Novedades</h2>
        <span className="grid grid-cols-4 gap-6 my-4">
            { products.map( product => <span className="col-span-1" key={product.id}>
                <ProductPreview productId={product.id} {...product}/>
            </span>) }
        </span>
    </SectionBase>
}