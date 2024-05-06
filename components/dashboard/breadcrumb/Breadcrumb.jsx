export default function Breadcrumb() {
    return (
        <section className="flex flex-col gap-y-2 text-lg text-black p-8">
            <p className="text-3xl text-blue-900 font-bold">Title</p>
            <p className="text-slate-400 text-lg">
                <span className="text-slate-400">Home</span>
                {" / "}
                <span className="text-slate-600">Dashboard</span>
            </p>
        </section>
    )
}