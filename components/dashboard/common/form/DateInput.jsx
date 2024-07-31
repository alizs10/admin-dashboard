function DateInput({ name, label, space }) {

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
            <input
                name={name}
                type="date"
                className="focus:outline-none text-base bg-transparent text-slate-600 dark:text-slate-400"
            />
        </div>
    );
}

export default DateInput;