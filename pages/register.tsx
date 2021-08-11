// Libs
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
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

    if (!userData.errorId) {
      setMessageError("Algo de errado não está certo!");
    } else {
      Router.push("/login");
      // setTimeout(() => {
      //   setMessageError("");
      // }, 3000);
    }
  };

  return (
    <div className={styles.container2}>
      <Link href={"/"}>
        <button className={styles.buttonBack}>{"< Voltar"}</button>
      </Link>
      <h1 className={styles.title}>Criar conta</h1>
      <form className={styles.form2} onSubmit={saveForm}>
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
          error="Invalid password"
          hasError={userData.errorId === "InvalidPassword"}
        />
        <input className={styles.button} type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Login;
