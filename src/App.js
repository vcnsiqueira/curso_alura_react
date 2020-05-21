import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';
import ApiService from './ApiService';


class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Vinícius',
        livro: 'Cálculo',
        preco: '200'
      }
    ],
  }

  removeAutor = (index) => {

    const { autores } = this.state;
    
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => { //alterando o estado no momeno do clique do usuário. Neste caso, deixamos no array, apenas aqueles elementos que não foram clicados para serem excluídos
          return posAtual !== index;
        })
      }
    );
    PopUp.exibeMensagem('success', 'Autor removido com sucesso')

  }

  escutadorDeSubmit = autor => {
    
    this.setState({ autores:[...this.state.autores, autor] });
    PopUp.exibeMensagem('success', 'Autor adicionado com sucesso');
      
  }
  
  render() {

    ApiService.ListaAutores()
      .then(res => console.log(res.data))

    ApiService.ListaNomes()
      .then(res => console.log(res.data))

    ApiService.ListaLivros()
      .then(res => console.log(res.data))
    

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor }/>
          <Form escutadorDeSubmit = { this.escutadorDeSubmit }/>
        </div>
      </Fragment>
    );
  }

}

export default App;
