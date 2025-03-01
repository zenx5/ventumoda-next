import ProductPreview from "@/components/ProductCard/ProductPreview"
import SectionBase from "@/components/SectionBase"
import Product from "@/tools/Models/Product"

export default function News() {
    const products = (new Product()).get()

    return <SectionBase>
        <h2 className="text-2xl uppercase font-bold text-center">Novedades</h2>
        <span className="grid md:grid-cols-4 grid-cols-2 gap-10 my-4">
            { products.slice(0,4).map( product => <span className="col-span-1" key={product.id}>
                <ProductPreview productId={product.id} {...product}/>
            </span>) }
        </span>
    </SectionBase>
}