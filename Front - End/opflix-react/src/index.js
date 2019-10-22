import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { parseJwt } from './services/auth'

//pages
//cliente
import Login from './pages/Login/Login';
import App from './pages/Home_Cliente/App';
import Cadastrar from './pages/Cadastrar_Usuario/Cadastrar'
import Lançamentos from './pages/Lancamentos/Lancamentos'

//adm
import Home from './pages/Home_Adm/Home';
import CadastrarLancamentos from './pages/Cadastrar_Adm/Cadastrar_Lancamentos';
import Categorias from './pages/Categorias/Categorias';
import NaoEncontrado from './pages/NaoEncotrado/NaoEncontrado';

//routes
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';



// const RotaPrivada = ({ component: Component }) => (
//     <Router
//         render={props =>
//             localStorage.getItem("usuario-opflix") !== null ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{ pathname: "/", state: { from: props.location }}}
//                     />
//                 )
//         }

//     />
// )

// const RotaAdmin = ({ component: Component }) => (
//     <Router
//         render={props =>
//             localStorage.getItem("usuario-opflix") !== null && parseJwt().tipo !== 'Cliente'?
//                 (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{ pathname: "/", state: { from: props.location } }}
//                     />
//                 )
//         }

//     />
// )


const RotaPrivada = ({component: Component}) =>(
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null ? (
                <Component {...props} /> 
            ) : (
                <Redirect 
                    to={{ pathname: "/", state: {from: props.location}}}
                />
            )
        }
    />        
);

const RotaAdmin = ({component: Component}) =>(
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null && parseJwt().tipo !== 'Cliente' ? (
                <Component {...props} /> 
            ) : (
                <Redirect 
                    to={{ pathname: "/", state: {from: props.location}}}
                />
            )
        }
    />        
);


const routing = (
    <Router>
        <div>
            <Switch>
                {/* cliente */}
                <Route exact path='/' component={Login} />
                <RotaPrivada path='/home' component={App} />
                <Route path='/cadastrar' component={Cadastrar} />
                <RotaPrivada path='/lancamentos' component={Lançamentos} />

                {/* adm */}
                <RotaAdmin path='/adm' component={Home} />
                <RotaAdmin path='/cadastro' component={CadastrarLancamentos} />
                <RotaAdmin path='/categorias' component={Categorias} />

                <Route component={NaoEncontrado} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
