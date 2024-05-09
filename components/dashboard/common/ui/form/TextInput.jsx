function TextInput({ name, label, space }) {

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
            <label className="text-base text-slate-600 capitalize font-semibold">{label}</label>
            <input
                type="text"
                name={name}
                placeholder="title here..."
                className="focus:outline-none text-lg p-1"
            />
        </div>
    );
}

export default TextInput;