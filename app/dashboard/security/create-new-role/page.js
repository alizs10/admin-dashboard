
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

function CreateNewRolePage() {


    return (
        <section>
            <Form>
                <div className="col-span-6 md:col-span-3">
                    <TextInput name={'roleName'} label={'role name'} />
                </div>
                <div className="col-span-6 md:col-span-3">
                    <ToggleInput name={'status'} label={'status'} />
                </div>
                <div className="col-span-6">
                    <Textarea name={'desc'} label={'description'} />
                </div>
                <div className="col-span-6">
                    <CheckboxInput name={'permissions'} label={'permissions'} options={['permission 1', 'permission 2', 'permission 3']} />
                </div>


                <div className="mt-4 pb-20 col-span-6 flex justify-end items-center gap-x-2">
                    <button className="px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-500/20 text-slate-500 dark:text-slate-300 text-lg shadow-md flex gap-x-2 items-center">
                        <div className="w-4 h-4">
                            <ArrowPathIcon />
                        </div>
                        <span>Reset</span>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-blue-100 dark:bg-blue-500/20 text-blue-500 dark:text-blue-300 text-lg shadow-md flex gap-x-2 items-center">
                        <div className="w-4 h-4  fill-blue-500 dark:fill-blue-300">
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

export default CreateNewRolePage;