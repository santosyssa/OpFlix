import React, { Component } from 'react';

import Axios from 'axios';

import '../../assets/css/Login.css';

import Titulo from "../../components/Titulo";

import { parseJwt } from '../../services/auth'

export default class Cadastrar extends Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",
            idTipo_Usuario: "",
            erro: ""
        }
    }

    setarEstadoNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    setarEstadoEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    setarEstadoSenha = (event) => {
        this.setState({ senha: event.target.value })
    }

    setarEstadoTipoUsuario = (event) => {
        this.setState({ idTipo_Usuario: event.target.value })
    }

    cadastrarUsuario = (event) => {
        event.preventDefault();
        console.log(localStorage.getItem('usuario-opflix'))
        Axios.post('http://localhost:5000/api/login/cadastro', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix'),
            },
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
                idTipo_Usuario: 2,
        })
            .catch(erro => {
                this.setState({ erro: 'Ocorreu algum prolema. Por favor insira as suas informações de novo.' })
                console.log(this.state)
            })
    }

    render() {
        return (
            <section className='container'>
                <div className='loginPage'>
                    <div className="containerLogin">

                        <div className='titulo'>
                            {/* <img src={fundo} className="icone__fundo" /> */}
                            <Titulo titulo="Cadastrar" />
                            {/* <p>Faça login para acessar sua conta.</p> */}

                        </div>

                        <div className='form_Login'>
                            <form>
                                <section className='item'>
                                    <input
                                        className='item_nome'
                                        placeholder='Nome'
                                        type='text'
                                        name="name"
                                        id="login__nome"
                                        onChange={this.setarEstadoNome}
                                        value={this.state.nome} />
                                </section>

                                <section className='item'>
                                    <input className='item_Senha'
                                        placeholder='Email'
                                        type='username'
                                        name='Username'
                                        id='login__email'
                                        onChange={this.setarEstadoEmail}
                                        value={this.state.email} />
                                </section>

                                <section className='item'>
                                    <input className='item_Senha'
                                        placeholder='Senha'
                                        type='password'
                                        name='Senha'
                                        id='login__senha'
                                        onChange={this.setarEstadoSenha}
                                        value={this.state.senha} />
                                </section>

                                <div className='loginButton'>
                                    <button className='button' id="btn__login" onClick={this.cadastrarUsuario}>
                                        Entrar
                                </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </section>
        );

    }
}