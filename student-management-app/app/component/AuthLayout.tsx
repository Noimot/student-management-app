import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen flex">
      <div className="w-3/5 bg-[#1a2e35] flex items-center justify-center">
        <img src="/student.png" alt="" />
      </div>
      <div className="w-2/5  pt-16 px-16">{children}</div>
    </section>
  );
};

export default AuthLayout;
