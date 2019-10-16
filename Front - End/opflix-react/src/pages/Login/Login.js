import React, {Component} from "react";

import Axios from 'axios';

import fundo from '../../assets/img/connection-contemporary-data-450035.jpg';

import Titulo from "../../components/Titulo";

export default class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    mudarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    efetuarLogin = (event) =>{
        event.preventDefault();

        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(data =>{
                console.log(data);
                if (data.status === 200) {

                    localStorage.setItem("usuario-opflix", data.data.token)
                    this.props.history.push('/home')
                }else{
                    console.log("Erroooooooou")
                }
            })

            .catch(erro =>{
                this.setState({erro: "Usuário ou Senha inválidos"})
                console.log(erro);
            })
    }

    render(){
        return(
    
            <section className='container'>
                 <img src={fundo} className="icone__fundo" />
        <div className='loginPage'>
    
            <div className='titulo'>
            <Titulo titulo="Faça login para acessar sua conta."/>
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
                        value={this.state.email}/>
                    </section>
    
                    <section className='item'>
                        <input className='item_Senha' 
                        placeholder='Senha'
                        type='password'
                        name='Senha'
                        id= 'login__senha'
                        onChange={this.mudarEstadoSenha}
                        value={this.state.senha}/>
                    </section>
    
                    <div className='loginButton'>
                        <button className='button' id="btn__login" onClick={this.efetuarLogin}>
                        Login 
                        </button>
                    </div>

                    {/* <div className='item_cadastrar'>
                        <Link to='/cadastrar'>Cadastra-se</Link>
                    </div> */}

                    <p className="text_login"
                    style={{color: "red", textAlign: "center"}}>
                        {this.state.erro}
                    </p>
                </form>
            </div>
        </div>
    
    </section>
    );

    }

}