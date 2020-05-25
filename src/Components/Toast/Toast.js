import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';

const Toast = props => {
    const alertTitle = props.severity === 'success' ?  'Sucesso' : 'Erro';
    return(
        <Snackbar open={props.open} onClose={props.handleClose} autoHideDuration='2000'>
            <Alert onClose={props.handleClose} variant='filled' severity={props.severity}>
                <AlertTitle>{alertTitle}</AlertTitle>
                {props.children}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
