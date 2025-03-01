import Image from "next/image"
import SectionBase from "@/components/SectionBase"
import { products, currencies } from "@/tools/constant"
import product2 from "@/assets/product2.jpg"
import Details from "@/components/ProductDetail/Details"
import { redirect } from "next/navigation"

export default async function Page({ params }:{ params:{ slug:string } }) {
    const { slug } = await params
    const product = products.find( product => product.href.replace("/product/","").replace("/","") === slug  ) as typeProduct

    if( !product ) redirect("/")

    return <main className="my-10">
        <SectionBase className="grid grid-cols-2 gap-10">
            <div>
                <span className="py-2 flex flex-row gap-2 text-slate-600">
                    <span>Tienda</span>
                    <span>/</span>
                    <span>Categoria</span>
                    <span>/</span>
                    <span>{ product?.title }</span>
                </span>
                <Image src={product2} alt=""/>
            </div>
            <Details product={product} currencies={currencies} />
        </SectionBase>
    </main>
}