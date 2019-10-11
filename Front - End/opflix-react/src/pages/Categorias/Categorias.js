import React, {Component} from 'react';
import logo from '../../assets/img/agoravai.png';
import Rodape from '../../components/Rodape';
import Titulo from "../../components/Titulo";



export default class Categorias extends Component{
    render(){
        return(

<div>
      <header className="cabecalhoPrincipal">
        <div className="container">
          <img src={logo}/>

          {/* <nav className="cabecalhoPrincipal-nav">
              <Link href=''>Categorias</Link>
              <Link href=''>Cadastrar</Link>
              <Link href=''>Plartaformas</Link>
          </nav> */}
        </div>
      </header>

      <main className="conteudoPrincipal">
        <section className="conteudoPrincipal-cadastro">
          <Titulo titulo="Categorias"/>
          <div className="container" id="conteudoPrincipal-lista">
            <table id="tabela-lista">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                </tr>
              </thead>

              {/* <tbody id="tabela-lista-corpo">
                  {this.state.lista.map(element =>{
                      return(
                        <tr key={element.idCategoria}>
                            <td>{element.idCategoria}</td>
                            <td>{element.nome}</td>
                        </tr>
                      );
                  })}
              </tbody> */}
            </table>
          </div>

          <div className="container" id="conteudoPrincipal-cadastro">
            <h2 className="conteudoPrincipal-cadastro-titulo">
              Cadastrar Categorias:
            </h2>
            <form onSubmit={this.cadastrarCategoria}>
              <div className="container">
                <input
                  type="text"
                  className="className__categoria"
                  id="input__categoria"
                  placeholder="Inserir registro"
                //   value={this.state.nome}
                //   onChange={this.nomeCategoria}
                />
                <button
                  id="btn__cadastrar"
                  className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
        
      <Rodape />
    </div>        
        );
    }
}