import { FieldValues, Path, UseFormRegister } from "react-hook-form"
import Input from "./Input";

interface FormInputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    inputStateClassName: string;
}

const FormInput = <T extends FieldValues>({
    type,
    placeholder,
    label,
    register,
    name,
    inputStateClassName
}: FormInputProps<T>) => {
    return (
        <fieldset className="fieldset">
            <legend
                className="fieldset-legend">
                {label}
            </legend>
            <Input
                register={register}
                name={name}
                type={type}
                placeholder={placeholder}
                inputStateClassName={inputStateClassName}
            />
        </fieldset>
    )
}
export default FormInput