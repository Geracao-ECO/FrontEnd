import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import Inicio from './paginas/inicio/Inicio';
import Contato from "./paginas/contato/Contato";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import Ods from './paginas/ods/Ods';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/cadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/inicio'>
            <Inicio />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/ods'>
            <Ods />
          </Route>

          <Route path='/contato'>
            <Contato />
          </Route>


          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path="/tema">
            <ListaTema />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>

          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
