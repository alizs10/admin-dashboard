import ChevronDownIcon from "@/components/dashboard/common/ui/icons/ChevronDownIcon";
import Image from "next/image";
import UserPopup from "./UserPopup";

function User({ toggle, popupVis }) {
    return (
        <div className="relative">

            <button onClick={() => toggle('user')} className="ml-4 flex gap-x-2 items-center">

                <Image
                    className="rounded-full"
                    src={'/avatar.jpg'}
                    width={40}
                    height={40} />
                <div className="flex gap-x-1 items-center text-blue-900">
                    <span className="text-sm font-bold">Ali ZS</span>
                    <div className="w-4">
                        <ChevronDownIcon />
                    </div>
                </div>
            </button>
            {popupVis && (<UserPopup />)}
        </div>
    );
}

export default User;