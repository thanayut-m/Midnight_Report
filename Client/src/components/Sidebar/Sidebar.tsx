import { GrFormClose } from "react-icons/gr";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

interface SidebarProps {
    isOpen: boolean;
    onToggleSidebar: () => void;
}

const Sidebar = ({
    isOpen,
    onToggleSidebar
}: SidebarProps) => {
    return (
        <div>
            <div
                className={`${!isOpen ? "hidden" : ""} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-40`}
                onClick={onToggleSidebar}
            ></div>

            <div
                className={`${isOpen ? "w-80" : "w-0"} bg-base-200 min-h-screen fixed top-0 left-0 transition-all duration-300 z-50 overflow-hidden`}
            >
                <div className={`${!isOpen && "hidden"} pt-2`}>
                    <div className="flex justify-end items-center">
                        <GrFormClose
                            size={30}
                            onClick={onToggleSidebar}
                            className="text-gray-500 mr-4 cursor-pointer"
                        />
                    </div>
                    <div className="">
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
                            <MenuItem
                                title="Report Power BI"
                                link="/private/powerBi-reports"
                                onToggleSidebar={onToggleSidebar}
                            />
                            <SubMenu
                                title="Sidebar Item 2"
                                subItems={[
                                    { title: "Submenu Item 1", to: "/submenu1" },
                                    { title: "Submenu Item 2", to: "/submenu2" }
                                ]}
                            />
                            <MenuItem
                                title="ตั้งค่าการใช้งาน"
                                link="/private/setting"
                                onToggleSidebar={onToggleSidebar}
                            />
                            <SubMenu
                                title="Setting"
                            />
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
