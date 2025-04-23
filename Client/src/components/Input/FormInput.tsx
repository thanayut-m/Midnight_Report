import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"
import Input from "./Input";

interface FormInputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    inputStateClassName: string;
    errors?: FieldErrors<T>;
}

const FormInput = <T extends FieldValues>({
    type,
    placeholder,
    label,
    register,
    name,
    inputStateClassName,
    errors
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
                errors={errors}
                inputStateClassName={inputStateClassName}
            />
        </fieldset>
    )
}
export default FormInput