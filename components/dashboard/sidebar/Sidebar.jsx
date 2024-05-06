import SquaresIcon from "@/components/dashboard/common/ui/icons/SquaresIcon";
import Dropdown from "./Dropdown";
import SettingsIcon from "@/components/dashboard/common/ui/icons/SettingsIcon";
import LogoutIcon from "@/components/dashboard/common/ui/icons/LogoutIcon";
import AboutIcon from "@/components/dashboard/common/ui/icons/AboutIcon";

export default function Sidebar() {
    return (
        <section className="col-span-1 h-screen bg-white shadow-sm">

            <div className="p-6">
                <h1 className="text-2xl text-blue-900 font-bold">
                    &#9651;ure Dashboard
                </h1>
            </div>
            <div className="border-t-2 border-slate-100">

                <ul className="flex flex-col mt-8">
                    <li className="flex items-center gap-x-2 px-5 py-3">
                        <div className="w-5 h-5 text-slate-400">
                            <SquaresIcon />
                        </div>
                        <span className="text-base text-blue-900 font-bold">Dashboard</span>
                    </li>
                    <Dropdown key={1} />
                    <li className="flex items-center gap-x-2 px-5 py-3">
                        <div className="w-5 h-5 text-slate-400">
                            <SettingsIcon />
                        </div>
                        <span className="text-base text-blue-900 font-bold">Settings</span>
                    </li>
                    <li className="flex items-center gap-x-2 px-5 py-3">
                        <div className="w-5 h-5 text-slate-400">
                            <AboutIcon />
                        </div>
                        <span className="text-base text-blue-900 font-bold">About</span>
                    </li>
                    <li className="flex items-center gap-x-2 px-5 py-3">
                        <div className="w-5 h-5 text-slate-400">
                            <LogoutIcon />
                        </div>
                        <span className="text-base text-blue-900 font-bold">Logout</span>
                    </li>
                </ul>
            </div>

        </section>
    )
}