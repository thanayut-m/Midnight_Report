import { Link } from "react-router"

interface MenuItemProps {
    title: string;
    link: string,
    onToggleSidebar: () => void;
}

const MenuItem = ({
    title,
    link,
    onToggleSidebar
}: MenuItemProps) => {
    return (
        <li>
            <Link to={link} onClick={onToggleSidebar}>
                <span>{title}</span>
            </Link>
        </li>
    )
}
export default MenuItem