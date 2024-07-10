import Image from "next/image";
import ChevronRightIcon from "../../common/ui/icons/ChevronRightIcon";
import PopupContainer from "../PopupContainer";
import UserIcon from "../../common/ui/icons/UserIcon";

function UserPopup() {
    return (
        <PopupContainer>
            <div className="w-full flex items-center gap-x-4">
                <Image
                    className="rounded-full aspect-square object-cover"
                    src={'/avatar.jpg'}
                    width={80}
                    height={80}
                    alt="User avatar"
                />
                <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-lg font-bold text-blue-900 dark:text-blue-200">John Doe</h2>
                        <div className="w-6 h-6 text-blue-900 dark:text-blue-200">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className="w-4 h-4 text-slate-400">
                            <UserIcon />
                        </div>
                        <p className="text-sm text-slate-400">admin</p>
                    </div>
                </div>
            </div>
        </PopupContainer>
    );
}

export default UserPopup;