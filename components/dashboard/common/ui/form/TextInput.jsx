function TextInput({ name, label, hint }) {


    return (
        <div className={`w-full flex flex-col bg-white dark:bg-slate-800 gap-y-1 border border-slate-300 dark:border-slate-700 text-slate-500 rounded-md p-3`}>
            <label className="text-base text-slate-600 dark:text-slate-300 capitalize">{label}</label>
            <input
                type="text"
                name={name}
                placeholder={label + " here..."}
                className="bg-transparent focus:outline-none text-lg p-1 dark:text-slate-400"
            />

            {hint && (
                <p className="text-xs text-slate-500 dark:text-slate-400">&#x2022; {hint}</p>
            )}

        </div>
    );
}

export default TextInput;