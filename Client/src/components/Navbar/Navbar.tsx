import { LuAlignJustify } from "react-icons/lu";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="flex-1 pl-3">
                <div className="flex gap-3 items-center">
                    <div className="text-2xl p-1 mr-2 hover:bg-gray-300 hover:p-1 hover:rounded-sm ">
                        <LuAlignJustify />
                    </div>
                    <Link to={"/private/dashboard"} className="font-semibold text-2xl">
                        Midnight Report
                    </Link>
                </div>
            </div>
            <div className="flex gap-2 items-center pr-3">
                <div className="mr-3">
                    <p>นายทดสอบ ทดสอบ</p>
                    <p>เข้าใช้ระบบเมื่อ</p>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar