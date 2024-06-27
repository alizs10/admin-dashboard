'use client'

import DeleteIcon from "../../common/ui/icons/DeleteIcon";
import EditIcon from "../../common/ui/icons/EditIcon";
import EyeIcon from "../../common/ui/icons/EyeIcon";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function Table() {

    return (
        <table className="w-full table table-auto overflow-hidden rounded-t-md">

            <thead>
                <tr className="bg-white dark:bg-slate-800 text-left">
                    <th className="capitalize px-5 py-3 border border-t-0 border-l-0 border-slate-300 dark:border-slate-500">#</th>
                    <th className="capitalize px-5 py-3 border border-t-0 border-slate-300 dark:border-slate-500">title</th>
                    <th className="capitalize px-5 py-3 border border-t-0 border-slate-300 dark:border-slate-500">status</th>
                    <th className="capitalize px-5 py-3 border border-t-0 border-r-0 border-slate-300 dark:border-slate-500">actions</th>
                </tr>
            </thead>
            <tbody>

                <tr className="odd:bg-slate-100 dark:odd:bg-slate-700 even:bg-slate-50 dark:even:bg-slate-600">
                    <td className="px-5 py-3 border border-l-0 border-slate-300 dark:border-slate-500">1</td>
                    <td className="px-5 py-3 border border-slate-300 dark:border-slate-500">my title</td>
                    <td className="px-5 py-3 border border-slate-300 dark:border-slate-500">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-slate-300 dark:bg-slate-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </td>
                    <td className="px-5 py-3 border border-r-0 border-slate-300 dark:border-slate-500">
                        <div className="flex flex-nowrap gap-x-2 items-center">
                            <button className="px-2 py-1 rounded-md bg-yellow-100 dark:bg-yellow-300/30 shadow-md text-sm text-yellow-600 dark:text-yellow-200 flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EditIcon />
                                </div>
                                Edit
                            </button>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <div className="px-2 py-1 rounded-md bg-red-100 dark:bg-red-300/30 shadow-md text-sm text-red-500 dark:text-red-400 flex items-center gap-x-1">
                                        <div className="w-4 h-4">
                                            <DeleteIcon />
                                        </div>
                                        Delete
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete
                                            and remove data from servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <button className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-300/30 shadow-md text-sm text-emerald-500 dark:text-emerald-300 flex items-center gap-x-1">
                                <div className="w-4 h-4">
                                    <EyeIcon />
                                </div>
                                Preview
                            </button>
                        </div>
                    </td>
                </tr>




            </tbody >
        </table >
    );
}

export default Table;