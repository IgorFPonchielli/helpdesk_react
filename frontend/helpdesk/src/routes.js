import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloMessage from './paginas/Teste/HelloMessage';
import CadastroUsuario from './telas/CadastroUsuario';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={HelloMessage} />
                <Route path='/CadastroUsuario' exact={true} component={CadastroUsuario} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;