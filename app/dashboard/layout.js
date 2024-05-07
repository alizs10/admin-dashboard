'use client'

import Breadcrumb from "@/components/dashboard/breadcrumb/Breadcrumb";
import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from 'framer-motion';

export default function DashboardLayout({ children }) {

    const [sidebarVis, setSidebarVis] = useState(true)

    function toggleSidebar() {
        setSidebarVis(prevState => !prevState)
    }
    return (
        <main className="relative">

            <AnimatePresence>
                {sidebarVis && (<Sidebar />)}

                <motion.section
                    key={2}
                    initial={{ left: '20%' }}
                    animate={{ left: sidebarVis ? '20%' : '0%' }}
                    transition={{ bounce: 'none' }}
                    className={`absolute top-0 right-0 flex flex-col`}>
                    <Header toggleSidebar={toggleSidebar} />
                    <Breadcrumb />

                    <section className="p-5">
                        {children}
                    </section>

                </motion.section>
            </AnimatePresence>
        </main>
    )

}