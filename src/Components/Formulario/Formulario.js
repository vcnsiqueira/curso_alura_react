import React, { Component, Fragment } from 'react';
import FormValidator from '../../utils/FormValidator';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Toast from '../../Components/Toast/Toast';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
            campo: 'nome',
            metodo: 'isEmpty',
            validoQuando: false,
            mensagem: 'Entre com um nome'
            },
            {
            campo: 'livro',
            metodo: 'isEmpty',
            validoQuando: false,
            mensagem: 'Entre com um livro'
            },
            {
            campo: 'preco',
            metodo: 'isFloat',
            args:[{min: 0, max: 99999}],
            validoQuando: true,
            mensagem: 'Entre com um valor numérico'
            }
        ]); // criação da instância de FormValidator (recebe os parâmetros descritos na documentação do validator.js)

        this.stateInicial = { // estado inicial 
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
            mensagem: {
                open: false,
                texto: '',
                tipo: 'success'
            }
        };

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if(validacao.isValid){
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            console.log(camposInvalidos);
            const erros = camposInvalidos.reduce((erros, campo) => 
                erros + campo.message + '. ', '');
            console.log(erros)
            this.setState({
                mensagem: {
                    open: true,
                    texto: erros, 
                    tipo: 'error'
                }
            });
        }

    }

    render() {

        const { nome, livro, preco} = this.state;

        return (
            <Fragment>
                <Toast 
                    open={this.state.mensagem.open} 
                    handleClose={() => this.setState({
                        mensagem: {
                            open: false
                        }
                    })}
                    severity={this.state.mensagem.tipo}>
                    {this.state.mensagem.texto}
                </Toast>
                <form>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs>
                            <TextField id="nome" label="Nome" variant="outlined" name="nome" value={nome} onChange={this.escutadorDeInput}/>
                        </Grid>
                        <Grid item xs>
                            <TextField id="livro" label="Livro" variant="outlined" name="livro" value={livro} onChange={this.escutadorDeInput}/>
                        </Grid>
                        <Grid item xs>
                            <TextField id="preco" label="Preço" variant="outlined" name="preco" value={preco} onChange={this.escutadorDeInput}/>
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained" color="primary" onClick={this.submitFormulario}>Salvar</Button>
                        </Grid>
                    </Grid>
            
                </form>
            </Fragment>
        )
    }
}

export default Formulario;