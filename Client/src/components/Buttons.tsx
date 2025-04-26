interface ButtonsProps {
    children: React.ReactNode;
    isSubmitting?: boolean;
}

const Buttons = ({
    children,
    isSubmitting
}: ButtonsProps) => {
    return (
        <button
            disabled={isSubmitting}
            className="btn w-full bg-amber-400 hover:bg-amber-600 "
        >
            {isSubmitting ?
                <div className="flex flex-row">
                    <span className="loading loading-spinner text-warning mr-2"></span>
                    <p>กำลังเข้าสู่ระบบ...</p>
                </div>
                : children
            }
        </button>
    )
}
export default Buttons