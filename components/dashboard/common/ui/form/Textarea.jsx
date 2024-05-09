function Textarea({ name, label, space }) {

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
        <div className={`${spaceClass} flex flex-col bg-white gap-y-1 border border-slate-300 text-slate-500 rounded-md p-3`}>
            <label className="text-base capitalize text-slate-600 font-semibold">{label}</label>
            <textarea
                name={name}
                placeholder="textarea here..."
                className="focus:outline-none text-lg p-1"
            />
        </div>
    );
}

export default Textarea;