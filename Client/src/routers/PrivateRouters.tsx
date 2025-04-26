import { Route, Routes } from "react-router"
import PrivateLayout from "../layouts/PrivateLayout"
import User_Management from "../page/User_Management/User_Management"
import PowerBi_Reports from "../page/PowerBi-Reports/PowerBi_Reports"

const PrivateRouters = () => {
    return (
        <PrivateLayout>
            <Routes>
                <Route path="/powerBi-reports" element={<PowerBi_Reports />} />
                <Route path="/user-management" element={<User_Management />} />
            </Routes>
        </PrivateLayout>
    )
}
export default PrivateRouters