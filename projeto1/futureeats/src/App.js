import logo from './logo.svg';
import './App.css';

import {Switch, Route, BrowserRouter} from 'react-router-dom';
import TelaInicial from './componentes/telaInicial';
import Login from './componentes/login';
import Endereço from './componentes/endereço';
import Cadastro from './componentes/cadastro';
import Feed from './componentes/feed';
import Busca from './componentes/busca';
import Carrinho from './componentes/carrinho';
import Restaurante from './componentes/restaurante';
import Perfil from './componentes/perfil';
import Pedido from './componentes/pedido';
import PedidoConfirmado from './componentes/pedidoConfirmado';
import Editar from './componentes/editar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TelaInicial/>
        </Route>

        <Route exact path="/Login">
          <Login/>
        </Route>

        <Route exact path="/Endereço">
          <Endereço/>
        </Route>

        <Route exact path="/Cadastro">
          <Cadastro/>
        </Route>

        <Route exact path="/Feed">
          <Feed/>
        </Route>

        <Route exact path="/Busca">
          <Busca/>
        </Route>

        <Route exact path="/Carrinho">
          <Carrinho/>
        </Route>

        <Route exact path="/Restaurante">
          <Restaurante/>
        </Route>

        <Route exact path="/Perfil">
          <Perfil/>
        </Route>

        <Route exact path="/Pedido">
          <Pedido/>
        </Route>

        <Route exact path="/Pedido-confirmado">
          <PedidoConfirmado/>
        </Route>

        <Route exact path="/Editar">
          <Editar/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
