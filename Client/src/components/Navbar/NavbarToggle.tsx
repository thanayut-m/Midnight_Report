import { LuAlignJustify } from "react-icons/lu";

const NavbarToggle = ({
    onClick
}) => {
    return (
        <div
            className="text-2xl p-1 mr-2 hover:bg-gray-300 hover:p-1 hover:rounded-sm cursor-pointer"
            onClick={onClick}
        >
            <LuAlignJustify />
        </div>
    )
}
export default NavbarToggle