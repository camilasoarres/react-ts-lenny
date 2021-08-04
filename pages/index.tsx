// Libs
import React, { useState } from "react";
import { TextInput } from "../components/input";

// Styles
import styles from "../styles/Home.module.css";
import { useUserData } from "../utils/hooks";
import { validateEmail, validatePassword } from "../utils/validation";

const Home = () => {
  const { updateData, isDataValid, errors, updateErrors } = useUserData();
  const [messageError, setMessageError] = useState("");

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
      setMessageError("Formulário salvo!");
      setTimeout(() => {
        setMessageError("");
      }, 3000);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={saveForm}>
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
        <input className={styles.button} type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
