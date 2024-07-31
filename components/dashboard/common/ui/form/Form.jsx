function Form({ children }) {
    return (
        <form className="p-3 grid grid-cols-6 gap-4">
            {children}
        </form>
    );
}

export default Form;