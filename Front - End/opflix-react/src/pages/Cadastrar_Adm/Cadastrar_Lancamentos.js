import React, {Component} from 'react';

import icone from '../../assets/img/agoravai.png';

import Rodape from '../../components/Rodape';

import Titulo from "../../components/Titulo";

export default class Cadastrar_Lancamentos extends Component{
    render(){
        return(
            <section className='container'>
                 <img src={icone} className="icone__logo" />

            {/* <nav className="cabecalhoPrincipal-nav">
              <Link href=''>Categorias</Link>
              <Link href=''>Cadastrar</Link>
              <Link href=''>Plartaformas</Link>
          </nav> */}

        <div className='loginPage'>
            <div className='titulo'>
            <Titulo titulo="Cadastre novos lançamentos:"/>
            {/* <p>Cadastre novos lançamentos:</p> */}
            
            </div>
    
            <div className='form_Login'>
                <form>
                    <section className='item'>
                        <input className='item_Titulo' placeholder='Titulo'
                            type='text'></input>
                    </section>
    
                    <section className='item'>
                        <input className='item_Sinopse' placeholder='Sinopse'
                            type='text'></input>
                    </section>

                    <section className='item'>
                        <input className='item_Categorias' placeholder='Categorias'
                            type='text'></input>
                    </section>

                    <section className='item'>
                        <input className='item_Classificacao' placeholder='Classificação'
                            type='text'></input>
                    </section>

                    <section className='item'>
                        <input className='item_Duracao' placeholder='Duração'
                            type='text'></input>
                    </section>

                    <section className='item'>
                        <input className='item_Data_Lancamento' placeholder='Data Lançamento'
                            type='text'></input>
                    </section>

                    <section className='item'>
                        <input className='item_Plataforma' placeholder='Plataforma'
                            type='text'></input>
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