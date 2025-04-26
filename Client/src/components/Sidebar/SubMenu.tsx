import { useState } from "react";
import { Link } from "react-router";

interface SidebarMenuItemProps {
    title: string;
    subItems?: { title: string; to: string }[];
}

const SubMenu = ({
    title,
    subItems
}: SidebarMenuItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div className="flex justify-between items-center" onClick={toggleSubmenu}>
                <span>{title}</span>
                {subItems && (
                    <span>{isOpen ? "-" : "+"}</span>
                )}
            </div>
            {subItems && isOpen && (
                <ul className="pl-4">
                    {subItems.map((subItem, index) => (
                        <li key={index}>
                            <Link to={subItem.to}>{subItem.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SubMenu;
