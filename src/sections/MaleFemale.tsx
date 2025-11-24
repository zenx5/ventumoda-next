import Image from "next/image"
import male from "@/assets/male.jpg"
import female from "@/assets/female.jpg"
import SectionBase from "@/components/SectionBase"
import Product from "@/tools/Models/Product"
import ProductList from "@/components/ProductCard/ProductList"

export default async function MaleFemale() {
    const products = await Product.getAll() ?? []

    return <SectionBase className="flex flex-col gap-2 ">
        <h2 className="text-2xl uppercase font-bold text-center mb-8">Damas y Caballeros</h2>
        <div className="grid grid-cols-2 gap-10">
            <Image src={female} alt="female" className="col-span-1"/>
            <Image src={male} alt="male" className="col-span-1"/>
        </div>
        { products && <ProductList products={products?.slice(0,4)} />}
    </SectionBase>
}