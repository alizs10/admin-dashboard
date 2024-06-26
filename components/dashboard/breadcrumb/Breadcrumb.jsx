import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Breadcrumb() {

    const pathname = usePathname();
    const router = useRouter()
    const [pages, setPages] = useState(pathname.replace("/", "").split("/"))

    useEffect(() => {
        setPages(pathname.replace("/", "").split("/"))
    }, [pathname])

    function handleRedirect(pageIndex) {
        let paths = pages.slice(0, pageIndex + 1)
        let targetPath = "/" + paths.join("/");
        router.push(targetPath.replace(pathname, ""))
    }
    return (
        <section className="flex flex-col gap-y-2 text-lg text-black p-8">
            <p className="text-3xl text-blue-900 dark:text-blue-300 font-bold uppercase">{pages[pages.length - 1]}</p>
            <p className="text-slate-400 text-lg">
                <span className="capitalize text-slate-400 dark:text-slate-200">Home {" / "}</span>
                {pages.map((page, index) => {
                    if (index == pages.length - 1 || pages.length == 1) {
                        return (<span key={index}
                            className="capitalize text-slate-600 dark:text-slate-400">{page}</span>)
                    }
                    return (<span key={index}
                        onClick={() => handleRedirect(index)}
                        className="cursor-pointer capitalize text-slate-400">{page} {" / "}</span>)

                })}

            </p>
        </section>
    )
}