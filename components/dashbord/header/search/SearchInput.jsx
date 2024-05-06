import SearchIcon from "@/components/common/ui/icons/SearchIcon";

function SearchInput() {
    return (
        <div className="overflow-hidden w-[90%] flex justify-between items-center gap-x-2 rounded-md border border-slate-300">
            <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 focus:outline-none text-sm text-slate-600" />
            <div className="p-2 text-slate-600">
                <SearchIcon />
            </div>
        </div>
    );
}

export default SearchInput;