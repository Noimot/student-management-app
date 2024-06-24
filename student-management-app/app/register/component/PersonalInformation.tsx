import React, { useState } from "react";
import BackAndContinuButtons from "./BackAndContinuButtons";
import InputForm from "@/app/component/InputForm";
import SelectForm from "@/app/component/SelectForm";
import InputFileForm from "@/app/component/InputFileForm";
import { ITab } from "../page";

const PersonalInformation = ({ tab, setTab, switchTab }: ITab) => {
  const [fileUrl, setFileUrl] = useState({
    photo: "",
    idCard: "",
    signature: "",
  });
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const handleBtnContinue = () => {
    switchTab("parent_info");
  };
  return (
    <div className="space-y-10">
      <h1 className="font-bold text-2xl">Personal Information</h1>
      <div className="space-y-5 h-[calc(100vh-200px)] overflow-scroll">
        <InputForm
          name="first_name"
          type="text"
          placeholder="First Name"
          label="First Name"
        />
        <InputForm
          name="last_name"
          type="text"
          placeholder="Last Name"
          label="Last Name"
        />
        <InputForm
          name="date_of_birth"
          type="date"
          placeholder="Date of Birth"
          label="Date of Birth"
        />
        <SelectForm
          name="gender"
          options={genderOptions}
          placeholder="Gender"
        />
        <InputForm
          name="nationality"
          type="text"
          placeholder="Nationality"
          label="Nationality"
        />
        <InputForm
          name="address"
          type="text"
          placeholder="Address"
          label="Address"
        />
        <InputForm
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
        />
        <InputForm
          name="phone_number"
          type="number"
          placeholder="Phone Number"
          label="Phone Number"
        />
        <InputFileForm
          name="passport_photo"
          placeholder="Photo"
          label="Photo"
        />
        <InputFileForm name="id_card" placeholder="Id Card" label="Id Card" />
        <InputFileForm
          name="signature"
          placeholder="Signature"
          label="Signature"
        />
      </div>
      <BackAndContinuButtons
        tab={tab}
        firstBtnText="back"
        secondBtnText="continue"
        onClickBtnContinue={handleBtnContinue}
      />
    </div>
  );
};

export default PersonalInformation;
