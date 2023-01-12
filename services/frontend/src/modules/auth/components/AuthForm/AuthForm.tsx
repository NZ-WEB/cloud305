import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { AuthFormProps } from './AuthForm.props';

const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(email, password);
    },
    [email, password],
  );

  return (
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
  );
};

export default AuthForm;
