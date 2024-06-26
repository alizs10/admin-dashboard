function Card({ children, space }) {
    return (
        <div className={`rounded-md h-fit flex flex-col gap-y-4 bg-white dark:bg-slate-800 shadow-md p-5 col-span-1 ${space}`}>
            {children}
        </div>
    );
}

export default Card;