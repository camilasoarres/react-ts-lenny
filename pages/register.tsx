// Libs
import React from "react";
import Link from "next/link";
import { TextInput } from "@components/input";

// Styles
import styles from "../styles/Home.module.css";
import { useRegisterForm } from "@hooks/useRegisterForm";

const Login = () => {
  const { userData, updateData, submitData } = useRegisterForm();

  return (
    <div className={styles.container2}>
      <Link href={"/"}>
        <button className={styles.buttonBack}>{"< Voltar"}</button>
      </Link>
      <h1 className={styles.title}>Criar conta</h1>
      <form
        className={styles.form2}
        onSubmit={(event) => {
          event.preventDefault();
          submitData();
        }}
      >
        {userData.errorId && (
          <p className={styles.messageError}>{userData.errorId}</p>
        )}
        {userData.resolved && !userData.errorId && (
          <p className={styles.messageSuccess}>Sucesso!</p>
        )}
        <TextInput
          label="Nome"
          name="name"
          type="text"
          required
          value={userData.name}
          onChange={(e) => updateData({ name: e.target.value })}
        />

        <TextInput
          label="Email"
          name="email"
          type="email"
          required
          value={userData.email}
          onChange={(e) => updateData({ email: e.target.value })}
          error="Invalid email"
          hasError={userData.errorId === "InvalidEmail"}
        />

        <TextInput
          label="Senha"
          name="password"
          type="password"
          required
          value={userData.password}
          onChange={(e) => updateData({ password: e.target.value })}
          error="Invalid password"
          hasError={userData.errorId === "InvalidPassword"}
        />
        <input className={styles.button} type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Login;
