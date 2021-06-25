import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadUsuario from './paginas/Usuario/CadUsuario'
import EditUsuario from './paginas/Usuario/EditUsuario'
import Login from './paginas/Login'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login}/>
                <Route path="/usuario/cad" component={CadUsuario}/>
                <Route path="/usuario/edit" component={EditUsuario}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;