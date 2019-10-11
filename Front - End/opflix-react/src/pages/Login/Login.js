import React, {Component} from "react";

import fundo from '../../assets/img/connection-contemporary-data-450035.jpg';

import Titulo from "../../components/Titulo";

export default class Login extends Component{

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
                        <input className='item_Email' placeholder='Email'
                            type='text'></input>
                    </section>
    
                    <section className='item'>
                        <input className='item_Senha' placeholder='Senha'
                            type='password'></input>
                    </section>
    
                    <div className='loginButton'>
                        <button className='button'>Login </button>
                    </div>

                </form>
            </div>
        </div>
    
    </section>
    );

    }

}