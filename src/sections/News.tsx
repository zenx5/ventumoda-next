import ProductPreview from "@/components/ProductPreview"
import SectionBase from "@/components/SectionBase"
import { products } from "@/tools/constant"

export default function News() {

    return <SectionBase>
        <h2 className="text-2xl uppercase font-bold text-center">Novedades</h2>
        <span className="grid grid-cols-4 gap-6 my-4">
            { products.slice(0,4).map( product => <span className="col-span-1" key={product.id}>
                <ProductPreview productId={product.id} {...product}/>
            </span>) }
        </span>
    </SectionBase>
}