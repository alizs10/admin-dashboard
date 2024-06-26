import BookIcon from "../../common/ui/icons/BookIcon";
import EyeIcon from "../../common/ui/icons/EyeIcon";
import MessageIcon from "../../common/ui/icons/MessageIcon";
import PopupContainer from "../PopupContainer";

function MessagesPopup() {
    return (
        <PopupContainer>
            <div className="w-[350px] flex justify-between items-center border-b pb-2 border-slate-200">
                <h2 className="text-lg text-blue-900 dark:text-blue-200">12 Messages</h2>
                <button className="flex gap-x-2 items-center text-slate-400">
                    <div className="w-5 h-5">
                        <BookIcon />
                    </div>
                    <span className="text-sm">Read All</span>
                </button>
            </div>
            <ul className="pt-4 flex flex-col gap-y-4">
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                        <p className="text-base">
                            nice website mate!
                            <span className="text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-5 h-5">
                            <BookIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                        <p className="text-base">
                            nice website mate!
                            <span className="text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-5 h-5">
                            <BookIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                        <p className="text-base">
                            nice website mate!
                            <span className="text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-5 h-5">
                            <BookIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                        <p className="text-base">
                            nice website mate!
                            <span className="text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-5 h-5">
                            <BookIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                        <p className="text-base">
                            nice website mate!
                            <span className="text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-5 h-5">
                            <BookIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                        <p className="text-base">
                            nice website mate!
                            <span className="text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-5 h-5">
                            <BookIcon />
                        </div>
                    </button>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-slate-500 dark:text-slate-400 flex items-center gap-x-2">
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                        <p className="text-base">
                            nice website mate!
                            <span className="text-xs text-slate-400 dark:text-slate-300">{" - "}45 min</span>
                        </p>

                    </div>
                    <button className="pt-1 flex gap-x-2 items-center text-slate-400">
                        <div className="w-5 h-5">
                            <BookIcon />
                        </div>
                    </button>
                </li>


            </ul>
        </PopupContainer>
    );
}

export default MessagesPopup;