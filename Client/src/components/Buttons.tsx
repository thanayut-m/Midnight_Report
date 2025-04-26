interface ButtonsProps {
    children: React.ReactNode;
    isSubmitting?: boolean;
    width?: string;
}

const Buttons = ({
    children,
    isSubmitting,
    width
}: ButtonsProps) => {
    return (
        <button
            disabled={isSubmitting}
            className={`btn bg-amber-400 hover:bg-amber-600 ${width}`}
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