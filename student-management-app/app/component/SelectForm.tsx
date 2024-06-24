import React from "react";
import Select from "react-select";
interface ISelectForm {
  options: string[] | Array<{}>;
  name: string;
  placeholder?: string;
}
const SelectForm = ({ options, name, placeholder }: ISelectForm) => {
  return (
    <div className="space-y-1">
      <label className="text-sm capitalize">{name}</label>
      <Select options={options} name={name} placeholder={placeholder} />
    </div>
  );
};

export default SelectForm;
