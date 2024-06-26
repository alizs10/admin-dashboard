import EllipsisHIcon from "@/components/dashboard/common/ui/icons/EllipsisHIcon";

function CardHeader({ title, time }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-1">
                <h2 className="text-lg text-blue-900 dark:text-blue-200 font-bold dark:font-normal">{title}</h2>
                <span className="text-slate-400 font-light text-sm"> | {time}</span>
            </div>

            <button className="text-slate-400">
                <EllipsisHIcon />
            </button>
        </div>
    );
}

export default CardHeader;