import MessageIcon from "@/components/ui/icons/MessageIcon";
import MessagesPopup from "./MessagesPopup";

function Message({ toggle, popupVis }) {
    return (
        <div className="relative pt-2 pr-2">
            <button onClick={() => toggle('messages')} className="text-slate-600 dark:text-slate-400">
                <div className="h-6 w-6">
                    <MessageIcon />
                </div>
            </button>
            <div className="text-[10px] rounded-md flex justify-center items-center text-white aspect-square absolute top-0 right-1 h-4 bg-green-700">4</div>

            {popupVis && (<MessagesPopup />)}
        </div>
    );
}

export default Message;