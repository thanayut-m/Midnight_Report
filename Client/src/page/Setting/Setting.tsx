import { useForm } from "react-hook-form";
import Tabs from "../../components/Tabs/Tabs"
import Role_Management from "./Role_Management/Role_Management";
import User_Management from "./User_Management/User_Management"
import { useEffect } from "react";


const Setting = () => {
    useEffect(() => {
        document.title = "Setting || 2am Labs";
    }, []);

    const { register } = useForm();

    const productTabs = [
        { tab: "user_management", name: "สมาชิก", content: < User_Management register={register} /> },
        { tab: "role_management", name: "สิทธิ์การใช้งาน", content: <Role_Management register={register} /> },
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