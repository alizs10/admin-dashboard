import RadioOption from "./RadioOption";

function RadioInput({ name, label, space, options }) {

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
        <div className={`${spaceClass} flex flex-col gap-y-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-500 rounded-md p-3`}>
            <h2 className="text-base capitalize text-slate-600 dark:text-slate-300">{label}</h2>
            <div className="flex flex-col gap-y-2">
                {options.map((option, index) => (<RadioOption key={index} name={name} inputId={'option' + index} option={option} />))}
            </div>
        </div>
    );
}

export default RadioInput;