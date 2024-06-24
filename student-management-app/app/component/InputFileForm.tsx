import React from "react";
import InputForm from "./InputForm";

interface IInputFile {
  fileUrl?: string;
  name: string;
  placeholder: string;
  label: string;
  onChange?: () => void;
}
const InputFileForm = ({ fileUrl, name, placeholder, label, onChange }: IInputFile) => {
  return (
    <div>
      <InputForm
        name={name}
        type="file"
        placeholder={placeholder}
        label={label}
      />
      <div>{fileUrl}</div>
    </div>
  );
};

export default InputFileForm;
