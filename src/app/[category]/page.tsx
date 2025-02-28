
export default async function Page({ params }:{ params:{ category:string }}) {
    const { category } = await params
    return <main>
        <h1 className="text-2xl font-bold">{category}</h1>
    </main>
}