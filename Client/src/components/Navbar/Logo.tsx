import { Link } from "react-router"

interface LogoProps {
    to: string;
    children: React.ReactNode;
}

const Logo = ({
    to,
    children
}: LogoProps) => {
    return (
        <Link
            to={to}
            className="font-semibold text-2xl"
        >
            {children}
        </Link>
    )
}
export default Logo