import { FieldValues, Path, UseFormRegister } from "react-hook-form"

interface InputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
}

const Input = <T extends FieldValues>({
    type,
    placeholder,
    label,
    register,
    name
}: InputProps<T>) => {
    return (
        <fieldset className="fieldset">
            <legend
                className="fieldset-legend">
                {label}
            </legend>
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="input focus:input-warning w-full"
            />
        </fieldset>
    )
}
export default Input