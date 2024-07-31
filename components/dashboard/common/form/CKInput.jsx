import dynamic from "next/dynamic";

function CKInput({ name, label, space }) {
    const Editor = dynamic(() => import("@/components/dashboard/common/form/Editor"), { ssr: false });

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
        <div className={`${spaceClass} h-fit flex flex-col bg-white dark:bg-slate-800 gap-y-1 border border-slate-300 dark:border-slate-700 text-slate-500 rounded-md p-3`}>
            <label className="text-base capitalize text-slate-600 dark:text-slate-300">{label}</label>
            <Editor />
        </div>
    );
}

export default CKInput;