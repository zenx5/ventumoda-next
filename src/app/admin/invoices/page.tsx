export default async function Page() {
    const invoices:typeInvoices[] = []

    return (
      <div className="p-6 bg-gray-100 min-h-screen w-full">
          <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-bold">Facturas</h1>
          </div>
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Cliente</th>
                        <th>Metodo de Pago</th>
                        <th>Articulos</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    { invoices.map( invoice => <tr key={invoice.id}>
                        <td>{ invoice.id }</td>
                        <td>{ invoice.description }</td>
                        <td>{ invoice.client.name }</td>
                        <td>{ invoice.paymentMethod }</td>
                        <td>{ invoice.products.length }</td>
                        <td>{ invoice.total }</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
      </div>
    );
}
