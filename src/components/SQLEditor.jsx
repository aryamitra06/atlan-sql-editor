import React from 'react'
import { Button, TextField } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useDispatch } from 'react-redux';
import {setQ} from '../actions/query';

function SQLEditor() {
    const dispatch = useDispatch();
    const [query, setQuery] = React.useState("");

    const handleSubmit = async (e)=> {
        e.preventDefault()
        dispatch(setQ(query))
      }
      const handleOnChange = (e) => {
        setQuery({...query,[e.target.name]:e.target.value});
      }
      
    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex' }}>
                <TextField name='query' fullWidth multiline rows={3} onChange={handleOnChange}></TextField>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Button type='submit' sx={{ ml: 1 }} startIcon={<PlayCircleIcon />} variant='contained'>RUN</Button>
                    <Button type='reset' sx={{ ml: 1 }} variant='contained'>RESET</Button>
                </div>
            </div>
        </form>
    )
}

export default SQLEditor