// Libs
import React from "react";
import Link from "next/link";
import { TextInput } from "@components/input";
import { useForm } from "react-hook-form";

// Styles
import styles from "../styles/Home.module.css";
import { isEmailValid } from "@utils/validation";
import { LoginForm } from "@services/users/types";
import { useLoginSubmit } from "@hooks/users/useLoginSubmit";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const { errorId, submitData } = useLoginSubmit();

  function onSubmit(data: LoginForm) {
    submitData(data);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {errorId && <p className={styles.messageError}>{errorId}</p>}

        <TextInput
          {...register("email", {
            required: true,
            pattern: {
              message: "Invalid email",
              value: isEmailValid,
            },
          })}
          label="Email"
          type="email"
          error={errors.email?.message}
          hasError={!!errors.email?.type}
        />

        <TextInput
          {...register("password", {
            required: {
              message: "Password required",
              value: true,
            },
          })}
          label="Senha"
          type="password"
          error={errors.password?.message}
          hasError={!!errors.password?.type}
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
