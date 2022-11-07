import { SnackbarProvider, useSnackbar, } from 'notistack';
import React, { useContext, useState } from 'react';
import style from './index.module.css';
import { schemaLogin } from '../../schemas/login';
import { verifyInputs } from '../../helpers/verifyInput';
import { signIn } from '../../services/login.service';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/User/UserContext';


function Login() { 
  const { saveDataUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit() {
    const schemaVerified = await schemaLogin(login);
    const isValidSubmit = verifyInputs(schemaVerified);
    if (isValidSubmit) {
      const { token } = await signIn(login);
      if (token) {
        localStorage.setItem('token', token);
        saveDataUser(token);
        navigate('/home');
      }
      enqueueSnackbar('invalid credentials');
    }
    !schemaVerified.password && enqueueSnackbar('Incorrect password field');
    !schemaVerified.email && enqueueSnackbar('Incorrect email field');
  }

  return (
    <section className={ `${style.container__forms} container` }>
      <form onSubmit={
        (event) => {
          event.preventDefault();
          handleSubmit();
        }
      }>
        <div className="grid">
          <label htmlFor="firstname">
          Email
            <input
              onChange={ ({ target }) => setLogin((prev) => ({ ...prev, email: target.value }))}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required />
          </label>
  
          <label htmlFor="lastname">
          Senha
            <input
              onChange={ ({ target }) => setLogin((prev) => ({ ...prev, password: target.value }))}
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required />
          </label>
  
        </div>
   
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default function IntergrationNotistack() {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <Login />
    </SnackbarProvider>
  );
}