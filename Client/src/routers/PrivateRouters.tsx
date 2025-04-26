import { Route, Routes } from "react-router"
import PrivateLayout from "../layouts/PrivateLayout"
import User_Management from "../page/Setting/User_Management/User_Management"
import PowerBi_Reports from "../page/PowerBi-Reports/PowerBi_Reports"
import Setting from "../page/Setting/Setting"

const PrivateRouters = () => {
    return (
        <PrivateLayout>
            <Routes>
                <Route path="/powerBi-reports" element={<PowerBi_Reports />} />
                <Route path="/user-management" element={<User_Management />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </PrivateLayout>
    )
}
export default PrivateRouters