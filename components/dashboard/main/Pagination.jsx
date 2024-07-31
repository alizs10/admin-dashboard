import ChevronLeftIcon from "../../ui/icons/ChevronLeftIcon"
import ChevronRightIcon from "../../ui/icons/ChevronRightIcon"

const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Pagination() {
    return (
        <div className="flex items-center justify-between rounded-b-md bg-white dark:bg-slate-800 px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-slate-300 dark:border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-slate-300 dark:border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-base text-slate-600 dark:text-slate-300">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 dark:text-slate-200 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <div className="w-6 h-6">
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </div>
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 focus:outline-offset-0" */}
                        <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 focus:z-20 focus:outline-offset-0"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:outline-offset-0">
                            ...
                        </span>
                        <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 focus:z-20 focus:outline-offset-0"
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 focus:z-20 focus:outline-offset-0"
                        >
                            10
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 dark:text-slate-200 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <div className="w-6 h-6">
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </div>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
