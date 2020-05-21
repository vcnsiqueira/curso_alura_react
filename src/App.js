import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';
import ApiService from './ApiService';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      autores: [],
    }
  }  

  removeAutor = (id) => {

    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });
    ApiService.RemoveAutor(id)
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if(res.message === 'deleted') {
          this.setState({autores: autoresAtualizado})
          PopUp.exibeMensagem('success', 'Autor removido com sucesso')
        }
      })
      .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação com a API ao tentar remover o autor')) 
    
  }

  escutadorDeSubmit = autor => {
    
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if(res.message === 'success') {
          this.setState({ autores:[...this.state.autores, res.data] });
          PopUp.exibeMensagem('success', 'Autor adicionado com sucesso');
        }
      })
      .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação com a API ao tentar criar o autor'))
  }
  
  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if(res.message === 'success') {
          this.setState({autores: [...this.state.autores, ...res.data]})
        }        
      })
      .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação com a API ao tentar listar os autores'))
  }

  render() {

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
