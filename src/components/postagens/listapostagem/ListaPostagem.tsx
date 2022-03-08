import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Services"
import { Box, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducers';
import { toast } from 'react-toastify'

import "./ListaPostagem.css"

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
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

                                    <Link to={`/formularioPostagem/${post.id}`}>
                                        <Box mx={1}>

                                            <Button variant="contained" size="small" className="botaoPost"> 
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`}>
                                        <Box mx={1}>
                                            <Button variant="contained" size="small" className="botaoDeletar">
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