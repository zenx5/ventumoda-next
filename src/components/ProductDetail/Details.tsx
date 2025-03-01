import Select from "../Select"
import AddToCart from "./AddToCart"

type typeDetailsProps = {
    product: typeProduct
    currencies:{
        label:  string
        icon:   string
    }[]
}

export default function Details({ currencies, product }:typeDetailsProps) {

    return <div className="pt-10 flex flex-col gap-10">
        <h1 className="text-4xl font-bold">{ product?.title }</h1>
        <span className="text-2xl">{ product?.price }</span>
        <span className="w-1/4">
            <Select items={currencies}/>
        </span>
        <div dangerouslySetInnerHTML={{ __html: product?.excerpt }} className="text-lg"/>
        <AddToCart productId={product.id}/>
    </div>
}