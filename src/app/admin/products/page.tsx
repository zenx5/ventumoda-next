
export default async function Page() {
  const products:typeProductQuantifiable[] = []

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
        <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold">Productos</h1>
            <button className="bg-white py-1 px-4 rounded">Agregar Producto</button>
        </div>
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <table className="w-full">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Cliente</th>
                  <th>Descripción</th>
                  <th>Stock</th>
                  <th>Precio</th>
              </tr>
          </thead>
          <tbody>
              { products.map( product => <tr key={product.id}>
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
              </tr>)}
          </tbody>
      </table>
      </div>
    </div>
  );
}
