import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadUsuario from './paginas/Usuario/CadUsuario'
import EditUsuario from './paginas/Usuario/EditUsuario'
import ListarChamados from './paginas/Chamado/ListarChamado'
import ListarUsuario from './paginas/Usuario/ListarUsuario'
import CadChamados from './paginas/Chamado/CadChamado';
import Login from './paginas/Login';
import Home from './paginas/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login}/>
                <Route path="/usuario/cad" component={CadUsuario}/>
                <Route path="/usuario/edit" component={EditUsuario}/>
                <Route path="/usuario/listar" component={ListarUsuario}/>
                <Route path="/chamado/listar" component={ListarChamados}/>
                <Route path="/chamado/cad" component={CadChamados}/>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;