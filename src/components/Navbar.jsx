import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import logo from '../images/atlan_logo.png'
function Navbar(props) {
    console.log(props.colscheme);

    const changeTheme = () => {
        if(props.colscheme === "light"){
            props.setcolscheme("dark")
        }
        else{
            props.setcolscheme("light")
        }
    }
    return (
        <>
            <AppBar color='transparent' position='static' sx={{ borderRadius: '15px' }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                        SQL Editor
                    </Typography>
                    <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
                        {props.colscheme === 'dark' ? <><Brightness7Icon /></> : <Brightness4Icon />}
                    </IconButton>
                    <img src={logo} alt="atlan nav logo" style={{ height: '35px' }} />

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar