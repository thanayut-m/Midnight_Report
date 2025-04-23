import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"

interface InputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    inputStateClassName: string;
    errors?: FieldErrors<T>;
}

const Input = <T extends FieldValues>({
    type,
    placeholder,
    register,
    name,
    inputStateClassName,
    errors = {}
}: InputProps<T>) => {

    const hasError = !!errors[name];
    return (
        <fieldset className="fieldset">
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className={`input w-full ${hasError ? "input input-error" : inputStateClassName}`}
            />
            {
                hasError && (<p className="text-red-500">{errors[name]?.message?.toString()}</p>)
            }
        </fieldset >
    )
}
export default Input