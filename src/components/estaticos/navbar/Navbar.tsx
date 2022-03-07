import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "	#0f5e9c" }}>
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h3" color="inherit">
                            Geração Eco
                        </Typography>
                    </Box>

                    <Link to='/' className='text-decorator-none'>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit"  >
                                Início
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/tema' className='text-decorator-none'>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit"  >
                                Temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit"  >
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/sobre' className='text-decorator-none'>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit"  >
                                Sobre nós
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/ods' className='text-decorator-none'>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit"  >
                                ODS 6?
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/contato' className='text-decorator-none'>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit"  >
                                Contato
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit"  >
                                Logout
                            </Typography>
                        </Box>
                    </Link>



                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;