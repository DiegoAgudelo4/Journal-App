import { LogoutOutlined, MenuOpenOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({drawerWidth=240}) => {
  return (
    <AppBar 
        position="fixed"
        sx={{  //no dejar junto el 100% y el -, ejemplo 100%-, correcto 100% -
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml:{sm:`${drawerWidth}px`}
        }}
        >
        <Toolbar>
            <IconButton
            color='inherit'
            edge='start'
            sx={{mr:2, display:{sm:'none'}}}
            >
                <MenuOpenOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-around' alignItems='center'>
                <Typography variant="h6" noWrap component='div'> JournalApp</Typography>
                <IconButton color="error">
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
