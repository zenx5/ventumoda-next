import Image from "next/image"
import ProductPreview from "@/components/ProductPreview"
import male from "@/assets/male.jpg"
import female from "@/assets/female.jpg"
import SectionBase from "@/components/SectionBase"

export default function MaleFemale() {
    const products = [
        { id:1, name:"Producto ", price:"10.00$" },
        { id:2, name:"Producto ", price:"10.00$" },
        { id:3, name:"Producto ", price:"10.00$" },
        { id:4, name:"Producto ", price:"10.00$" },
    ]

    return <SectionBase className="flex flex-col gap-2 ">
        <h2 className="text-2xl uppercase font-bold text-center mb-8">Damas y Caballeros</h2>
        <div className="grid grid-cols-2 gap-10">
            <Image src={female} alt="female" className="col-span-1"/>
            <Image src={male} alt="male" className="col-span-1"/>
        </div>
        <span className="grid grid-cols-4 gap-6 my-4">
            {/** flex flex-row justify-between */}
            { products.map( product => <span className="col-span-1" key={product.id}>
                <ProductPreview productId={product.id} {...product}/>
            </span>) }
        </span>
    </SectionBase>
}