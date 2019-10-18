import React, { Component } from 'react';

import icone from '../../assets/img/agoravai.png';

import Rodape from '../../components/Rodape';

import Titulo from "../../components/Titulo";

export default class Cadastrar_Lancamentos extends Component {

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
            plataforma: '',
            categoria: '',
            classificacao: "",
            duracao: ""
            

        }
    }

    componentDidMount() {
        this.listarLancamentos();
        this.listarCategorias();
        this.listarPlataformas();
    }

    listarLancamentos = () => {
        fetch('http://localhost:5000/api/lancamentos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => response.json())
            .then(data => { this.setState({ lista: data }) })
            .catch(erro => console.log(erro))

    }

    listarCategorias = () => {
        fetch('http://localhost:5000/api/categorias', {
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
        fetch('http://localhost:5000/api/plataformas', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => response.json())
            .then(data => { this.setState({ idPlataformaNavegation: data }) })
            .catch(erro => console.log(erro))
    }

    cadastrarLancamento = (event) => {
        event.preventDefault();
        console.log(this.state);

        fetch('http://localhost:5000/api/lancamentos', {
            method: "POST",
            body: JSON.stringify({
                nome: "Lilo & Stitch",
                sinopse: "sla",
                DataLancamento: "1998-09-18T00:00:00",
                IdPlataforma: "1",
                IdCategoria: "1",
                Classificacao : "L",
                duracaoMin: "85 MIN"
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
        this.setState({ titulo: event.target.value });
    }

    sinopseLancamento = (event) => {
        this.setState({ sinopse: event.target.value });
    }

    data_Lancamento = (event) => {
        this.setState({ data_lancamento: event.target.value });
    }

    plataformaLancamento = (event) => {
        console.log(event.target.value)
        this.setState({ plataforma: event.target.value });
    }

    categoriaLancamento = (event) => {
        this.setState({ categoria: event.target.value });
    }

    classificacaoLancamento = (event) => {
        this.setState({ classificacao: event.target.value });
    }

    duracaoLancamento = (event) => {
        this.setState({ duracao_min: event.target.value });
    }

    render() {
        return (
            <section className='container'>
                <img src={icone} className="icone__logo" />

                {/* <nav className="cabecalhoPrincipal-nav">
              <Link href=''>Categorias</Link>
              <Link href=''>Cadastrar</Link>
              <Link href=''>Plartaformas</Link>
          </nav> */}

                <div className='loginPage'>
                    <div className='titulo'>
                        <Titulo titulo="Cadastre novos lançamentos:" />
                        {/* <p>Cadastre novos lançamentos:</p> */}

                    </div>

                    <div className='form_Login'>
                        <form>
                            <div className="container">
                                <input type="text" id="lancamento__titulo" placeholder="Título do Lançamento" value={this.state.titulo} onChange={this.tituloLancamento} />

                                <input type="text" id="lancamento__sinopse" placeholder="Sinopse" value={this.state.sinopse} onChange={this.sinopseLancamento} />

                                <input type="date" id="lancamento__data" placeholder="dd/MM/yyyy" value={this.state.data_lancamento} onChange={this.data_Lancamento} />


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

                                <input type="text" id="lancamento__classificacao" placeholder="Classificação" value={this.state.classificacao} onChange={this.classificacaoLancamento} />

                                <input type="text" id="lancamento__duracao" placeholder="Duração" onChange={this.duracaoLancamento} />

                            </div>
                            <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" onClick={this.cadastrarLancamento}>Cadastrar</button>
                        </form>

                        <table>
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
                    <Rodape />
                </div>

            </section>

        );
    }
}