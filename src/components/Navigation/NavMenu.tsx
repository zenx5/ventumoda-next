import Script from "next/script"
import NavLink from "./NavLink"

export default function NavMenu({ links }:{ links:{ label:string, href:string}[] }) {
    return <>
        <ul className="id-nav-menu flex flex-row justify-between gap-2 items-center h-full w-full ">
            { links.map( link => <NavLink key={link.label.toLowerCase().replaceAll(' ','')} {...link} />) }
        </ul>
        <Script src="scripts/active-link.js"/>
    </>
}