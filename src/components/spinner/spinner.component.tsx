import "./spinner.component.scss";

export type SpinnerProps = {};

export function Spinner({}: SpinnerProps) {
  return (
    <div className="spinner-container">
      <div className="ring"></div>
    </div>
  );
}
