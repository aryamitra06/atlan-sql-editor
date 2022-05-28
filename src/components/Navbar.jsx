import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import logo from '../images/atlan_logo.png'
function Navbar() {
    return (
        <>
            <AppBar color='transparent' position='static' sx={{borderRadius: '15px'}}>
                <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography variant="h6">
                        SQL Editor
                    </Typography>
                    <img src={logo} alt="atlan nav logo" style={{height: '35px'}}/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar