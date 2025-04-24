import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

interface PrivateLayoutProps {
    children: React.ReactNode;
}
const PrivateLayout = ({
    children
}: PrivateLayoutProps) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="p-4 flex-1 overflow-auto">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default PrivateLayout