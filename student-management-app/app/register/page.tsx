"use client";
import React, { useState } from "react";
import { object, string } from "yup";
import { FormikProps, FormikProvider, useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";
import InputForm from "../component/InputForm";
import Button from "../component/Button";
import AuthLayout from "../component/AuthLayout";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { register } from "../utils/service/auth";
import { useRouter } from "next/navigation";

const Page = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [data, setData] = useState();

  const mutation = useMutation(register, {
    onSuccess: (data) => {
      // Invalidate and refetch
      console.log(data.data.message, " backend data");
      toast.success(data.data.message);
      router.push("/confirm_email");
    },
    onError: (error: any) => {
      console.log(error, "error");
      toast.error(error);
    },
  });

  const { mutate, isLoading } = mutation;

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
  };

  const form = useFormik({
    initialValues,
    validationSchema: object({
      first_name: string().required("First Name is required"),
      last_name: string().required("Last Name is required"),
      email: string().email().required("Email is required"),
    }),
    // validateOnMount: false,
    // enableReinitialize: true,
    onSubmit: (values: any) => {
      console.log(values);
      mutate(values);
    },
  });

  return (
    <AuthLayout>
      <FormikProvider value={form}>
        <form onSubmit={form.handleSubmit}>
          <h1 className="font-semibold text-xl">Registration Form</h1>
          <div className="pt-10 space-y-6">
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
              name="email"
              type="email"
              placeholder="Email"
              label="Email"
            />
          </div>
          <div className="mt-16 flex justify-between items-center">
            <Button text="Register" type="submit" loading={isLoading} />
            <Link href="/login" className="flex items-center gap-x-2">
              Sign in
              <img src="/right-arrow.svg" alt="" className="w-5 h-5" />
            </Link>
          </div>
        </form>
      </FormikProvider>
    </AuthLayout>
  );
};

export default Page;
