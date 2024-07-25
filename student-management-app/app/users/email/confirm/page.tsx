"use client";
import Button from "@/app/component/Button";
import { verify } from "@/app/utils/service/auth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const ConfirmEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const mutation = useMutation(verify, {
    onSuccess: (data) => {
      // Invalidate and refetch
      toast.success(data.data.message);
      router.push("/login");
    },
    onError: (error: any) => {
      console.log(error, "error");
      toast.error(error);
    },
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token as string);
    }
  }, [token]);

  const { mutate, isLoading } = mutation;

  const handleVerifyEmail = () => {
    mutate();
  };
  return (
    <section className="bg-[#1a2e35] text-white w-full h-screen mx-auto text-center flex items-center justify-center flex-col space-y-10">
      <h1 className="font-bold text-2xl">Verify your Email Address</h1>
      <div className="flex items-center justify-center  flex-col gap-y-5 mx-auto text-center">
        <p>Click the button below to verify your email</p>
        <Button
          text="Verify my email"
          type="submit"
          loading={isLoading}
          onClick={handleVerifyEmail}
        />
      </div>
    </section>
  );
};

export default ConfirmEmail;
