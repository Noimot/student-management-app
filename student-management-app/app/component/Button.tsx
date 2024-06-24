import React from "react";

interface IButton {
  text: string;
  className?: string;
  link?: string;
  icon?: string;
  onClick?: () => void;
}

const Button = ({ text, className, link, icon, onClick }: IButton) => {
  return (
    <button
      className={`${className} bg-light-red px-5 py-2 rounded-md text-white flex items-center gap-x-2`}
      onClick={onClick}
    >
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
