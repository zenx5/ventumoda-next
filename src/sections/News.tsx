import ProductList from "@/components/ProductCard/ProductList"
import SectionBase from "@/components/SectionBase"
import Product from "@/tools/Models/Product"

export default function News() {
    const products = (new Product()).get()

    return <SectionBase>
        <h2 className="text-2xl uppercase font-bold text-center">Novedades</h2>
        <ProductList products={products.slice(0,4)} />
    </SectionBase>
}