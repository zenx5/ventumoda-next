export default function RowInvoice({ invoice }:{ invoice:typeInvoices }) {

    return <tr>
        <td>{ invoice.id }</td>
        <td>{ invoice.description }</td>
        <td>{ invoice.client.name }</td>
        <td>{ invoice.paymentMethod }</td>
        <td>{ invoice.products.length }</td>
        <td>{ invoice.total }</td>
    </tr>
}