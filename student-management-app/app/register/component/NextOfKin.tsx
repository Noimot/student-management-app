import InputFileForm from "@/app/component/InputFileForm";
import InputForm from "@/app/component/InputForm";
import React from "react";
import BackAndContinuButtons from "./BackAndContinuButtons";
import { ITab } from "../page";

const NextOfKin = ({ tab, setTab, switchTab }: ITab) => {
  const handleBtnBack = () => {
    switchTab("parent_info");
  };
  return (
    <div className="space-y-10">
      <h1 className="font-bold text-2xl">Next of Kin Information</h1>
      <div className="space-y-5 h-[calc(100vh-200px)] overflow-auto">
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
          name="relationship_to_student"
          type="text"
          placeholder="Relationship to Student"
          label="Relationship to Student"
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
        firstBtnText="back"
        secondBtnText="submit"
        onClickBtnBack={handleBtnBack}
      />
    </div>
  );
};

export default NextOfKin;
