import BellIcon from "@/components/common/ui/icons/BellIcon";

function Notification() {
    return (
        <button className="relative p-2">
            <div className="text-slate-600">
                <BellIcon />
            </div>
            <div className="text-[10px] rounded-md flex justify-center items-center text-white aspect-square absolute top-0 right-1 h-4 bg-blue-700">3</div>
        </button>
    );
}

export default Notification;