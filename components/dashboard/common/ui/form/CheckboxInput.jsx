import Checkbox from "./Checkbox";

function CheckboxInput({ name, label, space, options }) {

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
        <div className={`${spaceClass} flex flex-col gap-y-2 bg-white border border-slate-300 text-slate-500 rounded-md p-3`}>
            <h2 className="text-base capitalize text-slate-600 font-semibold">{label}</h2>
            <div className="flex flex-col gap-y-2">
                {options.map((option, index) => (<Checkbox key={index} name={name} inputId={name + index} label={option} />))}
            </div>
        </div>
    );
}

export default CheckboxInput;