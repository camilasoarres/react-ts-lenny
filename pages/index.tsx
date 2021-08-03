// Libs
import React, { useState } from "react";

// Styles
import styles from '../styles/Home.module.css';

type FormData = {
  name?: string,
  email?: string,
  password?: string,
}

const validateEmail = (email: string) : boolean => {
  // eslint-disable-next-line no-useless-escape
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLowerCase()); // eslint-disable-line
};

const validatePassword = (password: string) : boolean => {
  const lower = /([a-z])/;
  const upper = /([A-Z])/;
  const numbers = /([0-9])/;
  const special = /([^a-zA-Z0-9])/;

  if (
    !password.match(lower) || !password.match(upper) ||
    !password.match(numbers) || !password.match(special)
  ) { return false; }

  return true;
};

const Home = () => {
  const [dataForm, setDataForm] = useState<FormData>({});
  const [messageError, setMessageError] = useState('');

  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    const field = ev.currentTarget.name;

    setDataForm({
      ...dataForm,
      [field]: value,
    });
  }

  const saveForm = (ev: React.SyntheticEvent<HTMLFormElement>) => {
    // const saveForm = (ev: React.SyntheticEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const isEmail = dataForm.email && validateEmail(dataForm.email);
    const isPassword = dataForm.password && validatePassword(dataForm.password);

    if (!dataForm.name) {
      setMessageError('Preencha o campo de nome');
    } else if (!isEmail) {
      setMessageError('Email inválido');
    } else if (!isPassword) {
      setMessageError('Senha inválida');
    } else {
      setMessageError('Formulário salvo!');
      setTimeout(() => { setMessageError('') }, 3000);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={saveForm}>
        <p className={styles.messageError}>{messageError}</p>
        <div className={styles.formStep}>
          <label className={styles.label}>Nome</label>
          <input
            className={styles.input}
            type='text'
            name='name'
            onChange={handleChange}
          />
        </div>

        <div className={styles.formStep}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type='email'
            name='email'
            onChange={handleChange}
            // onBlur={validateEmail}
          />
        </div>

        <div className={styles.formStep}>
          <label className={styles.label}>Senha</label>
          <input
            className={styles.input}
            type='password'
            name='password'
            onChange={handleChange}
          />
        </div>

        {/* <button
          className={styles.button}
          onClick={saveForm}>Enviar
        </button> */}
        <input
          className={styles.button}
          type='submit'
          value='Enviar' />
      </form>
    </div>
  )
}

export default Home;