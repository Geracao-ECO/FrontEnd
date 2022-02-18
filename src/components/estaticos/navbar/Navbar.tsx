import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{backgroundColor: "	#0f5e9c"}}>
                    <Box style={{ cursor: "pointer"}}>
                        <Typography variant="h3" color="inherit">
                            Geração Eco
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                <a href="/">Início</a>
                            </Typography>
                        </Box>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            <a href="/sobre">Sobre nós</a>
                            </Typography>
                        </Box>
                        <Box mx={4} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            <a href="/contato">Contato</a>
                            </Typography>
                        </Box>

                        <Link to='/login'className='text-decorator-none'>
                            <Box mx={4} className='cursor'>
                                <Typography variant="h6" color="inherit"  >
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;