import Pagination from "@/components/dashboard/main/Pagination";
import Table from "@/components/dashboard/main/table/Table";

function PostsIndexPage() {
    return (
        <div>
            <Table />
            <Pagination />
        </div>
    );
}

export default PostsIndexPage;