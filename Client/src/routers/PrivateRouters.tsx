import { Route, Routes } from "react-router"
import Dashboard from "../page/Dashboard/Dashboard"
import PrivateLayout from "../layouts/PrivateLayout"

const PrivateRouters = () => {
    return (
        <PrivateLayout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </PrivateLayout>
    )
}
export default PrivateRouters