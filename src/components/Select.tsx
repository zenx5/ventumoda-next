"use client"
import { MouseEventHandler, useState } from "react"
import Image from "next/image"

type ItemProps = {
    icon: string
    label: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

type SelectProps = {
    items:typeItem[]
    onChange?: ({index, item}:{ index:number, item:typeItem}) => void
}

type typeItem = {
    label: string
    icon: string
}

export default function Select({ items=[] }:SelectProps) {
    const [selection, setSelection] = useState(0)
    const [open, setOpen] = useState(false)

    if( items.length==0 ) return <small className="italic">No items</small>

    const handleSelection = (index:number) => () => {
        setSelection( index )
        setOpen( false )
    }

    return <div className="flex flex-col w-full relative">
        <button onClick={()=>setOpen(prev => !prev)} className="shrink-0 z-10 inline-flex gap-6 items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none " type="button">
            <span className="flex flex-row gap-3">
                { <Image src={items.at(selection)?.icon ?? ""} width={16} height={16} alt={items.at(selection)?.label ?? ""}/>  }
                <span className="text-nowrap">{items.at(selection)?.label}</span>
            </span>
            { open && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>}
            { !open && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>}
        </button>
        { open && <div className="absolute z-10 top-11 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full border border-gray-400">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                { items.map( (item:typeItem, index:number) => <Item key={`currency-${index}`} icon={item.icon} label={item.label} onClick={handleSelection(index)} />)}
            </ul>
        </div>}

    </div>
}

function Item({ icon, label, onClick }:ItemProps) {
    return <li>
        <button onClick={onClick} type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 ">
            <div className="inline-flex items-center gap-3">
                <Image src={icon ?? ""} width={16} height={16} alt={label ?? ""}/>
                <span className="text-nowrap">{label}</span>
            </div>
        </button>
    </li>
}