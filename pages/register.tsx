// Libs
import React from "react";
import Link from "next/link";
import { TextInput } from "@components/input";
import { useForm } from "react-hook-form";

// Styles
import styles from "../styles/Home.module.css";
import { RegisterForm } from "@services/users/types";
import { useRegisterSubmit } from "@hooks/users/useRegisterSubmit";
import { isEmailValid, isPasswordValid } from "@utils/validation";

const Register = () => {
  const { errorId, submitData } = useRegisterSubmit();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  function onSubmit(data: RegisterForm) {
    submitData(data);
  }

  return (
    <div className={styles.container2}>
      <Link href={"/"}>
        <button className={styles.buttonBack}>{"< Voltar"}</button>
      </Link>
      <h1 className={styles.title}>Criar conta</h1>

      <form
        className={styles.form2}
        onSubmit={handleSubmit(onSubmit)}
      >
        {errorId && <p className={styles.messageError}>{errorId}</p>}

        <TextInput
          label="Name"
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: 'Nome não foi preenchido'
            }
          })}
          error={errors.username?.message}
          hasError={!!errors.username?.type}
        />

        <TextInput
          label="Email"
          type="text"
          {...register("email", {
            required: {
              value: true,
              message: 'Email não foi preenchido'
            },
            pattern: {
              message: "Invalid email",
              value: isEmailValid,
            },
          })}
          error={errors.email?.message}
          hasError={!!errors.email?.type}
        />

        <TextInput
          {...register("password", {
            required: {
              value: true,
              message: 'Senha não foi preenchida'
            },
            pattern: {
              message: "Invalid password",
              value: isPasswordValid,
            },
          })}
          label="Senha"
          type="password"
          error={errors.password?.message}
          hasError={!!errors.password?.type}
        />
        <input className={styles.button} type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Register;
