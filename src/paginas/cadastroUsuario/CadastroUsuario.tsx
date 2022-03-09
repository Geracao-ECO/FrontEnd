import React , {useState, useEffect, ChangeEvent } from 'react';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Services';
import { Grid, Box, Typography, Button, TextField, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [options, setOptions]  = useState<string[]>(["ONG", "Membro da Comunidade"])
    const [item, setItem] = useState<string>("")
    
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            tipo_usuario: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            tipo_usuario: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
            console.log (userResult)
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

             setUser({
            ...user,
            tipo_usuario: item,
            [e.target.name]: e.target.value,
        })

    }
    

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senha && user.senha.length >= 8){
        cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
        toast.success('Usuario cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
        }else{
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!', {
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
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown}>) => {
        setItem(event.target.value as string);
      };
    
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid item xs={6} className='imagem'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth required/>
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal'fullWidth  type='email' required/>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder="Insira no mínimo 8 caracteres" required />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}id='confirmarSenha' label='Confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth placeholder="Insira no mínimo 8 caracteres" required />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='foto' label='Foto' variant='outlined' name='foto' margin='normal' placeholder="Insira o URL da foto (Opcional)" fullWidth />
                        
                        <FormControl required>
                    <InputLabel id="demo-simple-select-helper-label">Tipo de usuário</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        >

                        {
                            options.map(option => (
                                <MenuItem key={ option } value={ option }>{ option }</MenuItem>
                            ))
                        }
                            
                                
                    </Select>
                    <FormHelperText>Escolha o tipo de perfil de usuário </FormHelperText>

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className="botaoCadastro">
                                    Cadastrar
                            </Button>
                        </Box>
                        </FormControl>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;