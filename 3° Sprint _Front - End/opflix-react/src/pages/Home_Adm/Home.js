import React, { Component } from 'react';
import logo from '../../assets/img/agoravai.png';
import '../../assets/css/Home.css';
import Rodape from '../../components/Rodape';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Logout from '../../components/Deslogar'


export default class Home extends Component {
  render() {

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
              <Link to='/categorias'>Categorias</Link>
              <Link to='/cadastro'>Cadastrar</Link>
              <Link to=''>Plataformas</Link>
            </nav>
          </div>

          <Rodape />
        </div>
      </div>
    );
  }
}
