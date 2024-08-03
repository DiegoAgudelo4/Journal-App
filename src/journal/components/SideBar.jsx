import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth=240 }) => {
    const { displayName } = useSelector((state) => state.auth);
    return (
        <Box
            component='nav'
            //pixeles por defecto
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"//temporary: por si queremos ocultarla
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }//especificar propiedades adicionales

                }}

            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div' sx={{textTransform: 'capitalize'}}>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text =>(
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Labore Lorem exercitation irure elit tempor aliquip sunt.'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
