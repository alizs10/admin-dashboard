'use client'

import ChevronDownIcon from "@/components/dashboard/common/ui/icons/ChevronDownIcon";
import { useState } from "react";
import { useRouter } from 'next/navigation'

function Dropdown({ items }) {

    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    function toggleDropdown() {
        setIsOpen(prevState => !prevState)
    }

    function handleRedirect(url) {
        router.push(url)
    }
    return (
        <li className={`${isOpen ? 'bg-slate-100' : ''}`}>
            <div onClick={toggleDropdown} className="px-5 py-3 cursor-pointer flex justify-between items-center">
                <span className="flex items-center gap-x-2">
                    <div className="w-5 h-5 text-slate-500">
                        {items[0].icon}
                    </div>
                    <span className="text-base text-slate-600 capitalize font-bold">{items[0].name}</span>
                </span>
                <div className="w-4 h-4 text-slate-400">
                    <ChevronDownIcon />
                </div>
            </div>

            {isOpen && (
                <ul className="flex flex-col px-5 pb-5">

                    {items.map(item => (
                        <li key={item.url} onClick={() => handleRedirect(item.path)} className="cursor-pointer flex items-center py-2 gap-x-2">
                            <div className="w-5 h-5 text-slate-500">
                                {item.icon}
                            </div>
                            <span className="text-base text-slate-600 capitalize">{item.name}</span>
                        </li>
                    ))}

                </ul>
            )}
        </li>
    );
}

export default Dropdown;