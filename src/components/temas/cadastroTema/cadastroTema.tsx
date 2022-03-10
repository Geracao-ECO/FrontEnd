import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducers';
import { SelectChangeEvent } from '@mui/material';
import './cadastroTema.css';


function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [options, setOptions] = useState<string[]>(["ONG", "Membro da Comunidade"])
    const [item, setItem] = useState<string>("")
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: '',
        tipo_assistencia: ''
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Para acessar, faça login.', {
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown}>) => {
        const op = event.target.value
        console.log(op)
        setItem(op as string);
        
      };

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        console.log(item)

        setTema({
            ...tema,
            tipo_assistencia: item,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        history.push('/tema')
    }

    return (
        <Container maxWidth="sm" className="fundocaixa">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className="cadastrotema">Cadastre ou atualize um novo tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tipo de postagem</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        value={item}
                    >
                        <MenuItem value="ONG">ONG</MenuItem>
                        <MenuItem value="Membro">Membro</MenuItem>


                    </Select>
                    <FormHelperText>Escolha o tipo da postagem </FormHelperText>
                    <Button type="submit" variant="contained" className="btFinalizar">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroTema; 