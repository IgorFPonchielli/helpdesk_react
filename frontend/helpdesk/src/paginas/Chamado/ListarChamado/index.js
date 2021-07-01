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

// instalar axios: npm install axios
// criar componente para listar livros

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
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

export default function ListarChamados() {
    const classes = useStyles();

    const [chamados, setChamados] = useState([]);

    async function handleDeleteChamado(id) {
        try {
            await api.delete(`chamado/${id}`, {});
            setChamados(chamados.filter(chamado => chamado.id !== id));
        } catch (error) {
            alert('Erro ao deletar chamado');
        }
    }

    async function handleUpdateChamado(id) {
        try {
            await api.put(`chamado/${id}`, {});
            setChamados(chamados.filter(chamado => chamado.id !== id));
        } catch (error) {
            alert('Erro ao atualizar chamado');
        }
    }

    useEffect(() => {
        api.get('chamados', {}).then(response => {
            setChamados(response.data);
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Codigo</StyledTableCell>
                        <StyledTableCell align="right">Titulo</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Categoria</StyledTableCell>
                        <StyledTableCell align="right">Usuario</StyledTableCell>
                        <StyledTableCell align="right">Prioridade</StyledTableCell>
                        <StyledTableCell align="right">Ação</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {chamados.map((chamado) => (
                        <StyledTableRow key={chamado.id}>
                            <StyledTableCell component="th" scope="row">
                                {chamado.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{chamado.titulo}</StyledTableCell>
                            <StyledTableCell align="right">{chamado.STATUS}</StyledTableCell>
                            <StyledTableCell align="right">{chamado.categoria}</StyledTableCell>
                            <StyledTableCell align="right">{chamado.usuario}</StyledTableCell>
                            <StyledTableCell align="right">{chamado.prioridade}</StyledTableCell>
                            <StyledTableCell align="center">
                            <Button variant="outlined" color="secondary" type="button" onClick={() => handleDeleteChamado(chamado.Codigo)}>Excluir</Button>
                            <Button variant="outlined" color="secondary" type="button" onClick={() => handleUpdateChamado(chamado.Codigo)}>Atualizar</Button></StyledTableCell >
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}