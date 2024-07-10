function PopupCleaner({ onClick }) {
    return (
        <section onClick={onClick} className="fixed inset-0 cursor-pointer z-[999]"></section>
    );
}

export default PopupCleaner;