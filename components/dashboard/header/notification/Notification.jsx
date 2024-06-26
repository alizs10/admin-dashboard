import BellIcon from "@/components/dashboard/common/ui/icons/BellIcon";
import NotificationsPopup from "./NotificationsPopup";

function Notification({ toggle, popupVis }) {
    return (
        <div className="relative pt-2 pr-2">
            <button onClick={() => toggle('notifications')} className="text-slate-600 dark:text-slate-400">
                <div className="w-6 h-6">
                    <BellIcon />
                </div>
            </button>
            <div className="text-[10px] rounded-md flex justify-center items-center text-white aspect-square absolute top-0 right-1 h-4 bg-blue-700">3</div>
            {popupVis && (<NotificationsPopup />)}
        </div>
    );
}

export default Notification;