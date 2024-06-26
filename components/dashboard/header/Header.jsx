import SearchInput from "./search/SearchInput";
import Message from "./message/Message";
import Notification from "./notification/Notification";
import User from "./user/User";
import BarsIcon from "@/components/dashboard/common/ui/icons/BarsIcon";
import { useState } from "react";
import PopupCleaner from "./PopupCleaner";

export default function Header({ toggleSidebar }) {

    let popupsDefault = {
        user: false,
        messages: false,
        notifications: false
    }
    const [popups, setPopups] = useState(popupsDefault)

    function togglePopup(popupKey) {
        let popupKeys = ['user', 'messages', 'notifications']
        popupKeys = popupKeys.filter(key => key !== popupKey)
        setPopups(prevState => ({ [popupKey]: !prevState[popupKey], [popupKeys[0]]: false, [popupKeys[1]]: false }))
    }

    function cleanPopups() {
        setPopups(popupsDefault)
    }
    return (
        <section className="sticky top-0 z-10 p-5 bg-white dark:bg-slate-800 text-xl text-black shadow-md">

            <div className="flex justify-between items-center">

                <div className="w-1/3 flex items-center gap-x-4">
                    <button onClick={toggleSidebar} className="w-[10%] p-2 text-slate-600 dark:text-slate-400">
                        <BarsIcon />
                    </button>
                    <SearchInput />
                </div>
                <div className="relative flex gap-x-4 items-center">
                    <Notification toggle={togglePopup} popupVis={popups.notifications} />
                    <Message toggle={togglePopup} popupVis={popups.messages} />
                    <User toggle={togglePopup} popupVis={popups.user} />
                </div>

            </div>

            {(popups.messages || popups.user || popups.notifications) && (<PopupCleaner onClick={cleanPopups} />)}
        </section>
    )
}