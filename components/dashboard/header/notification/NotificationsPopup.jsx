import BellIcon from "../../common/ui/icons/BellIcon";
import EyeIcon from "../../common/ui/icons/EyeIcon";
import PopupContainer from "../PopupContainer";

function NotificationsPopup() {
    return (
        <PopupContainer>
            <div className="w-[350px] flex justify-between items-center border-b pb-2 border-slate-200">
                <h2 className="text-lg font-bold text-blue-900">12 Notifications</h2>
                <button className="flex gap-x-2 items-center text-slate-400">
                    <div className="w-4 h-4">
                        <EyeIcon />
                    </div>
                    <span className="text-sm">Seen All</span>
                </button>
            </div>
            <ul className="pt-4 flex flex-col gap-y-4">
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 flex items-center gap-x-2">
                        <div className="w-6 h-6 text-blue-600">
                            <BellIcon />
                        </div>
                        <p className="text-base">
                            someone liked your work!
                            <span className="text-xs text-slate-400">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-4 h-4">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 flex items-center gap-x-2">
                        <div className="w-6 h-6 text-red-500">
                            <BellIcon />
                        </div>
                        <p className="text-base">
                            someone disliked your work!
                            <span className="text-xs text-slate-400">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-4 h-4">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 flex items-center gap-x-2">
                        <div className="w-6 h-6 text-yellow-500">
                            <BellIcon />
                        </div>
                        <p className="text-base">
                            someone liked your work!
                            <span className="text-xs text-slate-400">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-4 h-4">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 flex items-center gap-x-2">
                        <div className="w-6 h-6 text-green-500">
                            <BellIcon />
                        </div>
                        <p className="text-base">
                            someone liked your work!
                            <span className="text-xs text-slate-400">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-4 h-4">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 flex items-center gap-x-2">
                        <div className="w-6 h-6 text-purple-500">
                            <BellIcon />
                        </div>
                        <p className="text-base">
                            someone liked your work!
                            <span className="text-xs text-slate-400">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-4 h-4">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 flex items-center gap-x-2">
                        <div className="w-6 h-6">
                            <BellIcon />
                        </div>
                        <p className="text-base">
                            someone liked your work!
                            <span className="text-xs text-slate-400">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-4 h-4">
                            <EyeIcon />
                        </div>
                    </button>
                </li>

            </ul>
        </PopupContainer>
    );
}

export default NotificationsPopup;