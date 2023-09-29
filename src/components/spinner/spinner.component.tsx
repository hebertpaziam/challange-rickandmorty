import "./spinner.component.scss";
import React from "react";

export type SpinnerProps = {};

export function Spinner({}: SpinnerProps) {
  return (
    <div className="spinner-container">
      <div className="ring"></div>
    </div>
  );
}
