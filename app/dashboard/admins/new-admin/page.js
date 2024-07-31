import UserIcon from "@/components/ui/icons/UserIcon";
import SearchInput from "@/components/dashboard/header/search/SearchInput";
import Image from "next/image";
import XIcon from "@/components/ui/icons/XIcon";
import ArrowPathIcon from "@/components/ui/icons/ArrowPathIcon";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

import SelectInput from "@/components/dashboard/common/form/SelectInput";


function page() {


    return (
        <section className="p-3">
            <SearchInput placeholder={'Search users by email or name'} />

            <div className="mt-4 flex flex-col gap-y-4">
                <h2 className="text-base text-slate-500 dark:text-slate-300">
                    Results: 2
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                    <div className="col-span-1 flex flex-col items-center rounded-md bg-white dark:bg-slate-800 shadow-sm p-3">
                        <div className="w-full flex items-center gap-x-4">
                            <Image
                                className="rounded-full aspect-square object-cover"
                                src={'/avatar.jpg'}
                                width={80}
                                height={80}
                                alt="User avatar"
                            />
                            <div className="flex flex-col w-full">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-base text-blue-900 dark:text-blue-200">John Doe</h2>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <div className="size-3 text-slate-400">
                                        <UserIcon />
                                    </div>
                                    <p className="text-xs text-slate-400">admin</p>
                                </div>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-left text-xs font-bold text-blue-600 dark:text-blue-400">Change Role</button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Edit User's Role</DialogTitle>
                                            <DialogDescription>
                                                Make changes to user's profile here. Click update when you're done.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div>
                                            <SelectInput label={'User Role'} name={'role'} options={['admin', 'user']} key={'role'} />
                                        </div>

                                        <DialogFooter>
                                            <div className="flex justify-end items-center gap-x-2">
                                                <DialogClose>
                                                    <button className="px-3 py-2 rounded-md bg-slate-200 dark:bg-slate-500/20 text-slate-500 dark:text-slate-300 text-base shadow-md flex gap-x-2 items-center">
                                                        <div className="size-4">
                                                            <XIcon />
                                                        </div>
                                                        <span>Close</span>
                                                    </button>
                                                </DialogClose>
                                                <button className="px-3 py-2 rounded-md bg-blue-100 dark:bg-blue-500/20 text-blue-500 dark:text-blue-300 text-base shadow-md flex gap-x-2 items-center">
                                                    <div className="size-4  fill-blue-500 dark:fill-blue-300">
                                                        <ArrowPathIcon />
                                                    </div>
                                                    <span>
                                                        Update
                                                    </span>
                                                </button>
                                            </div>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default page;