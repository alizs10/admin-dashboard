import { useState } from "react";
import MoonIcon from "./ui/icons/MoonIcon";
import SunIcon from "./ui/icons/SunIcon";
import { motion } from 'framer-motion';

function ThemeToggle() {

    const [theme, setTheme] = useState(0)

    const selectTheme = (theme) => {
        setTheme(theme)
    }

    return (
        <div className="w-14 h-7 relative self-center">
            <div onClick={() => selectTheme(0)} className="flex justify-center items-center absolute left-0 top-0 size-7 rounded-full bg-slate-200">
                <div className="size-4 z-10">
                    <SunIcon />
                </div>
            </div>
            <div onClick={() => selectTheme(1)} className="flex justify-center items-center absolute left-5 top-0 size-7 rounded-full bg-slate-200">
                <div className="size-4 z-10">
                    <MoonIcon />
                </div>
            </div>
            <motion.div
                animate={{ left: theme === 0 ? 0 : '1.25rem' }}
                className={`size-7 bg-emerald-200 rounded-full absolute top-0 z-0 shadow-md`}></motion.div>
        </div>
    );
}

export default ThemeToggle;