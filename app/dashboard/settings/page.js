import TextInput from "@/components/dashboard/common/form/TextInput";
import ArrowPathIcon from "@/components/ui/icons/ArrowPathIcon";
import XIcon from "@/components/ui/icons/XIcon";

function SettingsIndexPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
                <TextInput label={'site title'} name={'siteTitle'} key={'siteTitle'} />
                <TextInput label={'tagline'} name={'tagline'} key={'tagline'} hint={'In a few words, explain what your site is about.'} />
            </div>

            <div className="flex justify-end items-center gap-x-2">
                <button className="px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-500/20 text-slate-500 dark:text-slate-300 text-lg shadow-md flex gap-x-2 items-center">
                    <div className="size-4">
                        <XIcon />
                    </div>
                    <span>Cancel</span>
                </button>
                <button className="px-4 py-2 rounded-md bg-blue-100 dark:bg-blue-500/20 text-blue-500 dark:text-blue-300 text-lg shadow-md flex gap-x-2 items-center">
                    <div className="size-4  fill-blue-500 dark:fill-blue-300">
                        <ArrowPathIcon />
                    </div>
                    <span>
                        Update
                    </span>
                </button>
            </div>
        </div>
    );
}

export default SettingsIndexPage;