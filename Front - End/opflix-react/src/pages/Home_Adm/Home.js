import React, { Component } from 'react';
import logo from '../../assets/img/agoravai.png';
// import './App.css';
import Rodape from '../../components/Rodape';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";


export default class Home extends Component {
  render() {

    return (
      <div className="App">
        <div>
          <header className="cabecalhoPrincipal">
            <div className="container">
              <img src={logo} />

              <nav className="cabecalhoPrincipal-nav">
                <Link to='/categorias'>Categorias</Link>
                <Link to='/cadastro'>Cadastrar</Link>
                <Link href=''>Plartaformas</Link>
              </nav>
            </div>
          </header>

          
          <Rodape />
        </div>
      </div>
    );
  }
}

