interface ButtonsProps {
    children: React.ReactNode;
}

const Buttons = ({
    children
}: ButtonsProps) => {
    return (
        <button
            className="btn w-full bg-amber-400 hover:bg-amber-600 "
        >
            {children}
        </button>
    )
}
export default Buttons