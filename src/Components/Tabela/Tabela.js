import React from 'react';

// Importando componentes de Tabela do Material-UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const Tabela = props => {
    const { campos, dados, removeAutor } = props;

    return(
        <Table>
            <TableHead>
                <TableRow>
                    {
                        campos.map((campo) => {
                            return(
                                <TableCell>{campo.titulo}</TableCell>
                            )
                        })
                    }
                </TableRow>
            </TableHead>
            <TableHead/>
            <TableBody>
                {
                    dados.map((dado) => {
                        return (
                            <TableRow key={dado.id}>
                                {
                                    campos.map((campo) => {
                                        return(
                                            <TableCell>{dado[campo.name]}</TableCell>
                                        )
                                    })
                                }
                                <TableCell>
                                    <Button variant='contained' color='primary' onClick={() => { removeAutor(dado.id) }}>Remover</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    );
}

export default Tabela;