function PopupContainer({ children }) {
    return (
        <div className="absolute z-[9991] shadow-md top-[4.7rem] right-0 w-fit p-5 rounded-md bg-white">
            <div className="absolute -top-1 right-3 z-0 w-4 h-4 bg-white rounded-sm rotate-45"></div>
            {children}
        </div>
    );
}

export default PopupContainer;