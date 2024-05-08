function RadioInput({ name, label, inputId }) {
    return (
        <div className="flex items-center gap-x-2">
            <div className="inline-flex items-center">
                <label className="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor={inputId}>
                    <input name={name} type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 focus:outline-none text-blue-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-500 before:opacity-0 before:transition-opacity checked:border-blue-600 checked:before:bg-blue-600 hover:before:opacity-15"
                        id={inputId} />
                    <span
                        className="absolute text-blue-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </span>
                </label>
            </div>
            <label htmlFor={inputId} className="cursor-pointer text-base text-slate-600">{label}</label>
        </div>
    );
}

export default RadioInput;