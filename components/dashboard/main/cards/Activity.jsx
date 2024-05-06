function Activity({ color }) {

    let themeClass = 'bg-blue-600'

    switch (color) {
        case 'blue':
            themeClass = 'bg-blue-600'
            break;
        case 'red':
            themeClass = 'bg-red-500'
            break;
        case 'green':
            themeClass = 'bg-green-500'
            break;
        case 'yellow':
            themeClass = 'bg-yellow-400'
            break;
        case 'orange':
            themeClass = 'bg-orange-400'
            break;
        case 'purple':
            themeClass = 'bg-purple-600'
            break;

        default:
            themeClass = 'bg-blue-600'
            break;
    }

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <span className="text-slate-400 text-sm">32 min</span>
            </div>
            <div className="col-span-3 relative">
                <p className="border-l-4 pl-4 pb-2 border-slate-200 text-slate-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className={`absolute border-4 border-white top-0 left-0 -translate-x-[6px] h-4 w-4 rounded-full ${themeClass}`}></div>
            </div>
        </div>
    );
}

export default Activity;