function SelectInput({ name, label, space, options }) {

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
        <div className={`${spaceClass} flex flex-col bg-white dark:bg-slate-800 gap-y-1 border border-slate-300 dark:border-slate-700 text-slate-500 rounded-md p-3`}>
            <label className="text-base text-slate-600 dark:text-slate-300 capitalize">
                {label}
            </label>

            <select
                name={name}
                autoComplete="country-name"
                className="w-full bg-transparent focus:outline-none text-slate-600 dark:text-slate-400 py-2 text-lg"
            >
                {options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>

        </div>
    );
}

export default SelectInput;