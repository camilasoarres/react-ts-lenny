// Libs
import React from "react";
import Link from "next/link";
import { TextInput } from "@components/input";
import { useForm } from "react-hook-form";

// Styles
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
    <div className="container">
      <Link href={"/"} passHref>
        <button className="buttonBack">{"< Voltar"}</button>
      </Link>
      <h1 className="title">Criar conta</h1>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errorId && <p className="messageError">{errorId}</p>}

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
        <input className="button" type="submit" value="Cadastrar" />
      </form>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(80deg, #49E9FA 20%, #009AAB 100%);
        }
        .messageError {
          width: 100%;
          margin: 0;
          color: #F7750C;
          text-align: right;
        }
        .button {
          align-self: center;
          width: 150px;
          height: 45px;
          margin-top: 2rem;
          font-size: 1.15rem;
          border-radius: 2px;
          color: #fff;
          background: #009AAB;
          border: none;
          outline: none;
          cursor: pointer;
        }
        
        .form {
          display: flex;
          flex-direction: column;
          width: 450px;
          padding: 3rem;
          border-radius: 6px;
          background: #fff;
        }
        .buttonBack {
          width: 150px;
          height: 45px;
          margin-top: 1rem;
          font-size: 1.15rem;
          border-radius: 2px;
          color: #81A6B3;
          background: #fff;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .title {
          color: #009AAB;
        }
      `}</style>
    </div>
  );
};

export default Register;
