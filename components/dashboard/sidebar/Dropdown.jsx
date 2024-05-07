'use client'

import ChevronDownIcon from "@/components/dashboard/common/ui/icons/ChevronDownIcon";
import PlusIcon from "@/components/dashboard/common/ui/icons/PlusIcon";
import SquaresIcon from "@/components/dashboard/common/ui/icons/SquaresIcon";
import { useState } from "react";

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleDropdown() {
        setIsOpen(prevState => !prevState)
    }
    return (
        <li className={`${isOpen ? 'bg-slate-100' : ''}`}>
            <div onClick={toggleDropdown} className="px-5 py-3 cursor-pointer flex justify-between items-center">
                <span className="flex items-center gap-x-2">
                    <div className="w-5 h-5 text-slate-400">
                        <PlusIcon />
                    </div>
                    <span className="text-base text-blue-900 font-semibold">Dropdown</span>
                </span>
                <div className="w-4 h-4 text-slate-400">
                    <ChevronDownIcon />
                </div>
            </div>

            {isOpen && (
                <ul className="flex flex-col px-5 pb-5">
                    <li className="flex items-center py-2 gap-x-2">
                        <div className="w-5 h-5 text-slate-400">
                            <SquaresIcon />
                        </div>
                        <span className="text-base text-blue-900 font-semibold">List item 1</span>
                    </li>
                    <li className="flex items-center py-2 gap-x-2">
                        <div className="w-5 h-5 text-slate-400">
                            <SquaresIcon />
                        </div>
                        <span className="text-base text-blue-900 font-semibold">List item 1</span>
                    </li>
                    <li className="flex items-center py-2 gap-x-2">
                        <div className="w-5 h-5 text-slate-400">
                            <SquaresIcon />
                        </div>
                        <span className="text-base text-blue-900 font-semibold">List item 1</span>
                    </li>
                    <li className="flex items-center py-2 gap-x-2">
                        <div className="w-5 h-5 text-slate-400">
                            <SquaresIcon />
                        </div>
                        <span className="text-base text-blue-900 font-semibold">List item 1</span>
                    </li>
                    <li className="flex items-center py-2 gap-x-2">
                        <div className="w-5 h-5 text-slate-400">
                            <SquaresIcon />
                        </div>
                        <span className="text-base text-blue-900 font-semibold">List item 1</span>
                    </li>
                </ul>
            )}
        </li>
    );
}

export default Dropdown;