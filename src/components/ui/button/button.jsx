import React from "react";
import S from "../../../styles/components/ui/button.module.scss";

export const Button = ({ type, label }) => {
  return type === "default" ? (
    <button className={S.btn_default}>{label}</button>
  ) : (
    <button className={S.btn_outline}>{label}</button>
  );
};
