// Libs
import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { TextInput } from "../components/input";

// Styles
import styles from "../styles/Home.module.css";
import { useUserData } from "../utils/hooks";

const Login = () => {
  const { userData, updateData } = useUserData();
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
    console.log("userData", userData);
    if (userData.errorId) {
      setMessageError("Algo de errado não está certo!");
    } else {
      Router.push("/dashboard");
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
          required
          onChange={handleChange}
        />

        <TextInput
          label="Email"
          name="email"
          type="email"
          required
          onChange={handleChange}
          error="Invalid email"
          hasError={userData.errorId === "InvalidEmail"}
        />

        <TextInput
          label="Senha"
          name="password"
          type="password"
          required
          onChange={handleChange}
          error="Invalid Password"
          hasError={userData.errorId === "InvalidPassword"}
        />
        <input className={styles.button} type="submit" value="Entrar" />
      </form>

      <Link href="/register" passHref>
        <button className={styles.createAccount}>Criar conta</button>
      </Link>
    </div>
  );
};

export default Login;
