import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Livros from './Livros';
import Autores from './Autores';
import Sobre from './Sobre';
import NotFound from './NotFound';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={App}/>
        <Route path='/autores' component={Autores}/>
        <Route path='/livros' component={Livros}/>
        <Route path='/sobre' component={Sobre}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
