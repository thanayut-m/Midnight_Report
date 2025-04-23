import Navbar from "../components/Navbar/Navbar";

interface PrivateLayoutProps {
    children: React.ReactNode;
}
const PrivateLayout = ({
    children
}: PrivateLayoutProps) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}
export default PrivateLayout