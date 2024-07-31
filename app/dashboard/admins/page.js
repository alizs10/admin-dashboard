import PlusIcon from "@/components/ui/icons/PlusIcon";
import Pagination from "@/components/dashboard/main/Pagination";
import Table from "@/components/dashboard/main/table/Table";
import Link from "next/link";

function AdminsIndexPage() {
    return (
        <div>

            <Link href={'/dashboard/admins/new-admin'}>
                <button className="flex items-center gap-x-2 px-4 py-2 mb-4 text-lg rounded-md shadow-sm bg-white dark:bg-slate-800 dark:text-slate-300 text-slate-700">
                    <div className="size-5">
                        <PlusIcon />
                    </div>
                    <span>New Admin</span>
                </button>
            </Link>
            <div className="overflow-x-scroll scrollbar-hide">
                <Table />
            </div>
            <Pagination />
        </div>
    );
}

export default AdminsIndexPage;