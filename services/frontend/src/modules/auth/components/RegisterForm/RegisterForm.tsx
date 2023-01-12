import { Button, Card, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { FormEvent, useCallback, useState } from 'react';

import styles from '../AuthForm/AuthForm.module.css';
import { RegisterFormProps } from './RegisterForm.props';

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
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
    <>
      <Card className={styles.authBox}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Регистриция</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="E-mail адрес"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Пароль"
                variant="outlined"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type={'submit'}
              >
                Войти
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

export default RegisterForm;
