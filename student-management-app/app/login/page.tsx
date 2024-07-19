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
import { login } from "../utils/service/auth";

const Page = () => {


  const queryClient = useQueryClient();

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      // Invalidate and refetch
      // setData(data);
      // queryClient.invalidateQueries("signup");
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("user", JSON.stringify(data.data.user));
      toast.success("Signup successfully!");
      // navigate("/");
    },
    onError: (error) => {
      console.log(error, 'error');
      toast.error(
        "Signup failed. Please check your credentials and try again."
      );
    },
  });

  const initialValues = {
    email: "",
    password: ""
  };

  const form = useFormik({
    initialValues,
    validationSchema: object({
      password: string().required("Password is required"),
      email: string().email().required("Email is required"),
    }),
    onSubmit: (values: any) => {
      console.log(values);
      mutation.mutate(values);
    },
  });
  return (
    <AuthLayout>
      <FormikProvider value={form}>
        <form onSubmit={form.handleSubmit}>
          <h1 className="font-semibold text-xl">Login Form</h1>
          <div className="pt-10 space-y-6">
            <InputForm
              name="email"
              type="email"
              placeholder="Email"
              label="Email"
            />
            <InputForm
              name="password"
              type="password"
              placeholder="Password"
              label="Password"
            />
          </div>
          <div className="mt-16 flex justify-between items-center">
            <Button text="Login" type="submit" />
            <Link href="/register" className="flex items-center gap-x-2">
              Sign up
              <img src="/right-arrow.svg" alt="" className="w-5 h-5" />
            </Link>
          </div>
        </form>
      </FormikProvider>
    </AuthLayout>
  );
};

export default Page;
