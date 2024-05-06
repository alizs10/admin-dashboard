import EllipsisHIcon from "@/components/common/ui/icons/EllipsisHIcon";

function CardHeader({ title, time }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-1">
                <h2 className="text-lg text-blue-800 font-bold">{title}</h2>
                <span className="text-slate-400 font-light text-sm"> | {time}</span>
            </div>

            <button className="text-slate-400">
                <EllipsisHIcon />
            </button>
        </div>
    );
}

export default CardHeader;