import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import './Inicio.css';

function Inicio() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa1'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo1'><p>Seja bem-vinde!</p></Typography>
                    </Box>
                    </Grid>
                <Grid item xs={6} className="imgInicio">
                   
                </Grid>
                <Grid xs={12} className="sobre3">
                </Grid>
            </Grid>
        </>
    );
}

export default Inicio;