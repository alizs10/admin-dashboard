import BellIcon from "../../common/ui/icons/BellIcon";
import EyeIcon from "../../common/ui/icons/EyeIcon";
import PopupContainer from "../PopupContainer";

function NotificationsPopup() {
    return (
        <PopupContainer>
            <div className="w-full flex justify-between items-center border-b pb-2 border-slate-200 dark:border-slate-600">
                <h2 className="text-sm md:text-lg text-blue-900 dark:text-blue-200">12 Notifications</h2>
                <button className="flex gap-x-2 items-center text-slate-400">
                    <div className="size-4 md:size-5">
                        <EyeIcon />
                    </div>
                    <span className="text-xs md:text-sm">Seen All</span>
                </button>
            </div>
            <ul className="pt-4 flex flex-col gap-y-4">
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="size-5 md:size-6 text-blue-600 dark:text-blue-400">
                            <BellIcon />
                        </div>
                        <p className="text-xs md:text-base">
                            someone liked your work!
                            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="size-4 md:size-5">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="size-5 md:size-6 text-red-500">
                            <BellIcon />
                        </div>
                        <p className="text-xs md:text-base">
                            someone disliked your work!
                            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="size-4 md:size-5">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="size-5 md:size-6 text-yellow-500">
                            <BellIcon />
                        </div>
                        <p className="text-xs md:text-base">
                            someone liked your work!
                            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="size-4 md:size-5">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="size-5 md:size-6 text-green-500">
                            <BellIcon />
                        </div>
                        <p className="text-xs md:text-base">
                            someone liked your work!
                            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="size-4 md:size-5">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="size-5 md:size-6 text-purple-500">
                            <BellIcon />
                        </div>
                        <p className="text-xs md:text-base">
                            someone liked your work!
                            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="size-4 md:size-5">
                            <EyeIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="size-5 md:size-6">
                            <BellIcon />
                        </div>
                        <p className="text-xs md:text-base">
                            someone liked your work!
                            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="size-4 md:size-5">
                            <EyeIcon />
                        </div>
                    </button>
                </li>

            </ul>
        </PopupContainer>
    );
}

export default NotificationsPopup;