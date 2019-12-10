import React from 'react';
import logo from '../../assets/img/agoravai.png';
import './App.css';
import Rodape from '../../components/Rodape';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { parseJwt } from './../../services/auth'
import Logout from '../../components/Deslogar'


function App() {
  return (
    <div className="App">
      <div className="total">
        <div className="container">
          <header className="cabecalhoPrincipal">
            <Logout className="botaoDeslogar" />
          </header>
          <div className="imgContainer">
            <img src={logo} />
          </div>

          <nav className="cabecalhoPrincipal-nav">
            <Link to='/lancamentos'>Lançamentos</Link>
            <Link to='/localizacao'>Localização</Link>
            <Link href=''>Filmes</Link>
          </nav>
        </div>


        <Rodape />
      </div>
    </div>
  );
}

export default App;
