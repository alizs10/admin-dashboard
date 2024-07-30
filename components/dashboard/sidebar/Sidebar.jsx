import SquaresIcon from "@/components/dashboard/common/ui/icons/SquaresIcon";
import Dropdown from "./Dropdown";
import SettingsIcon from "@/components/dashboard/common/ui/icons/SettingsIcon";
import LogoutIcon from "@/components/dashboard/common/ui/icons/LogoutIcon";
import AboutIcon from "@/components/dashboard/common/ui/icons/AboutIcon";
import { motion } from 'framer-motion';
import ThemeToggle from "../common/ThemeToggle";
import { usePathname } from "next/navigation";
import BarsLeftIcon from "../common/ui/icons/BarsLeftIcon";
import Link from "next/link";
import DocSearchIcon from "../common/ui/icons/DocSearchIcon";

export default function Sidebar({ toggleSidebar }) {

    const pathname = usePathname();

    let list = [
        {
            name: 'dashboard',
            path: '/dashboard',
            active: pathname === '/dashboard' ? true : false,
            icon: <SquaresIcon />
        },
        {
            name: 'posts',
            paths: [
                {
                    name: 'posts',
                    path: '/dashboard/posts',
                    active: pathname === '/dashboard/posts' ? true : false,
                    icon: <SquaresIcon />
                },
                {
                    name: 'create',
                    path: '/dashboard/posts/create',
                    active: pathname === '/dashboard/posts/create' ? true : false,
                    icon: <SquaresIcon />
                },
            ],
            icon: <SquaresIcon />
        },
        {
            name: 'skills',
            paths: [
                {
                    name: 'skills',
                    path: '/dashboard/posts',
                    active: pathname === '/dashboard/posts' ? true : false,
                    icon: <SquaresIcon />
                },
                {
                    name: 'create',
                    path: '/dashboard/posts/create',
                    active: pathname === '/dashboard/posts/create' ? true : false,
                    icon: <SquaresIcon />
                },
            ],
            icon: <SquaresIcon />
        },
        {
            name: 'seo',
            path: '/dashboard/seo',
            active: pathname === '/dashboard/seo' ? true : false,
            icon: <DocSearchIcon />
        },
        {
            name: 'settings',
            path: '/dashboard/settings',
            active: pathname === '/dashboard/settings' ? true : false,
            icon: <SettingsIcon />
        },
        {
            name: 'about',
            path: '/dashboard/about',
            active: pathname === '/dashboard/about' ? true : false,
            icon: <AboutIcon />
        },
        {
            name: 'logout',
            path: '/dashboard/logout',
            icon: <LogoutIcon />
        },
    ]

    return (
        <motion.section
            key={1}
            initial={{ left: '-100%' }}
            animate={{ left: 0 }}
            exit={{ left: '-100%' }}
            transition={{ bounce: 'none' }}
            className="fixed top-0 bottom-0 z-[99999] w-4/5 md:w-1/2 lg:w-[30%] 2xl:w-1/5 bg-white dark:bg-slate-800 shadow-md">

            <div className="p-6 flex justify-between">
                <div className="flex gap-x-4 items-center">
                    <button onClick={toggleSidebar} className="lg:hidden size-6 text-slate-600 dark:text-slate-400">
                        <BarsLeftIcon />
                    </button>
                    <h1 className="text-2xl text-blue-900 dark:text-blue-200 font-bold">
                        &#9651;ure Dashboard
                    </h1>
                </div>

                <ThemeToggle />
            </div>
            <div className="">

                <ul className="flex flex-col mt-8">
                    {list.map((li) => {
                        if (li.path) {
                            return (
                                <Link href={li.path}>
                                    <li className={`flex cursor-pointer items-center gap-x-2 px-5 py-3 ${li.active ? 'text-blue-800 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400'}`}>
                                        <div className={`w-5 h-5`}>
                                            {li.icon}
                                        </div>
                                        <span className={`text-base capitalize`}>{li.name}</span>
                                    </li>
                                </Link>
                            )
                        }

                        return (<Dropdown items={li.paths} key={li.name} />)

                    })}

                </ul>
            </div>

        </motion.section>
    )
}