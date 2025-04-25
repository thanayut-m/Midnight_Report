
import Logo from "./Logo";
import NavbarToggle from "./NavbarToggle";
import NavbarUser from "./NavbarUser";

interface NavbarProps {
    onToggleSidebar: () => void;
}

const Navbar = ({
    onToggleSidebar
}: NavbarProps) => {
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="flex-1 pl-3">
                <div className="flex gap-3 items-center">
                    <NavbarToggle
                        onClick={onToggleSidebar}
                    />
                    <Logo to="/private/dashboard">
                        Midnight Report
                    </Logo>
                </div>
            </div>
            <NavbarUser />
        </div>
    )
}
export default Navbar