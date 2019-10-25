import React, { Component } from 'react';

import '../../assets/css/Lancamentos.css';

import logo from '../../assets/img/agoravai.png';

import Rodape from '../../components/Rodape';

import Titulo from "../../components/Titulo";

import {Link} from "react-router-dom";

export default class Lancamentos extends Component {

    constructor() {
        // tudo que tiver em component sera passado p ca
        super();
        this.state = {
            lista: [],
            idPlataformaNavegation: [],
            idCategoriaNavegation: [],

            nome: "",
            sinopse: "",
            data_lancamento: "",
            classificacao: "",
            duracao: ""

        }
    }

    componentDidMount() {
        this.listarLancamentos();
    }

    listarLancamentos = () => {
        fetch('http://localhost:5000/api/lancamentos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }

    render() {
        return (
            <section className='container'>

                <div className="total">
                    <header className="cabecalhoPrincipal">

                        <div className="imgContainer">
                           <Link to="/home"> 
                           <img src={logo} />
                           </Link>  

                        </div>
                    </header>

                    <main className="conteudoPrincipal">
                        <section className="conteudoPrincipal-cadastro">
                            <div className="container" id="conteudoPrincipal-lista">
                                <div className="tabela">
                                    <div className="table">
                                        <Titulo titulo="Lançamentos" />
                                        <table id="tabela-lista">
                                            <thead>
                                                <tr className="row">
                                                    <th className="item">#</th>
                                                    <th className="item">Título</th>
                                                    <th className="item">Sinopse</th>
                                                    <th className="item">Data Lançamento</th>
                                                    <th className="item">Plataforma</th>
                                                    <th className="item">Categoria</th>
                                                    <th className="item">Classificação</th>
                                                    <th className="item">Duração</th>
                                                </tr>
                                            </thead>

                                            <tbody id="tabela-lista-corpo">
                                                {this.state.lista.map(element => {
                                                    return (
                                                        <tr key={element.idLancamentos} className="row">
                                                            <td className="item">{element.idLancamentos}</td>
                                                            <td className="item">{element.nome}</td>
                                                            <td className="item">{element.sinopse}</td>
                                                            <td className="item">{element.dataLancamento}</td>
                                                            <td className="item">{element.idPlataformaNavigation === undefined ? "vázio" : element.idPlataformaNavigation.nome}</td>
                                                            <td className="item">{element.idCategoriaNavigation === undefined ? "vázio" : element.idCategoriaNavigation.nome}</td>
                                                            <td className="item">{element.classificacao}</td>
                                                            <td className="item">{element.duracaoMin}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                        </section>
                    </main>

                    <Rodape />
                </div>

            </section>
        );
    }
}

