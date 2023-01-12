import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { FormEvent, useCallback, useState } from 'react';

import styles from './AuthForm.module.css';
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
    <>
      <Card className={styles.authBox}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Авторизация</Typography>
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

export default AuthForm;
