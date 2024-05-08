import CheckboxInput from "@/components/dashboard/common/ui/form/CheckboxInput";
// import Editor from "@/components/dashboard/common/ui/form/Editor";
import RadioInput from "@/components/dashboard/common/ui/form/RadioInput";
import dynamic from "next/dynamic";

function page() {

    const Editor = dynamic(() => import("@/components/dashboard/common/ui/form/Editor"), { ssr: false });

    return (
        <section>
            <form className="p-3 flex flex-col gap-y-4">
                <div className="flex flex-col bg-white gap-y-1 border border-slate-300 text-slate-500 rounded-md p-3">
                    <label className="text-base text-slate-600 font-semibold">Title</label>
                    <input
                        type="text"
                        placeholder="title here..."
                        className="focus:outline-none text-lg p-1"
                    />
                </div>
                <div className="flex justify-between items-center bg-white border border-slate-300 text-slate-500 rounded-md p-3">
                    <label className="text-base text-slate-600 font-semibold">Status</label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <div className="flex flex-col bg-white gap-y-1 border border-slate-300 text-slate-500 rounded-md p-3">
                    <label className="text-base text-slate-600 font-semibold">
                        Country
                    </label>

                    <select
                        autoComplete="country-name"
                        className="w-full focus:outline-none py-2 text-lg"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>

                </div>
                <div className="flex justify-between items-center bg-white border border-slate-300 text-slate-500 rounded-md p-3">
                    <label className="text-base text-slate-600 font-semibold">Publish Date</label>
                    <input
                        type="date"
                        className="focus:outline-none text-lg p-1"
                    />
                </div>
                <div className="flex flex-col gap-y-2 bg-white border border-slate-300 text-slate-500 rounded-md p-3">
                    <h2 className="text-base text-slate-600 font-semibold">Radio Input</h2>
                    <div className="flex flex-col gap-y-2">

                        <RadioInput name={'radioInput'} inputId={'radioInputId1'} label={'Option 1'} />
                        <RadioInput name={'radioInput'} inputId={'radioInputId2'} label={'Option 2'} />
                        <RadioInput name={'radioInput'} inputId={'radioInputId3'} label={'Option 3'} />

                    </div>
                </div>
                <div className="flex flex-col gap-y-2 bg-white border border-slate-300 text-slate-500 rounded-md p-3">
                    <h2 className="text-base text-slate-600 font-semibold">Checkbox Input</h2>
                    <div className="flex flex-col gap-y-2">

                        <CheckboxInput name={'checkboxInput'} inputId={'checkboxInputId1'} label={'Option 1'} />
                        <CheckboxInput name={'checkboxInput'} inputId={'checkboxInputId2'} label={'Option 2'} />
                        <CheckboxInput name={'checkboxInput'} inputId={'checkboxInputId3'} label={'Option 3'} />

                    </div>
                </div>
                <div className="flex flex-col bg-white gap-y-1 border border-slate-300 text-slate-500 rounded-md p-3">
                    <label className="text-base text-slate-600 font-semibold">Textarea Input</label>
                    <textarea
                        placeholder="textarea here..."
                        className="focus:outline-none text-lg p-1"
                    />
                </div>
                <div className="flex flex-col bg-white gap-y-1 border border-slate-300 text-slate-500 rounded-md p-3">
                    <label className="text-base text-slate-600 font-semibold">Body</label>
                    <Editor />
                </div>
            </form>
        </section>
    );
}

export default page;