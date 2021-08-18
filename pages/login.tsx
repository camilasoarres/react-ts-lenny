// Libs
import React from "react";
import Link from "next/link";
import { TextInput } from "@components/input";

// Styles
import styles from "../styles/Home.module.css";
import { useLoginForm } from "@hooks/useLoginForm";

const Login = () => {
  const { loginData, updateData, submitData } = useLoginForm();

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          submitData();
        }}
      >
        {loginData.errorId && (
          <p className={styles.messageError}>{loginData.errorId}</p>
        )}
        {loginData.resolved && !loginData.errorId && (
          <p className={styles.messageSuccess}>Sucesso!</p>
        )}

        <TextInput
          label="Email"
          name="email"
          type="email"
          required
          value={loginData.email}
          onChange={(e) => updateData({ email: e.target.value })}
          error="Invalid email"
          hasError={loginData.errorId === "EmptyEmail"}
        />

        <TextInput
          label="Senha"
          name="password"
          type="password"
          required
          value={loginData.password}
          onChange={(e) => updateData({ password: e.target.value })}
          error="Invalid Password"
          hasError={loginData.errorId === "EmptyPassword"}
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
