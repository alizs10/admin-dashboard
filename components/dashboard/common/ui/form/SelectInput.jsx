import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{label}</SelectLabel>
                        {options.map(option => (
                            <SelectItem value={option}>{option}</SelectItem>
                        ))}

                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default SelectInput;