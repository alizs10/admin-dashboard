import ChevronDownIcon from "@/components/common/ui/icons/ChevronDownIcon";
import Image from "next/image";

function User() {
    return (
        <button className="ml-4 flex gap-x-2 items-center">

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
    );
}

export default User;