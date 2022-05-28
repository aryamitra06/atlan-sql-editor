import React from 'react'
import { Button, TextField } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function SQLEditor() {
    return (
        <div style={{ display: 'flex' }}>
            <TextField fullWidth multiline rows={3}></TextField>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <Button sx={{ml:1}} startIcon={<PlayCircleIcon />} variant='contained'>RUN</Button>
                <Button sx={{ml:1}} variant='contained'>RESET</Button>
            </div>
        </div>
    )
}

export default SQLEditor