import React from "react";
import { Grid, Box, Typography, Button, CardActionArea, Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Sobre() {
    return (
        <>

            <Grid>
                <Grid container justifyContent="center" alignItems="center" >
                    <Box>
                        <Typography variant="h3" gutterBottom align="center" className="titulosobre"><p>Idealizadores do projeto</p></Typography>
                    </Box>
                </Grid>

                <Grid container className="alinhamento">
                    <Grid item xs={2} className="cards" >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/86629378?v=4"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className="titulosobre">
                                        Bruna Verrone
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">

                                    <a href="https://github.com/verronebruna" target="blank">
                                        <GitHubIcon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/bruna-verrone/" target="blank">
                                        <LinkedInIcon className="icons" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={2} className="cards" >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/94875485?v=4"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className="titulosobre">
                                        Jéssica Mendes
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">

                                    <a href="https://github.com/jessicasmd" target="blank">
                                        <GitHubIcon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/j%C3%A9ssica-souza-mendes-dias-a126a2118/" target="blank">
                                        <LinkedInIcon className="icons" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={2} className="cards" >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/95725748?v=4"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className="titulosobre">
                                        Beatriz Santos
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">

                                    <a href="https://github.com/BiaSa3s" target="blank">
                                        <GitHubIcon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/beatriz-santos-s%C3%A1" target="blank">
                                        <LinkedInIcon className="icons" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={2} className="cards">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/95705850?v=4"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className="titulosobre">
                                        Natalia Ferreira
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">

                                    <a href="https://github.com/nataliahisf" target="blank">
                                        <GitHubIcon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/natalia--ferreira/" target="blank">
                                        <LinkedInIcon className="icons" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={2} className="cards" >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://media-exp1.licdn.com/dms/image/C4D03AQG09rFIt51OhQ/profile-displayphoto-shrink_200_200/0/1643053749158?e=1652313600&v=beta&t=69QPc0m-zn9oTHI1JL_0BBUpYaGw5LKlavFkE6XTo_w"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className="titulosobre">
                                        Vinicius Barbosa
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">

                                    <a href="https://github.com/vvvvinicius" target="blank">
                                        <GitHubIcon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/vin%C3%ADcius-barbosa-a4355aa8/" target="blank">
                                        <LinkedInIcon className="icons" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={2} className="cards" >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/70922914?v=4"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className="titulosobre">
                                        Kaciany Ramos
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">

                                    <a href="https://github.com/Kaciany" target="blank">
                                        <GitHubIcon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kaciany-jesus-89bb02192/" target="blank">
                                        <LinkedInIcon className="icons" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center" className="backgound-white">
                    <Grid alignItems="center" item xs={6} >
                        <Box style={{ margin: "50px" }}>
                            <Typography variant="h4" component="h4" className="titulosobre">Projeto Integrador</Typography>
                            <Typography variant="h6" component="h6" className="titulosobre">Nosso propósito</Typography>

                            <Typography className="texto"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://imgur.com/CzotpFA.png" alt="" className="img" />
                    </Grid>
                </Grid>




            </Grid>


        </>
    );

}

export default Sobre;