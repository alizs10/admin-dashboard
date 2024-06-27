import SquaresIcon from "@/components/dashboard/common/ui/icons/SquaresIcon";
import Dropdown from "./Dropdown";
import SettingsIcon from "@/components/dashboard/common/ui/icons/SettingsIcon";
import LogoutIcon from "@/components/dashboard/common/ui/icons/LogoutIcon";
import AboutIcon from "@/components/dashboard/common/ui/icons/AboutIcon";
import { motion } from 'framer-motion';
import ThemeToggle from "../common/ThemeToggle";
import { usePathname } from "next/navigation";

export default function Sidebar() {

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
            name: 'about',
            path: '/dashboard/about',
            active: pathname === '/dashboard/about' ? true : false,
            icon: <AboutIcon />
        },
        {
            name: 'settings',
            path: '/dashboard/settings',
            active: pathname === '/dashboard/settings' ? true : false,
            icon: <SettingsIcon />
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
            initial={{ left: 0 }}
            animate={{ left: 0 }}
            exit={{ left: '-100%' }}
            transition={{ bounce: 'none' }}
            className="fixed top-0 left-0 bottom-0 w-[20%] bg-white dark:bg-slate-800 shadow-md">

            <div className="p-6 flex justify-between">
                <h1 className="text-2xl text-blue-900 dark:text-blue-200 font-bold">
                    &#9651;ure Dashboard
                </h1>

                <ThemeToggle />
            </div>
            <div className="">

                <ul className="flex flex-col mt-8">
                    {list.map((li) => {
                        if (li.path) {
                            return (<li className={`flex cursor-pointer items-center gap-x-2 px-5 py-3 ${li.active ? 'text-blue-800 dark:text-blue-300' : 'text-slate-400'}`}>
                                <div className={`w-5 h-5`}>
                                    {li.icon}
                                </div>
                                <span className={`text-base capitalize`}>{li.name}</span>
                            </li>)
                        }

                        return (<Dropdown items={li.paths} key={li.name} />)

                    })}

                </ul>
            </div>

        </motion.section>
    )
}