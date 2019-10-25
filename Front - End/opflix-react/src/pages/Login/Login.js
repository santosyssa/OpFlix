import React, { Component } from "react";

import Axios from 'axios';

import { Link } from "react-router-dom"

import '../../assets/css/Login.css';

// import fundo from '../../assets/img/connection-contemporary-data-450035.jpg';

import Titulo from "../../components/Titulo";

import { parseJwt } from '../../services/auth'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    mudarEstadoEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    mudarEstadoSenha = (event) => {
        this.setState({ senha: event.target.value })
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(data => {
                console.log(data);
                if (data.status === 200) {

                    localStorage.setItem("usuario-opflix", data.data.token)
                    if (parseJwt().tipo == "Cliente") {
                        this.props.history.push('/home')
                        // console.log(parseJwt().tipo)
                    }
                    else if (parseJwt().tipo == "Administrador") {
                        // console.log(parseJwt().tipo)
                        this.props.history.push('/adm')
                    } else {
                        console.log('erro')
                    }
                } else {
                    console.log("Erroooooooou")
                }
            })

            .catch(erro => {
                this.setState({ erro: "Usuário ou Senha inválidos" })
                console.log(erro);
            })
    }

    render() {
        return (

            <section className='container'>
                <div className='loginPage'>
                    <div className="containerLogin">

                        <div className='titulo'>
                            {/* <img src={fundo} className="icone__fundo" /> */}
                            <Titulo titulo="L O G I N" />
                            {/* <p>Faça login para acessar sua conta.</p> */}

                        </div>

                        <div className='form_Login'>
                            <form>
                                <section className='item'>
                                    <input
                                        className='item_Email'
                                        placeholder='Email'
                                        type='text'
                                        name="Email"
                                        id="login__email"
                                        onChange={this.mudarEstadoEmail}
                                        value={this.state.email} />
                                </section>

                                <section className='item'>
                                    <input className='item_Senha'
                                        placeholder='Senha'
                                        type='password'
                                        name='Senha'
                                        id='login__senha'
                                        onChange={this.mudarEstadoSenha}
                                        value={this.state.senha} />
                                </section>

                                <div className='loginButton'>
                                    <button className='button' id="btn__login" onClick={this.efetuarLogin}>
                                        Login
                                </button>
                                </div>



                                <p className="text_login"
                                    style={{ color: "red", textAlign: "center" }}>
                                    {this.state.erro}
                                </p>
                                

                                <div className="posicaoLinks" >

                        <Link className='Links' to="/cadastrar" >Ainda não possui conta ?</Link>
                        <a className='Links' >Esqueci minha senha</a>
                                </div>
                                
                            </form>
                        </div>

                    </div>
                </div>

            </section>
        );

    }

}