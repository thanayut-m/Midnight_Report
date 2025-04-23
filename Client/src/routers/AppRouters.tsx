import { Routes, Route } from "react-router";
import SignIn from "../Auth/SignIn";
import PrivateRouters from "./PrivateRouters";

const AppRouters = () => {
    return (
        <div>
            <Routes>
                <Route index element={<SignIn />} />

                <Route path="/private/*" element={<PrivateRouters />} />
            </Routes>
        </div >
    )
}
export default AppRouters