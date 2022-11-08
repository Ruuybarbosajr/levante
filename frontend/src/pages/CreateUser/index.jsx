import { SnackbarProvider, useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { createUser } from '../../services/user.service';

function CreateUser() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    permission: false,
    password: ''
  });

  async function handleSubmit() {
    setLoading(true);
    const createdUser = await createUser(newUser);
    if (createdUser?.id) {
      setNewUser({
        name: '',
        email: '',
        permission: false,
        password: ''
      });
      enqueueSnackbar(`User "${createdUser.name}" created`);
    } else {
      enqueueSnackbar(createdUser.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Header />
      <article>
        <fieldset className='container'>
          <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}>
            <hgroup>
              <h1>Create a new user</h1>
              <h2>Remember that if the admin user has access to all features</h2>
            </hgroup>
            <label htmlFor="name">
                Name
              <input 
                onChange={({ target }) => setNewUser((prev) => ({
                  ...prev,
                  name: target.value
                }))}
                type="text"
                value={newUser.name}
                id="name" 
                name="name" 
                placeholder="Name" 
                required />
            </label>
            <label htmlFor="email">
               Email
              <input
                onChange={({ target }) => setNewUser((prev) => ({
                  ...prev,
                  email: target.value
                }))}
                value={newUser.email}
                type="email" 
                id="email" name="email" 
                placeholder="Email"
                required />
            </label>
            <label htmlFor="password">Password
              <input 
                onChange={({ target }) => setNewUser((prev) => ({
                  ...prev,
                  password: target.value
                }))}
                type="password" 
                value={newUser.password}

                id="password" 
                name="password"
                placeholder="password" 
                required />
            </label>
            <label htmlFor="isAdmin">
              <input 
                onChange={({ target }) => setNewUser((prev) => ({
                  ...prev,
                  permission: target.checked
                }))}
                type="checkbox" 
                id="isAdmin" 
                checked={newUser.permission}
                name="tisAdmin" />
              User is administrator
            </label>
            <section className='container' style={{'margin-top': '20px'}}>
              <button aria-busy={loading} type="submit">Submit</button>
            </section>
          </form>
        </fieldset>
      </article>
    </>);
}

export default function IntergrationNotistack() {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <CreateUser />
    </SnackbarProvider>
  );
}