"use client";
import React, { useState } from "react";
import { object, string } from "yup";
import { FormikProps, FormikProvider, useFormik } from "formik";
import PersonalInformation from "./component/PersonalInformation";
import ParentInformation from "./component/ParentInformation";
import NextOfKin from "./component/NextOfKin";
import Link from "next/link";
import Image from "next/image";

export interface ITab {
  tab: string;
  setTab: (tab: string) => void;
  switchTab: (tab: string) => void;
}

const page = () => {
  let [tab, setTab] = useState<string>("personal_info");
  const switchTab = (tab: string) => {
    switch (tab) {
      case (tab = "personal_info"):
        return setTab("personal_info");
      case (tab = "parent_info"):
        return setTab("parent_info");
      case (tab = "next_of_kin"):
        return setTab("next_of_kin");
      default:
        return "personal_info";
    }
  };
  const initialValues = {
    personalInformation: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      gender: "",
      nationality: "",
      address: "",
      email: "",
      phone_number: "",
      passport_photo: "",
      id_card: "",
      signature: "",
    },
    parentInformation: {
      first_name: "",
      last_name: "",
      relationship_to_student: "",
      address: "",
      email: "",
      phone_number: "",
      passport_photo: "",
      id_card: "",
      signature: "",
    },
    nextOfKinInformation: {
      first_name: "",
      last_name: "",
      relationship_to_student: "",
      address: "",
      email: "",
      phone_number: "",
      passport_photo: "",
      id_card: "",
      signature: "",
    },
    course: "",
  };
  const form = useFormik({
    initialValues,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <section>
      <FormikProvider value={form}>
        <form>
          <div className="flex gap-x-6 py-5">
            <div className="w-1/5 bg-white px-5">
              <Link href="/" className="flex items-center">
                <Image
                  src="/student-management-logo.png"
                  alt="Student management"
                  width={50}
                  height={50}
                />
                <h1 className="text-2xl font-bold">Stumag</h1>
              </Link>
              <ul className="space-y-4 mt-10">
                <li
                  onClick={() => switchTab("personal_info")}
                  className={`${
                    tab === "personal_info" ? "text-light-red" : "text-black"
                  } cursor-pointer hover:text-opacity-40`}
                >
                  Personal Information
                </li>
                <li
                  onClick={() => switchTab("parent_info")}
                  className={`${
                    tab === "parent_info" ? "text-light-red" : "text-black"
                  } cursor-pointer hover:text-opacity-40`}
                >
                  Parent/Guardian Information
                </li>
                <li
                  onClick={() => switchTab("next_of_kin")}
                  className={`${
                    tab === "next_of_kin" ? "text-light-red" : "text-black"
                  } cursor-pointer hover:text-opacity-40`}
                >
                  Next of Kin
                </li>
              </ul>
            </div>
            <div className="w-3/5">
              {tab === "personal_info" && (
                <PersonalInformation tab={tab} setTab={setTab} switchTab={switchTab}/>
              )}
              {tab === "parent_info" && (
                <ParentInformation tab={tab} setTab={setTab} switchTab={switchTab}/>
              )}
              {tab === "next_of_kin" && <NextOfKin tab={tab} setTab={setTab} switchTab={switchTab}/>}
            </div>
          </div>
        </form>
      </FormikProvider>
    </section>
  );
};

export default page;
