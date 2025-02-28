import Image from "next/image"
import SectionBase from "@/components/SectionBase"
import Select from "@/components/Select"
import { products, currencies } from "@/tools/constant"
import product2 from "@/assets/product2.jpg"

export default async function Page({ params }:{ params:{ slug:string } }) {
    const { slug } = await params
    const product = products.find( product => product.href.replace("/product/","").replace("/","") === slug  )

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
            <div className="pt-10 flex flex-col gap-10">
                <h1 className="text-4xl font-bold">{ product?.title }</h1>
                <span className="text-2xl">{ product?.price }</span>
                <span className="w-1/4">
                    <Select items={currencies}/>
                </span>
                <p dangerouslySetInnerHTML={{ __html:product?.excerpt ?? "" }} className="text-lg"/>
                <div className="flex flex-row gap-1">
                    <input type="number" className="border w-20 text-center rounded"/>
                    <button className="py-2 px-8 bg-blue-500 text-lg text-white rounded text-nowrap">Añadir al carrito</button>
                    <button className="py-2 px-8 bg-green-500 text-lg text-white rounded text-nowrap">Comprar por Whatsapp</button>
                </div>
            </div>
        </SectionBase>
    </main>
}