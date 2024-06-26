function ToggleInput({ name, label, space }) {

    let spaceClass;

    switch (space) {
        case 1:
            spaceClass = 'col-span-1'
            break;
        case 2:
            spaceClass = 'col-span-2'
            break;

        default:
            spaceClass = 'col-span-1'
            break;
    }

    return (

        <div className={`${spaceClass} flex justify-between items-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-500 rounded-md p-3`}>
            <label className="text-base capitalize text-slate-600 dark:text-slate-300">{label}</label>
            <label className="inline-flex items-center cursor-pointer">
                <input name={name} type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-slate-300 dark:bg-slate-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
    );
}

export default ToggleInput;