import Breadcrumb from "@/components/dashboard/breadcrumb/Breadcrumb";
import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

export default function DashboardLayout({ children }) {

    return (
        <main className="grid grid-cols-6">
            <Sidebar />
            <section className="col-span-5 flex flex-col">
                <Header />
                <Breadcrumb />

                <section className="p-5">
                    {children}
                </section>

            </section>
        </main>
    )

}