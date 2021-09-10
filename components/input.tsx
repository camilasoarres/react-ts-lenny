import { forwardRef, InputHTMLAttributes } from "react";

type TextInputProps = {
  label: string;
  hasError?: boolean;
  error?: string;
};

// eslint-disable-next-line react/display-name
export const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & TextInputProps
>(({ label, hasError, error, ...props }, ref) => (
  <div className="InputContainer">
    <label className="label">{label}</label>
    <input className="input" {...props} ref={ref} />
    {hasError && !!error && <span className="error">{error}</span>}
    <style jsx>{`
      .InputContainer {
        display: flex;
      }
      .label {
        font-size: 1.5rem;
        margin: .5rem;
        color: #009AAB;
      }
      .input {
        min-height: 50px;
        border-radius: 4px;
        padding-left: .5rem;
        background: none;
        border: solid .5px#009AAB;
        outline: none;
      }
      .error {
        color: #F7750C;
        margin-top: 5px;
      }
    `}</style>
  </div>
));
