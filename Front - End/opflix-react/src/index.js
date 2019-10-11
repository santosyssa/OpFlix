import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//pages
import Login from './pages/Login/Login';
import App from './pages/Home_Cliente/App';
import Home from './pages/Home_Adm/Home';
import CadastrarLancamentos from './pages/Cadastrar_Adm/Cadastrar_Lancamentos';
import Categorias from './pages/Categorias/Categorias';
import NaoEncontrado from './pages/NaoEncotrado/NaoEncontrado';

//routes
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import * as serviceWorker from './serviceWorker';



// const RotaPrivada = ({component: Component}) =>(
//     <Router
//         render={ props=>
//             localStorage.getItem("usuario-gufos") !== null ?
//             (
//                 <Component {...props}/>
//             ): (
//                 <Redirect 
//                     to={{pathname: "/login", state: {from: props.location}}}
//                 />
//             )
//         }
    
//    />
// )

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/'component={Login}/>
                <Route path='/home' component={App}/>
                <Route path='/adm' component={Home}/>
                <Route path='/cadastro' component={CadastrarLancamentos}/>
                <Route path='/categorias' component={Categorias}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
