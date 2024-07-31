"use client"

import MoonIcon from "../../ui/icons/MoonIcon";
import SunIcon from "../../ui/icons/SunIcon";
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";

function ThemeToggle() {



    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const selectTheme = (theme) => {
        setTheme(theme)
    }

    console.log(currentTheme)

    return (
        <div className="w-14 h-7 relative self-center cursor-pointer">
            <div onClick={() => selectTheme('light')} className="flex justify-center items-center absolute left-0 top-0 size-7 rounded-full bg-slate-200 dark:bg-slate-700 dark:text-white">
                <div className="size-4 z-10">
                    <SunIcon />
                </div>
            </div>
            <div onClick={() => selectTheme('dark')} className="flex justify-center items-center absolute left-5 top-0 size-7 rounded-full bg-slate-200 dark:bg-slate-700 dark:text-white">
                <div className="size-4 z-10">
                    <MoonIcon />
                </div>
            </div>
            <motion.div
                animate={{ left: theme === 'light' ? 0 : '1.25rem' }}
                className={`size-7 bg-blue-200 dark:bg-blue-900 rounded-full absolute top-0 z-0 shadow-md`}></motion.div>
        </div>
    );
}

export default ThemeToggle;