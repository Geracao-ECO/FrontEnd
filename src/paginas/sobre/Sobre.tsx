import React from 'react';
import { Grid, Box, Typography, } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Sobre.css';

function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                
                <Grid alignItems="center" item xs={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <GitHubIcon className='redes' /></a>
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <LinkedInIcon className='redes' /></a>
                <a href="mailto:projetoodsgeracaoeco@gmail.com" target="_blank">
                <EmailIcon className='redes' /></a></Box>
                </Grid>

                <Grid alignItems="center" item xs={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <GitHubIcon className='redes' /></a>
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <LinkedInIcon className='redes' /></a>
                <a href="mailto:projetoodsgeracaoeco@gmail.com" target="_blank">
                <EmailIcon className='redes' /></a></Box>
                </Grid>

                <Grid alignItems="center" item xs={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <GitHubIcon className='redes' /></a>
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <LinkedInIcon className='redes' /></a>
                <a href="mailto:projetoodsgeracaoeco@gmail.com" target="_blank">
                <EmailIcon className='redes' /></a></Box>
                </Grid>

                <Grid alignItems="center" item xs={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <GitHubIcon className='redes' /></a>
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <LinkedInIcon className='redes' /></a>
                <a href="mailto:projetoodsgeracaoeco@gmail.com" target="_blank">
                <EmailIcon className='redes' /></a></Box>
                </Grid>

                <Grid alignItems="center" item xs={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <GitHubIcon className='redes' /></a>
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <LinkedInIcon className='redes' /></a>
                <a href="mailto:projetoodsgeracaoeco@gmail.com" target="_blank">
                <EmailIcon className='redes' /></a></Box>
                </Grid>

                <Grid alignItems="center" item xs={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <GitHubIcon className='redes' /></a>
                <a href="https://github.com/Geracao-ECO" target="_blank">
                <LinkedInIcon className='redes' /></a>
                <a href="mailto:projetoodsgeracaoeco@gmail.com" target="_blank">
                <EmailIcon className='redes' /></a></Box>
                </Grid>
                
            </Grid>
        </>
    );
}

export default Sobre;