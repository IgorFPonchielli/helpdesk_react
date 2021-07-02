import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadUsuario from './paginas/Usuario/CadUsuario/index'
import EditUsuario from './paginas/Usuario/EditUsuario'
import ListarChamados from './paginas/Chamado/ListarChamado'
import Login from './paginas/Login'
//import CadastroUsuario from './paginas/Usuario/CadUsuario';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login}/>
                <Route path="/usuario/cad" component={CadUsuario}/>
                <Route path="/usuario/edit" component={EditUsuario}/>
                <Route path="/chamado/listar" component={ListarChamados}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;