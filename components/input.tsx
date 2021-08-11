import { FC, InputHTMLAttributes } from "react";
import styles from "../styles/Home.module.css";

type TextInputProps = {
  label: string;
  hasError?: boolean;
  error?: string;
};

export const TextInput: FC<
  InputHTMLAttributes<HTMLInputElement> & TextInputProps
> = ({ label, name, type, onChange, hasError, error, required }) => {
  return (
    <div className={styles.formStep}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        required={required}
        onChange={onChange}
      />
      {hasError && !!error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
