import Breadcrumb from "@/components/dashbord/breadcrumb/Breadcrumb";
import Header from "@/components/dashbord/header/Header";
import Sidebar from "@/components/dashbord/sidebar/Sidebar";

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