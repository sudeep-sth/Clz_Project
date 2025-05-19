import React from "react";

type Props = {
  placeholder: string;
  label: string;
  type?: string;
  register: any;
  name: string;
  errors?: any;
  validation?: any;
  options?: any;
  disabled?: boolean;
};

const Input = ({
  label,
  name,
  placeholder,
  register,
  type = "text",
  errors,
  validation,
  options,
  disabled = false,
}: Props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-semibold text-sm text-gray-700">
          {label}
        </span>
      </label>
      {type === "selection" ? (
        <select
          {...register(name, validation)}
          className="select select-sm !h-[40px] select-bordered focus:!outline-none w-full max-w-xs"
        >
          {options?.map((option: any, index: number) => (
            <option
              key={option.value}
              selected={index === 0}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          disabled={disabled}
          {...register(name, validation)}
          type={type}
          placeholder={placeholder}
          className="input input-bordered focus:border-gray-600 input-sm !h-[40px] focus:!outline-none w-full max-w-xs"
        />
      )}
      {errors && errors[name] && (
        <span className=" text-xs text-red-600">{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
