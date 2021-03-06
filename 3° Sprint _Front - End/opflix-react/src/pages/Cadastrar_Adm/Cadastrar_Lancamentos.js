import React, { Component } from 'react';

import logo from '../../assets/img/agoravai.png';

import Rodape from '../../components/Rodape';

import Titulo from "../../components/Titulo";

import '../../assets/css/Cadastrar_Lancamentos.css';

import {Link} from "react-router-dom";

export default class Cadastrar_Lancamentos extends Component {

    constructor() {

        super();
        this.state = {
            lista: [],
            idPlataformaNavegation: [],
            idCategoriaNavegation: [],

            nome: "",
            sinopse: "",
            data_lancamento: "",
            plataforma: "",
            categoria: "",
            classificacao: "",
            duracaoMin: ""


        }
    }

    componentDidMount() {
        this.listarLancamentos();
        this.listarCategorias();
        this.listarPlataformas();
    }

    listarLancamentos = () => {
        fetch('http://192.168.4.203:5000/api/lancamentos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => response.json())
            .then(data => { this.setState({ lista: data }) })
            .catch(erro => console.log(erro))

    }

    listarCategorias = () => {
        fetch('http://192.168.4.203:5000/api/categorias', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ idCategoriaNavegation: data })
            })
            .catch(erro => console.log(erro))
    }

    listarPlataformas = () => {
        fetch('http://192.168.4.203:5000/api/plataformas', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => response.json())
            .then(data => { this.setState({ idPlataformaNavegation: data }) })
            .catch(erro => console.log(erro))
    }

    cadastrarLancamento = (event) => {
        event.preventDefault();
        fetch('http://192.168.4.203:5000/api/lancamentos', {
            method: "POST",
            body: JSON.stringify({
                nome: this.state.nome,
                sinopse: this.state.sinopse,
                DataLancamento: this.state.data_lancamento,
                IdPlataforma: this.state.plataforma,
                IdCategoria: this.state.categoria,
                Classificacao: this.state.classificacao,
                duracaoMin: this.state.duracaoMin,
            }),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    tituloLancamento = (event) => {
        this.setState({ nome: event.target.value });
    }

    sinopseLancamento = (event) => {
        this.setState({ sinopse: event.target.value });
    }

    data_Lancamento = (event) => {
        this.setState({ data_lancamento: event.target.value });
    }

    plataformaLancamento = (event) => {
        this.setState({ plataforma: event.target.value });
    }

    categoriaLancamento = (event) => {
        this.setState({ categoria: event.target.value });
    }

    classificacaoLancamento = (event) => {
        this.setState({ classificacao: event.target.value });
    }

    duracaoLancamento = (event) => {
        this.setState({ duracaoMin: event.target.value });
        console.log(this.state.duracaoMin);
    }

    render() {
        return (
            <section className='container'>

                <div className='total'>

                <Link to="/adm"> <img src={logo} /> </Link>
                
                    <div className='titulo'>
                        <Titulo titulo="Cadastre novos lançamentos:" />
                        {/* <p>Cadastre novos lançamentos:</p> */}

                    </div>

                    <div className='form_Login'>
                        <form>
                            <div className="container">
                                <input
                                    type="text"
                                    id="lancamento__titulo"
                                    placeholder="Título do Lançamento"
                                    onInput={this.tituloLancamento} />

                                <input type="text"
                                    id="lancamento__sinopse"
                                    placeholder="Sinopse"
                                    value={this.state.sinopse}
                                    onChange={this.sinopseLancamento} />

                                <input type="date"
                                    id="lancamento__data"
                                    placeholder="dd/MM/yyyy"
                                    value={this.state.data_lancamento}
                                    onChange={this.data_Lancamento} />


                                <select id="option__tipoplataforma" onChange={this.plataformaLancamento}>
                                    {this.state.idPlataformaNavegation.map(element => {
                                        return (
                                            <option value={element.idPlataforma} key={element.idPlataforma}>{element.nome}</option>
                                        )
                                    })}
                                </select>

                                <select id="option__tipocategoria" onChange={this.categoriaLancamento}>
                                    {this.state.idCategoriaNavegation.map(element => {
                                        return (
                                            <option value={element.idCategoria} key={element.idCategoria}>{element.nome}</option>
                                        )
                                    })}
                                </select>

                                <input
                                    type="text"
                                    id="lancamento__classificacao"
                                    placeholder="Classificação"
                                    onInput={this.classificacaoLancamento} />

                                <input type="text"
                                    id="lancamento__duracao"
                                    placeholder="Duração"
                                    onChange={this.duracaoLancamento} />

                            </div>
                            <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                onClick={this.cadastrarLancamento}>
                                Cadastrar
                                </button>
                        </form>

                        <table>
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
                                            <td>{element.dataLancamento}</td>
                                            <td>{element.idPlataformaNavigation.nome}</td>
                                            <td>{element.idCategoriaNavigation.nome}</td>
                                            <td>{element.classificacao}</td>
                                            <td>{element.duracaoMin}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Rodape />
                </div>

            </section>

        );
    }
}