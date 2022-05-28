import React from 'react'
import { Grid } from '@mui/material';
import SQLQueries from './SQLQueries';
import SQLEditor from './SQLEditor';
import Result from './Result';
function Main() {
    return (
        <>
            <Grid container sx={{ mt: 2, justifyContent: 'center' }} spacing={2}>
                <Grid item sm={12} xs={11} md={4}>
                    <SQLQueries />
                </Grid>
                <Grid item sm={12} xs={11} md={7}>
                    <SQLEditor />
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2, justifyContent: 'center' }} spacing={2}>
                <Grid item sm={11} xs={11} md={11}>
                    <Result />
                </Grid>
            </Grid>
        </>
    )
}

export default Main