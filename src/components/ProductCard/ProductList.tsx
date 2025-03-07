import ProductPreview from "./ProductPreview"

export default function ProductList({ products }:{ products:typeProduct[] }) {

    return <span className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-4">
        { products.map( product => <span className="col-span-1 p-1 mx-auto" key={product.id}>
            <ProductPreview productId={product.id} {...product}/>
        </span>) }
    </span>
}