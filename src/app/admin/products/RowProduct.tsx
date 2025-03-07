export default function RowProduct({ product }:{ product:typeProductQuantifiable }){

    return <tr key={product.id}>
        <td>{ product.id }</td>
        <td>
        <span>
            <span>{ product.title }</span>
            <span>{ product.slug }</span>
        </span>
        </td>
        <td>{ product.content.substring(0,10) }</td>
        <td>{ product.quantity }</td>
        <td>{ product.price }</td>
    </tr>
}