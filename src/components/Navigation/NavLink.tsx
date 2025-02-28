import Link from "next/link"

export default function NavLink({ label, href }:{ label:string, href:string }) {
    return <li data-pathname={href} className={" border-main w-full m-0 text-center h-full flex items-center justify-center px-3 py-5"}>
        <Link href={href} className="link-clickable font-bold text-sm hover:text-main" style={{ color:"#475569" }}>{ label }</Link>
    </li>
}