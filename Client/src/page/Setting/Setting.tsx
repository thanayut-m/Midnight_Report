import { useForm } from "react-hook-form";
import Tabs from "../../components/Tabs/Tabs"
import Role_Management from "./Role_Management/Role_Management";
import User_Management from "./User_Management/User_Management"


const Setting = () => {
    const { register } = useForm();

    const productTabs = [
        { tab: "user_management", name: "สมาชิก", content: < User_Management register={register} /> },
        { tab: "role_management", name: "สิทธิ์การใช้งาน", content: <Role_Management /> },
    ];

    return (
        <div>
            <div className="text-4xl font-semibold mt-3">
                Setting
            </div>
            <Tabs menuTab={productTabs} />
        </div>
    )
}
export default Setting