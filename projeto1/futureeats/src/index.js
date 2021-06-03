import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './componentes/telaInicial';
import './componentes/login';
import './componentes/endereço';
import './componentes/cadastro';
import './componentes/feed';
import './componentes/busca';
import './componentes/carrinho';
import './componentes/restaurante';
import './componentes/perfil';
import './componentes/pedido';
import './componentes/pedidoConfirmado';
import './componentes/editar';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
