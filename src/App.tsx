import React from 'react';
import {BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Sobre from './paginas/sobre/Sobre';
import Login  from './paginas/login/Login';
import Inicio from './paginas/inicio/Inicio';
import Contato from "./paginas/contato/Contato";
import './App.css';

function App() {
  return (
 <Router>
    <Navbar/>
      <Switch>
        
        <div style={{minHeight: '100vh'}}>
 
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

          <Route path='/contato'>
              <Contato />
          </Route>
        </div>
      </Switch>
    <Footer/>
 </Router>
  );
}

export default App;
