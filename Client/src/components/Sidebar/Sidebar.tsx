interface SidebarProps {
    isOpen: boolean;
}

const Sidebar = ({
    isOpen
}: SidebarProps) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-base-200 w-80 p-4 transition-transform z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <ul className="menu text-base-content min-h-full">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
