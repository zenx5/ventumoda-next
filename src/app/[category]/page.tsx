import ProductPreview from "@/components/ProductCard/ProductPreview"
import SectionBase from "@/components/SectionBase"
import Product from "@/tools/Models/Product"

export default async function Page({ params }:{ params:{ category:string }}) {
    const { category } = await params
    const products = (new Product).get({ category })

    return <SectionBase>
        <div>
            <h1 className="text-4xl font-bold mt-12 first-letter:uppercase">{category}</h1>
        </div>
        <div className="border-t border-slate-200 mt-4">
            <span className="grid grid-cols-3 gap-10 my-4">
                { products.map( product => <span className="col-span-1" key={product.id}>
                    <ProductPreview productId={product.id} {...product}/>
                </span>) }
            </span>
        </div>
    </SectionBase>
}