import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import Header from '../../Main/Header';
import Footer from '../../Main/Footer';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    button: {
        margin: theme.spacing(1)
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function ListarUsuarios() {
    const classes = useStyles();

    const [usuarios, setUsuarios] = useState([]);
    
    async function handleDeleteUsuario(id) {
        try {
            await api.delete(`usuario/${id}`, {});
            setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        } catch (error) {
            alert('Erro ao deletar usuario');
        }
    }

    useEffect(() => {
        api.get('usuarios', {}).then(response => {
            setUsuarios(response.data);
        });
    }, []);

    return (
        <Container maxWidth="lg">
            <Header title="Usuarios" />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Codigo</StyledTableCell>
                            <StyledTableCell align="left">Nome</StyledTableCell>
                            <StyledTableCell align="left">Sobrenome</StyledTableCell>
                            <StyledTableCell align="left">E-mail</StyledTableCell>
                            <StyledTableCell align="left">Telefone</StyledTableCell>
                            <StyledTableCell align="left">Tipo Usuario</StyledTableCell>
                            <StyledTableCell align="center">Ação</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuarios.map((usuario) => (
                            <StyledTableRow key={usuario.id}>
                                <StyledTableCell component="th" scope="row">
                                    {usuario.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{usuario.nome}</StyledTableCell>
                                <StyledTableCell align="left">{usuario.sobrenome}</StyledTableCell>
                                <StyledTableCell align="left">{usuario.email}</StyledTableCell>
                                <StyledTableCell align="left">{usuario.telefone}</StyledTableCell>
                                <StyledTableCell align="left">{usuario.id_tpouser}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleDeleteUsuario(usuario.id)}
                                    >Deletar</Button>
                                </StyledTableCell >
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer />
        </Container>
    );
}