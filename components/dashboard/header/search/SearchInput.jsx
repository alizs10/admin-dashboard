import SearchIcon from "@/components/ui/icons/SearchIcon";

function SearchInput({ placeholder }) {
    return (
        <div className="overflow-hidden bg-white dark:bg-slate-800 w-full flex justify-between items-center gap-x-2 border rounded-md border-slate-200 dark:border-slate-500">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full py-2 px-4 focus:outline-none text-sm text-slate-600 dark:text-slate-400 bg-transparent" />
            <div className="py-2 px-4 text-slate-600 dark:text-slate-400">
                <SearchIcon />
            </div>
        </div>
    );
}

export default SearchInput;