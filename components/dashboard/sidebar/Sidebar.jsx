import SquaresIcon from "@/components/dashboard/common/ui/icons/SquaresIcon";
import Dropdown from "./Dropdown";
import SettingsIcon from "@/components/dashboard/common/ui/icons/SettingsIcon";
import LogoutIcon from "@/components/dashboard/common/ui/icons/LogoutIcon";
import AboutIcon from "@/components/dashboard/common/ui/icons/AboutIcon";
import { motion } from 'framer-motion';

export default function Sidebar() {

    let list = [
        {
            name: 'dashboard',
            path: '/dashboard',
            icon: <SquaresIcon />
        },
        {
            name: 'posts',
            paths: [
                {
                    name: 'posts',
                    path: '/dashboard/posts',
                    icon: <SquaresIcon />
                },
                {
                    name: 'create',
                    path: '/dashboard/posts/create',
                    icon: <SquaresIcon />
                },
            ],
            icon: <SquaresIcon />
        },
        {
            name: 'about',
            path: '/dashboard/about',
            icon: <AboutIcon />
        },
        {
            name: 'settings',
            path: '/dashboard/settings',
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
            className="fixed top-0 left-0 bottom-0 w-[20%] bg-white shadow-md">

            <div className="p-6">
                <h1 className="text-2xl text-blue-900 font-bold">
                    &#9651;ure Dashboard
                </h1>
            </div>
            <div className="border-t-2 border-slate-100">

                <ul className="flex flex-col mt-8">
                    {list.map(li => {
                        if (li.path) {
                            return (<li className="flex items-center gap-x-2 px-5 py-3">
                                <div className="w-5 h-5 text-slate-400">
                                    {li.icon}
                                </div>
                                <span className="text-base text-blue-900 capitalize font-semibold">{li.name}</span>
                            </li>)
                        }

                        return (<Dropdown items={li.paths} key={li.name} />)

                    })}

                </ul>
            </div>

        </motion.section>
    )
}