'use client'

import DeleteIcon from "../../common/ui/icons/DeleteIcon";
import EditIcon from "../../common/ui/icons/EditIcon";
import EyeIcon from "../../common/ui/icons/EyeIcon";

function Table() {
    return (
        <table className="w-full table table-auto overflow-hidden rounded-t-md">

            <thead>
                <tr className="bg-white text-left">
                    <th className="capitalize px-5 py-3 border border-t-0 border-l-0 border-slate-300">#</th>
                    <th className="capitalize px-5 py-3 border border-t-0 border-slate-300">title</th>
                    <th className="capitalize px-5 py-3 border border-t-0 border-slate-300">status</th>
                    <th className="capitalize px-5 py-3 border border-t-0 border-r-0 border-slate-300">actions</th>
                </tr>
            </thead>
            <tbody>

                <tr className="odd:bg-slate-100 even:bg-slate-50">
                    <td className="px-5 py-3 border border-l-0 border-slate-300">1</td>
                    <td className="px-5 py-3 border border-slate-300">my title</td>
                    <td className="px-5 py-3 border border-slate-300">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </td>
                    <td className="px-5 py-3 border border-r-0 border-slate-300">
                        <div className="flex flex-nowrap gap-x-2 items-center">
                            <button className="px-2 py-1 rounded-md bg-yellow-500 text-sm text-black flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EditIcon />
                                </div>
                                Edit
                            </button>
                            <button className="px-2 py-1 rounded-md bg-red-600 text-sm text-white flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <DeleteIcon />
                                </div>
                                Delete
                            </button>
                            <button className="px-2 py-1 rounded-md bg-green-700 text-sm text-white flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EyeIcon />
                                </div>
                                Show
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="odd:bg-slate-100 even:bg-slate-50">
                    <td className="px-5 py-3 border border-l-0 border-slate-300">1</td>
                    <td className="px-5 py-3 border border-slate-300">my title</td>
                    <td className="px-5 py-3 border border-slate-300">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </td>
                    <td className="px-5 py-3 border border-r-0 border-slate-300">
                        <div className="flex flex-nowrap gap-x-2 items-center">
                            <button className="px-2 py-1 rounded-md bg-yellow-500 text-sm text-black flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EditIcon />
                                </div>
                                Edit
                            </button>
                            <button className="px-2 py-1 rounded-md bg-red-600 text-sm text-white flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <DeleteIcon />
                                </div>
                                Delete
                            </button>
                            <button className="px-2 py-1 rounded-md bg-green-700 text-sm text-white flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EyeIcon />
                                </div>
                                Show
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="odd:bg-slate-100 even:bg-slate-50">
                    <td className="px-5 py-3 border border-l-0 border-slate-300">1</td>
                    <td className="px-5 py-3 border border-slate-300">my title</td>
                    <td className="px-5 py-3 border border-slate-300">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </td>
                    <td className="px-5 py-3 border border-r-0 border-slate-300">
                        <div className="flex flex-nowrap gap-x-2 items-center">
                            <button className="px-2 py-1 rounded-md bg-yellow-500 text-sm text-black flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EditIcon />
                                </div>
                                Edit
                            </button>
                            <button className="px-2 py-1 rounded-md bg-red-600 text-sm text-white flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <DeleteIcon />
                                </div>
                                Delete
                            </button>
                            <button className="px-2 py-1 rounded-md bg-green-700 text-sm text-white flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EyeIcon />
                                </div>
                                Show
                            </button>
                        </div>
                    </td>
                </tr>



            </tbody >
        </table >
    );
}

export default Table;