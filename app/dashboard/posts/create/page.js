
import CKInput from "@/components/dashboard/common/ui/form/CKInput";
import CheckboxInput from "@/components/dashboard/common/ui/form/CheckboxInput";
import DateInput from "@/components/dashboard/common/ui/form/DateInput";
import Form from "@/components/dashboard/common/ui/form/Form";
import RadioInput from "@/components/dashboard/common/ui/form/RadioInput";
import SelectInput from "@/components/dashboard/common/ui/form/SelectInput";
import TextInput from "@/components/dashboard/common/ui/form/TextInput";
import Textarea from "@/components/dashboard/common/ui/form/Textarea";
import ToggleInput from "@/components/dashboard/common/ui/form/ToggleInput";
import ArrowPathIcon from "@/components/dashboard/common/ui/icons/ArrowPathIcon";
import SaveIcon from "@/components/dashboard/common/ui/icons/SaveIcon";

function page() {


    return (
        <section>
            <Form>
                <TextInput name={'title'} label={'title'} space={2} />
                <ToggleInput name={'status'} label={'status'} space={1} />
                <DateInput name={'publishDate'} label={'publish date'} space={1} />
                <RadioInput name={'RadioOption'} label={'radio option'} space={1} options={['option 1', 'option 2', 'option 3']} />
                <CheckboxInput name={'checkboxInput'} label={'checkbox input'} space={1} options={['option 1', 'option 2', 'option 3']} />
                <SelectInput name={'selectOption'} label={'select option'} space={2} options={['option 1', 'option 2', 'option 3']} />
                <Textarea name={'body'} label={'body'} space={2} />
                <CKInput name={'body'} label={'body'} space={2} />

                <div className="mt-4 pb-20 col-span-2 flex justify-end items-center gap-x-2">
                    <button className="px-4 py-2 rounded-md bg-white text-slate-500 text-lg shadow-md flex gap-x-2 items-center">
                        <div className="w-5 h-5">
                            <ArrowPathIcon />
                        </div>
                        <span>Reset</span>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-lg shadow-md flex gap-x-2 items-center">
                        <div className="w-4 h-4 fill-white">
                            <SaveIcon />
                        </div>
                        <span>
                            Save
                        </span>
                    </button>
                </div>
            </Form>
        </section>
    );
}

export default page;