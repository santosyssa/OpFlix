import React, { Component } from 'react';

import logo from '../../assets/img/agoravai.png';

import Rodape from '../../components/Rodape';

import Titulo from "../../components/Titulo";

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
            data_lacamento: "",
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

                <div>
                    <header className="cabecalhoPrincipal">
                        <div className="container">
                            <img src={logo} />


                        </div>
                    </header>

                    <main className="conteudoPrincipal">
                        <section className="conteudoPrincipal-cadastro">
                            <Titulo titulo="Lançamentos" />
                            <div className="container" id="conteudoPrincipal-lista">
                                <table id="tabela-lista">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Título</th>
                                            <th>Sinopse</th>
                                            <th>Data Lançamento</th>
                                            <th>Plataforma</th>
                                            <th>Categoria</th>
                                            <th>Classificação</th>
                                            <th>Duração</th>
                                        </tr>
                                    </thead>

                                    <tbody id="tabela-lista-corpo">
                                        {this.state.lista.map(element => {
                                            return (
                                                <tr key={element.idLancamentos}>
                                                    <td>{element.idLancamentos}</td>
                                                    <td>{element.nome}</td>
                                                    <td>{element.sinopse}</td>
                                                    <td>{element.data_lancamento}</td>
                                                    <td>{element.idPlataformaNavegation === undefined ? "vázio" : element.idPlataformaNavegation.nome}</td>
                                                    <td>{element.idCategoriaNavegation === undefined ? "vázio" : element.idCategoriaNavigation.nome}</td>
                                                    <td>{element.classificacao}</td>
                                                    <td>{element.duracao_min}</td>
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

            </section>
        );
    }
}

