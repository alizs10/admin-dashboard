import ConfirmModal from "@/components/dashboard/common/ConfirmModal";
import Pagination from "@/components/dashboard/main/Pagination";
import Table from "@/components/dashboard/main/table/Table";

function PostsIndexPage() {
    return (
        <div>
            <div className="overflow-x-scroll scrollbar-hide">
                <Table />
            </div>
            <Pagination />
            <ConfirmModal />
        </div>
    );
}

export default PostsIndexPage;