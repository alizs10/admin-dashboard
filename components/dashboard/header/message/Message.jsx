import MessageIcon from "@/components/dashboard/common/ui/icons/MessageIcon";

function Message() {
    return (
        <button className="relative p-2">
            <div className="text-slate-600">
                <MessageIcon />
            </div>
            <div className="text-[10px] rounded-md flex justify-center items-center text-white aspect-square absolute top-0 right-1 h-4 bg-green-700">4</div>
        </button>
    );
}

export default Message;