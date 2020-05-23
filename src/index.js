import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Livros from './Pages/Livros/Livros';
import Autores from './Pages/Autores/Autores';
import Sobre from './Pages/Sobre/Sobre';
import NotFound from './Pages/NotFound/NotFound';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/autores' component={Autores}/>
        <Route path='/livros' component={Livros}/>
        <Route path='/sobre' component={Sobre}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
