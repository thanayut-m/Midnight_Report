import { useEffect } from "react"
import AuthLayouts from "../layouts/AuthLayouts"
import { useForm } from "react-hook-form";
import FormInput from "../components/Input/FormInput";
import Buttons from "../components/Buttons";

const SignIn = () => {

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        document.title = "เข้าสู่ระบบ";
    }, [])

    const handleSignIn = async (data: object) => {
        console.log(data)
    }

    return (
        <AuthLayouts>
            <form
                onSubmit={handleSubmit(handleSignIn)}
                className="flex flex-col gap-3 "
            >
                <div className="flex flex-row justify-center items-center">
                    <p className="text-4xl font-semibold ">เข้าสู่ระบบ</p>
                </div>
                <div className="grid grid-rows-2">
                    <FormInput
                        register={register}
                        name="sign_email"
                        label="Email"
                        type="text"
                        placeholder="@gmail.com"
                        inputStateClassName="focus:input-warning hover:input-warning"
                    />
                    <FormInput
                        register={register}
                        name="sign_password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        inputStateClassName="focus:input-warning hover:input-warning"
                    />
                </div>
                <div className="mt-3">
                    <Buttons>เข้าสู่ระบบ</Buttons>
                </div>
            </form>
        </AuthLayouts>
    )
}
export default SignIn