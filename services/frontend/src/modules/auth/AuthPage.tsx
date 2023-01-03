import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../store/store';
import { signIn } from './AuthSlice';

const AuthPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(signIn({ email, password }));
  };

  return (
    <div>
      <h1>Auth page</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            title={'Email'}
            placeholder={'enter the email'}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            title={'Password'}
            placeholder={'enter the password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type={'submit'}>Sign in</button>
      </form>
    </div>
  );
};

export default AuthPage;
