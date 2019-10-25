import React, { Component } from 'react';
import logo from '../../assets/img/agoravai.png';
import Rodape from '../../components/Rodape';
import '../../assets/css/Categorias.css';
import {Link} from"react-router-dom";

export default class Categorias extends Component {

  constructor() {
    // tudo que tiver em component sera passado p ca
    super();
    this.state = {
      lista: [],

      nome: "",
    }
  }


  listarCategorias = () => {
    fetch('http://localhost:5000/api/categorias', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ lista: data })
      })
      .catch(erro => console.log(erro))
  }

  cadastrarCategorias = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/categorias', {
        method: "POST",
        body: JSON.stringify({
            nome: this.state.nome,
        }),
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
        }
    })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

  nomeCategoria = (event) => {
    this.setState({ nome: event.target.value });
  }

  componentDidMount() {
    this.listarCategorias();
  }



  render() {
    console.log(this.state.lista)
    return (

      <div className="total">
        <header className="cabecalhoPrincipal">
          <div className="imgContainer">
             <Link to="/adm"> <img src={logo} /> </Link>
          </div>
        </header>

        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-cadastro">
            {/* <Titulo titulo="Categorias" /> */}


            <div className="container" id="conteudoPrincipal-cadastro">
              <h2 className="conteudoPrincipal-cadastro-titulo">
                Cadastrar Categorias:
            </h2>
              <form onSubmit={this.cadastrarCategorias}>

                <div className="container">
                  <input
                    type="text"
                    id="lancamento__titulo"
                    placeholder="Título"
                    onInput={this.nomeCategoria} />

                  <button
                    className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                    onClick={this.cadastrarCategorias}>
                    Cadastrar
                     </button>

                </div>
              </form>
            </div>

            <div className="container-tabela" id="conteudoPrincipal-lista">
              <table id="tabela-lista">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Título</th>
                  </tr>
                </thead>

                <tbody id="tabela-lista-corpo">
                  {this.state.lista.map(element => {
                    return (
                      <tr key={element.idCategoria}>
                        <td>{element.idCategoria}</td>
                        <td>{element.nome}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </section>
        </main>

        <Rodape />
      </div>
    );
  }
}