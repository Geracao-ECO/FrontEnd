import React from 'react';
import { Grid, Box, Typography, } from '@material-ui/core';
import './Sobre.css';

function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                    <Typography variant="h2" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'><p>Sobre nós:</p></Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h6" align="center" className='descricao'>Planejamos uma rede social com foco em questões de água potável e saneamento básico, onde os membros da comunidade participam levantando preocupações, dando sugestões, planejando ações voltadas ao tema e se conectando com ONGs para que tudo seja comunicado aos órgãos responsáveis e alguma ação seja cobrada. A solução é a integração e cobrança para melhorias sobre o tema água potável e saneamento básico.</Typography>
                    </Box>
                </Grid>
                
                <Grid xs={6} className='imgSobre'>
                </Grid>
                
            </Grid>
        </>
    );
}

export default Sobre;