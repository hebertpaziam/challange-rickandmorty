import "./loading.component.scss";
import React from "react";

export type LoadingProps = {};

export function Loading({}: LoadingProps) {
  return (
    <div className="loading-container">
      <div className="ring"></div>
    </div>
  );
}
