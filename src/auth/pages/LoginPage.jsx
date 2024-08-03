import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: "asd@gmail.com",
    password: "123456",
  });
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    dispatch( startLoginWithEmailPassword({ email, password }) );
    
  };
  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  }; 
  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} 
            className='animate__animated animate__fadeIn animate__faster'
      
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          {/* espacio entre los hijos */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* La configuracion que va a tomar el estilo es mobile first
                Osea, la configuracion de las pantallas más pequeñas */}
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
