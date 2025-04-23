import { useEffect } from "react"
import AuthLayouts from "../layouts/AuthLayouts"
import Input from "../components/Input";
import { useForm } from "react-hook-form";

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
                    <Input
                        register={register}
                        name="sign_email"
                        label="Email"
                        type="text"
                        placeholder="@gmail.com"
                    />
                    <Input
                        register={register}
                        name="sign_password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="mt-3">
                    <button className="btn btn-info w-full">เข้าสู่ระบบ</button>
                </div>
                {/* <div className="divider">OR</div>
                <button className="btn btn-info w-full">เข้าสู่ระบบ</button> */}
            </form>
        </AuthLayouts>
    )
}
export default SignIn