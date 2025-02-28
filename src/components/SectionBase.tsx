import { ReactNode } from "react";

export default function SectionBase({ className = "", children }:{ className?:string, children:ReactNode }) {

    return <section className={"max-w-screen-xl w-full mx-auto " + className}>
        { children }
    </section>

}