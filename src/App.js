import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';

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
    )

  }

  escutadorDeSubmit = autor => {
    
    this.setState({ autores:[...this.state.autores, autor] });
      
  }
  
  render() {
    return (
      <Fragment>
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor }/>
        <Form escutadorDeSubmit = { this.escutadorDeSubmit }/>
      </Fragment>
    );
  }

}

export default App;
