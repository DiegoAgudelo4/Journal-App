import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type='text'
              placeholder='Nombre Completo'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>

            <TextField
              label="Correo"
              type='email'
              placeholder='Correo@google.com'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type='password'
              placeholder='Contraseña'
              fullWidth
            />
          </Grid>
          {/* espacio entre los hijos */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* La configuracion que va a tomar el estilo es mobile first
                Osea, la configuracion de las pantallas más pequeñas */}
            <Grid item xs={12} >
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
            
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              ingresar
            </Link>

          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
