import Button from "@/app/component/Button";
import React from "react";

interface IBtns {
  tab?: string;
  setTab?: (value: string) => void;
  firstBtnText: string;
  secondBtnText: string;
  onClickBtnBack?: () => void;
  onClickBtnContinue?: () => void;
  disabled?: boolean;
}

const BackAndContinuButtons = ({
  tab,
  firstBtnText,
  secondBtnText,
  onClickBtnBack,
  onClickBtnContinue,
}: IBtns) => {
  return (
    <div
      className={`${
        tab !== "personal_info" ? "justify-between items-center" : "justify-end"
      } flex`}
    >
      {tab !== "personal_info" && <Button text={firstBtnText} onClick={onClickBtnBack} />}
      <Button text={secondBtnText} onClick={onClickBtnContinue} />
    </div>
  );
};

export default BackAndContinuButtons;
