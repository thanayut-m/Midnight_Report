import { useEffect } from "react"
import AuthLayouts from "../layouts/AuthLayouts"
import { useForm } from "react-hook-form";
import FormInput from "../components/Input/FormInput";
import Buttons from "../components/Buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignIn } from "../utils/Schema";


const SignIn = () => {

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schemaSignIn)
    });

    const { errors, isSubmitting } = formState;

    useEffect(() => {
        document.title = "เข้าสู่ระบบ";
    }, [])

    const handleSignIn = async (data: object) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
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
                        label="text"
                        type="email"
                        placeholder="@gmail.com"
                        inputStateClassName="focus:input-warning hover:input-warning"
                        errors={errors}
                    />
                    <FormInput
                        register={register}
                        name="sign_password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        inputStateClassName="focus:input-warning hover:input-warning"
                        errors={errors}
                    />
                </div>
                <div className="mt-3">
                    <Buttons
                        isSubmitting={isSubmitting}
                    >
                        เข้าสู่ระบบ
                    </Buttons>
                </div>
            </form>
        </AuthLayouts>
    )
}
export default SignIn