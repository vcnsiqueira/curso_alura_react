import React from 'react';

// Importando componentes de Tabela do Material-UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const CellDeleta = props => {
    const {removeDados, id} = props;
    if(!removeDados) {
        return null
    }
    
    return(
        <TableCell>
            <Button variant='contained' color='primary' onClick={() => { removeDados(id) }}>Remover</Button>
        </TableCell>
    );
}

const TitleDeleta = props => {
    const {removeDados} = props;
    if(! removeDados) {
        return null
    }
    return <TableCell>Remover</TableCell>
}

const Tabela = props => {
    const { campos, dados, removeDados } = props;

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
                    <TitleDeleta removeDados={removeDados}/>
                </TableRow>
            </TableHead>
            <TableHead/>
            <TableBody>
                {
                    dados.map((dado) => {
                        return (
                            <TableRow>
                                {
                                    campos.map((campo) => {
                                        return(
                                            <TableCell>{dado[campo.name]}</TableCell>
                                        )
                                    })
                                }
                                <CellDeleta id={dado.id} removeDados={removeDados}/>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    );
}

export default Tabela;