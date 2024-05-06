import SearchInput from "./search/SearchInput";
import Message from "./message/Message";
import Notification from "./notification/Notification";
import User from "./user/User";
import BarsIcon from "@/components/common/ui/icons/BarsIcon";

export default function Header() {
    return (
        <section className="p-5 bg-white text-xl text-black shadow-sm">

            <div className="flex justify-between items-center">

                <div className="w-1/3 flex items-center gap-x-4">
                    <button className="w-[10%] p-2 text-slate-600">
                        <BarsIcon />
                    </button>
                    <SearchInput />
                </div>
                <div className="flex gap-x-4 items-center">
                    <Notification />
                    <Message />
                    <User />
                </div>

            </div>



        </section>
    )
}