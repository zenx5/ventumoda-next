import RowInvoice from "./RowInvoice";

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
                    { invoices.map( invoice => <RowInvoice key={invoice.id} invoice={invoice} /> )}
                </tbody>
            </table>
        </div>
      </div>
    );
}
