'use client'

import Breadcrumb from "@/components/dashboard/breadcrumb/Breadcrumb";
import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Toaster } from "@/components/ui/toaster";
import useWidth from "@/hooks/useWidth";
import PopupCleaner from "@/components/dashboard/header/PopupCleaner";

export default function DashboardLayout({ children }) {

    const [sidebarVis, setSidebarVis] = useState(false)

    function toggleSidebar() {
        setSidebarVis(prevState => !prevState)
    }

    const { width, breakpointPrefix } = useWidth()

    useEffect(() => {

        console.log(breakpointPrefix)
        if (breakpointPrefix === 'lg') {
            setSidebarVis(false)
        }

    }, [breakpointPrefix])

    return (
        <main className="relative">

            <AnimatePresence>
                {sidebarVis && (<>
                    <Sidebar toggleSidebar={toggleSidebar} />
                    {width < 1024 && (
                        <PopupCleaner onClick={toggleSidebar} />
                    )}
                </>)}

                <motion.section
                    key={2}
                    initial={{ left: 0 }}
                    animate={{ left: width < 1024 ? '0%' : sidebarVis ? (width >= 1536 ? '20%' : '30%') : '0%' }}
                    transition={{ bounce: 'none' }}
                    className={`absolute top-0 left-0 right-0 flex flex-col`}>
                    <Header toggleSidebar={toggleSidebar} />
                    <Breadcrumb />

                    <section className="p-5">
                        {children}
                    </section>

                </motion.section>
            </AnimatePresence>
            <Toaster />
        </main>
    )

}