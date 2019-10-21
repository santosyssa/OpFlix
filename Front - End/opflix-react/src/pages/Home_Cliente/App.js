import React from 'react';
import logo from '../../assets/img/agoravai.png';
import './App.css';
import Rodape from '../../components/Rodape';
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {parseJwt} from './../../services/auth'


function App() {
  return (
    <div className="App">
     <div>
      <header className="cabecalhoPrincipal">
        <div className="container">
          <img src={logo} />

          <nav className="cabecalhoPrincipal-nav">
            <Link to='/lancamentos'>Lançamentos</Link>
            <Link href=''>Séries</Link>
            <Link href=''>Filmes</Link>
          </nav>
        </div>
      </header>



      <Rodape />
    </div>
    </div>
  );
}

export default App;
