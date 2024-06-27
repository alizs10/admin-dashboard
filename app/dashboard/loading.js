'use client'
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Loading() {

    const [progress, setProgress] = useState(13)

    useEffect(() => {
        const timer = setInterval(() => setProgress(prevState => prevState + (0.2 * (100 - prevState))), 300)


        return () => clearInterval(timer)
    }, [])

    return (
        <section className="fixed z-[999999] inset-0 bg-white/80 dark:bg-slate-900/80 flex justify-center items-center">
            <div className="flex flex-col gap-y-2 justify-center w-1/2 lg:w-1/3">
                <Progress value={progress} className="w-full" />
                <p className="text-center text-xl text-black dark:text-white">loading</p>
            </div>
        </section>
    )
}