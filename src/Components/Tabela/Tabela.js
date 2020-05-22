import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((autor) => {
        return (
            <tr key={autor.id}>
                <td>{autor.nome}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td><button className="btn waves-effect waves-light indigo lighten-2" onClick={() => { props.removeAutor(autor.id) }}>Remover</button></td>                            
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {

        const { autores, removeAutor } = this.props;

        return(
            <table className="highlight centered">
                <TableHead/>
                <TableBody autores = { autores } removeAutor = { removeAutor }/>
            </table>
        );
    }
}

export default Tabela;