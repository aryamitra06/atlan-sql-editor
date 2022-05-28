import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';

import logo from '../images/atlan_logo.png'
function Navbar(props) {
    const changeTheme = () => {
        if (props.colscheme === "light") {
            props.setcolscheme("dark")
        }
        else {
            props.setcolscheme("light")
        }
    }
    return (
        <>
            <AppBar color='transparent' position="static">
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                        SQL Editor
                        <a href="https://github.com/aryamitra06/atlan-sql-editor" target='_blank' rel="noreferrer"><IconButton sx={{ ml: 1 }}>
                            <GitHubIcon />
                        </IconButton></a>
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <img src={logo} alt="atlan nav logo" style={{ height: '35px' }} />
                        <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
                            {props.colscheme === 'dark' ? <><Brightness7Icon /></> : <Brightness4Icon />}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar