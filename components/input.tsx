import { forwardRef, InputHTMLAttributes } from "react";
import styles from "../styles/Home.module.css";

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
    <label className={styles.label}>{label}</label>
    <input className={styles.input} {...props} ref={ref} />
    {hasError && !!error && <span className={styles.error}>{error}</span>}
    <style jsx>{`
      .InputContainer {
        display: flex;
      }
    `}</style>
  </div>
));
