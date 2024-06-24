import { useField } from "formik";
import React from "react";

type IInputForm = {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  disabled?: boolean;
  max?: string;
  className?: string;
};

const InputForm = ({
  name,
  type,
  placeholder,
  label,
  disabled,
  max,
  className,
  ...rest
}: IInputForm) => {
  const [field, { error, touched }] = useField({
    name: name,
    type: type,
  });
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <div
        className={`${
          error && touched ? `border-light-red` : " border-gray-100"
        } border border-solid w-full p-2 rounded-sm`}
      >
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          max={max}
          {...field}
          {...rest}
          className={`${className} w-full outline-transparent`}
        />
      </div>
      {error && touched && (
        <span className="text-light-red text-xs">{error}</span>
      )}
    </div>
  );
};

export default InputForm;
