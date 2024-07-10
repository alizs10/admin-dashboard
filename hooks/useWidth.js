import { useEffect, useState } from "react";

export default function useWidth() {

    let [width, setWidth] = useState(undefined)
    let [breakpointPrefix, setBreakpointPrefix] = useState(undefined)


    useEffect(() => {
        function handleResize() {

            if (window.innerWidth < 640) {
                setBreakpointPrefix('xs')
            }

            if (window.innerWidth >= 640 && window.innerWidth < 768) {
                setBreakpointPrefix('sm')
            }

            if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setBreakpointPrefix('md')
            }

            if (window.innerWidth >= 1024 && window.innerWidth <= 1280) {
                setBreakpointPrefix('lg')
            }

            if (window.innerWidth >= 1280 && window.innerWidth <= 1536) {
                setBreakpointPrefix('xl')
            }


            if (window.innerWidth > 1536) {
                setBreakpointPrefix('2xl')
            }

            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return { width, breakpointPrefix };
}