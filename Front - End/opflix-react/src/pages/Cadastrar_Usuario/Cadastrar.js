import React, {Component} from 'react';

import icone from '../../assets/img/agoravai.png';

import Rodape from '../../components/Rodape';

import Titulo from "../../components/Titulo";

export default class Cadastrar extends Component{
    render(){
        return(
            <section className='container'>
            <img src={icone} className="icone__logo" />

   <div className='loginPage'>
       <div className='titulo'>
       <Titulo titulo="Cadastre-se para se juntar conosco!"/>
       {/* <p>Cadastre novos lançamentos:</p> */}
       
       </div>

       <div className='form_Login'>
           <form>
               <section className='item'>
                   <input className='item_Email' placeholder='Digite seu Email'
                       type='text'></input>
               </section>

               <section className='item'>
                   <input className='item_Senha' placeholder='Digite sua Senha'
                       type='password'></input>
               </section>

               <section className='item'>
                   <input className='item_Categorias' placeholder='Confirme sua Senha'
                       type='password'></input>
               </section>


               <div className='cadastrarButton'>
                   <button className='button'>Cadastrar </button>
               </div>

           </form>
       </div>
       <Rodape />
   </div>

</section>
        );
    }
}