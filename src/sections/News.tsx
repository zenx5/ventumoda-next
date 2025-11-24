import ProductList from "@/components/ProductCard/ProductList"
import SectionBase from "@/components/SectionBase"
import Product from "@/tools/Models/Product"

export default async function News() {
    const products = await Product.getAll() ?? []

    return <SectionBase>
        <h2 className="text-2xl uppercase font-bold text-center">Novedades</h2>
        { products && <ProductList products={products?.slice(0,4)} />}
    </SectionBase>
}