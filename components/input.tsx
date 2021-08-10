import { FC, SyntheticEvent } from "react";
import styles from "../styles/Home.module.css";

type TextInputProps = {
  label: string;
  name: string;
  type: string;
  onChange: (ev: SyntheticEvent<HTMLInputElement>) => void;
  validation?: (value: string) => void;
  error?: string;
};

export const TextInput: FC<TextInputProps> = ({
  label,
  name,
  type,
  onChange,
  validation,
  error,
}) => {
  return (
    <div className={styles.formStep}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={(ev) => validation && validation(ev.target.value)}
      />
      {!!error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
