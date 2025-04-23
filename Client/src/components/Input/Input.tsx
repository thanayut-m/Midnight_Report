import { FieldValues, Path, UseFormRegister } from "react-hook-form"

interface InputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    inputStateClassName: string;
}

const Input = <T extends FieldValues>({
    type,
    placeholder,
    register,
    name,
    inputStateClassName
}: InputProps<T>) => {
    return (
        <input
            {...register(name)}
            type={type}
            placeholder={placeholder}
            className={`input w-full ${inputStateClassName} `}
        />
    )
}
export default Input