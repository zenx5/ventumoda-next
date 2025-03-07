export default function Layout({ children }:{ children:any }){

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar/>
            { children }
        </div>
    )
}

function Sidebar(){

    return <div className="w-64 bg-slate-200 p-5 shadow-xl">
        <nav className="mt-5">

        </nav>
    </div>
}