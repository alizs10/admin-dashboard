import ChevronDownIcon from "@/components/dashboard/common/ui/icons/ChevronDownIcon";
import Image from "next/image";
import UserPopup from "./UserPopup";

function User({ toggle, popupVis }) {
    return (
        <div className="relative">

            <button onClick={() => toggle('user')} className="md:ml-4 flex gap-x-2 items-center">

                <Image
                    className="rounded-full aspect-square object-cover"
                    src={'/avatar.jpg'}
                    width={40}
                    height={40}
                    alt="User avatar"
                />
                <div className="gap-x-1 items-center hidden md:flex text-blue-900 dark:text-blue-200">
                    <span className="text-sm">Ali ZS</span>
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