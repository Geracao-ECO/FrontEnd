import React, { useEffect } from "react";
import { Grid, Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import "./Sobre.css"
import { TokenState } from "../../store/tokens/tokensReducers";
import { TabContext, TabPanel } from '@material-ui/lab';

function Sobre() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])


    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6} >
                    <Box paddingX={10}>
                        <Typography variant="h3" gutterBottom component="h3" align="center" className="titulosobre" >Projeto Integrador</Typography>
                        <Typography variant="h4" gutterBottom component="h4" align="center" className="titulosobre">Nosso propósito</Typography>
                        <Typography variant="h6" gutterBottom align="center"> O projeto busca ampliar a mentalidade de cada morador sobre a poluição urbana, ameaça a saúde pública, perda de produtividade e renda devido à falta de saneamento básico que acarretam doenças infecciosas. Além disso, unir a participação dos moradores com ONGs que lidam com saneamento básico e água potável, fazendo uma ponte com os órgãos públicos responsáveis por essa problemática e acompanhar a tratativa para sinalizar o que está sendo feito.</Typography>
                    </Box>
                </Grid>

                <Box m={5}>
                <Grid item xs={6}>
                    <img width="400px" height="400px" src="https://imgur.com/CzotpFA.png" alt="" />
                </Grid>
                </Box>
            </Grid>







            <Grid container direction="row" justifyContent="center" alignItems="center" >

                <Box m={5}>
                    <Typography variant="h3" align="center" className="titulosobre" >Idealizadores do projeto</Typography>
                </Box>


                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Card>
                        <img className="foto" src="https://avatars.githubusercontent.com/u/95725748?v=4"
                            alt="" />

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h4" component="h3" align="center" className="nomessobre">
                                Beatriz Santos
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/BiaSa3s" target="blank">
                                <GitHubIcon className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/beatriz-santos-s%C3%A1" target="blank">
                                <LinkedInIcon className="icons" />
                            </a>
                        </Box>
                    </Card>

                    <Box mx={7}></Box>

                    <Card>
                        <img className="foto" src="https://avatars.githubusercontent.com/u/86629378?v=4"
                            alt="" />

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h4" component="h3" align="center" className="nomessobre">
                                Bruna Verrone
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/verronebruna" target="blank">
                                <GitHubIcon className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/bruna-verrone/" target="blank">
                                <LinkedInIcon className="icons" />
                            </a>
                        </Box>
                    </Card>

                    <Box mx={7}></Box>

                    <Card>
                        <img className="foto" src="https://avatars.githubusercontent.com/u/94875485?v=4"
                            alt="" />

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h4" component="h3" align="center" className="nomessobre">
                                Jéssica Mendes
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/jessicasmd" target="blank">
                                <GitHubIcon className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/j%C3%A9ssica-souza-mendes-dias-a126a2118/" target="blank">
                                <LinkedInIcon className="icons" />
                            </a>
                        </Box>
                    </Card>

                </Grid>

                <Box marginY={30}></Box>

                <Grid container direction="row" justifyContent="center" alignItems="center" >

                    <Card>
                        <img className="foto" src="https://avatars.githubusercontent.com/u/70922914?v=4"
                            alt="" />

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h4" component="h3" align="center" className="nomessobre">
                                Kaciany Ramos
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Kaciany" target="blank">
                                <GitHubIcon className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/kaciany-jesus-89bb02192/" target="blank">
                                <LinkedInIcon className="icons" />
                            </a>
                        </Box>
                    </Card>

                    <Box mx={7}></Box>

                    <Card>
                        <img className="foto" src="https://avatars.githubusercontent.com/u/95705850?v=4"
                            alt="" />

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h4" component="h3" align="center" className="nomessobre">
                                Natália Ferreira
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/nataliahisf" target="blank">
                                <GitHubIcon className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/natalia--ferreira/" target="blank">
                                <LinkedInIcon className="icons" />
                            </a>
                        </Box>
                    </Card>

                    <Box mx={7}></Box>

                    <Card>
                        <img className="foto" src="https://media-exp1.licdn.com/dms/image/C4D03AQG09rFIt51OhQ/profile-displayphoto-shrink_200_200/0/1643053749158?e=1652313600&v=beta&t=69QPc0m-zn9oTHI1JL_0BBUpYaGw5LKlavFkE6XTo_w"
                            alt="" />

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h4" component="h3" align="center" className="nomessobre">
                                Vinicius Barbosa
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/vvvvinicius" target="blank">
                                <GitHubIcon className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/vin%C3%ADcius-barbosa-a4355aa8/" target="blank">
                                <LinkedInIcon className="icons" />
                            </a>
                        </Box>
                    </Card>

                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;