const NavbarUser = () => {
    return (
        <div className="flex gap-2 items-center pr-3">
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="flex flex-row items-center cursor-pointer hover:bg-gray-200 hover:rounded-4xl p-1 gap-2"
                >
                    <div
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <div className="mr-2">
                        <p className="text-gray-500">นายทดสอบ ทดสอบเยอะมาก</p>
                    </div>

                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-gray-300 srounded-box z-1 mt-3 w-70 p-2 shadow">
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavbarUser