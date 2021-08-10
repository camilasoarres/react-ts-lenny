// Libs
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TextInput } from "../components/input";

// Styles
import styles from "../styles/Home.module.css";
import { useUserData } from "../utils/hooks";
import { validateEmail, validatePassword } from "../utils/validation";

const Login = () => {
  const { updateData, isDataValid, errors, updateErrors } = useUserData();
  const [messageError, setMessageError] = useState("");
  const router = useRouter();

  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    const field = ev.currentTarget.name;

    updateData({
      [field]: value,
    });
  };

  const saveForm = (ev: React.SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!isDataValid()) {
      setMessageError("Algo de errado não está certo!");
    } else {
      router.push('/login')
      // setTimeout(() => {
      //   setMessageError("");
      // }, 3000);
    }
  };

  return (
    <div className={styles.container2}>
      <Link href={'/'}>
        <button className={styles.buttonBack}>{'< Voltar'}</button>
      </Link>
      <h1 className={styles.title}>Criar conta</h1>
      <form className={styles.form2} onSubmit={saveForm}>
        <p className={styles.messageError}>{messageError}</p>
        <TextInput
          label="Nome"
          name="name"
          type="text"
          onChange={handleChange}
          validation={(value) => {
            updateErrors({
              name: value.length ? "" : "Invalid name",
            });
          }}
          error={errors.name}
        />

        <TextInput
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          validation={(value) => {
            updateErrors({
              email: validateEmail(value) ? "" : "Invalid email",
            });
          }}
          error={errors.email}
        />

        <TextInput
          label="Senha"
          name="password"
          type="password"
          onChange={handleChange}
          validation={(value) => {
            updateErrors({
              password: validatePassword(value) ? "" : "Invalid password",
            });
          }}
          error={errors.password}
        />
        <input className={styles.button} type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Login;
