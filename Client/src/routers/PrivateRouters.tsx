import { Route, Routes } from "react-router"
import Dashboard from "../page/Dashboard/Dashboard"

const PrivateRouters = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}
export default PrivateRouters