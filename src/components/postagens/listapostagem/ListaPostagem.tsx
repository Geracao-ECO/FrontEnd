import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Services"
import { Box, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core"
import "./ListaPostagem.css"
import useLocalStorage from "react-use-localstorage"
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify'

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage("token");
    let history = useHistory();

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

    async function getPost() {
        await busca("/postagem", setPosts, {
            headers: {
                "Authorization": token
            }
        })
    }

    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h4" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    {post.texto}
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    {post.imagem}
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    {post.regiao}
                                </Typography>                                                             
                                <Typography variant="body2" component="p">
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>

                                            <Button variant="contained" size="small" color="primary">
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size="small" color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem;