// Libs
import React from "react";
import Link from "next/link";
import { TextInput } from "@components/input";
import { useForm } from "react-hook-form";

// Styles
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
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {errorId && <p className="messageError">{errorId}</p>}

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
        <input className="button" type="submit" value="Entrar" />
      </form>

      <Link href="/register" passHref>
        <button className="createAccount">Criar conta</button>
      </Link>
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

        .createAccount {
          text-decoration: underline;
          color: #fff;
          font-size: 1.1rem;
          margin-top: 2rem;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Login;
