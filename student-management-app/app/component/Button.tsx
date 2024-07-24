import React from "react";
import Loader from "./Loader";

interface IButton {
  text: string;
  className?: string;
  link?: string;
  icon?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  loading?: boolean;
}

const Button = ({
  text,
  className,
  link,
  icon,
  onClick,
  type,
  loading,
}: IButton) => {
  return (
    <button
      className={`${className} bg-light-red px-5 py-2 rounded-md text-white flex items-center gap-x-2`}
      onClick={onClick}
      type={type}
      disabled={loading}
    >
      {loading && <Loader />}
      {icon && (
        <span>
          <img src={icon} alt="" />
        </span>
      )}
      <span className="capitalize">{text}</span>
    </button>
  );
};

export default Button;
