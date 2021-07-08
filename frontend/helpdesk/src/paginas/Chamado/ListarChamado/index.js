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
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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

    async function handleUpdateChamado(id, status) {

        try {            
            const response = await api.put(`chamado/${id}`, status);
            console.log("DATA:" + response.data);
            
            alert("o id do chamado é " + id);
        } catch (error) {
            alert("Erro ao atualizar chamado " + error.message);
        }
    }

    useEffect(() => {
        api.get('chamados/detail', {}).then(response => {
            setChamados(response.data);
        });
    }, []);

    return (
        <Container maxWidth="lg">
            <Header title="Chamados" />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Codigo</StyledTableCell>
                            <StyledTableCell align="left">Titulo</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Categoria</StyledTableCell>
                            <StyledTableCell align="left">Usuario</StyledTableCell>
                            <StyledTableCell align="left">Prioridade</StyledTableCell>
                            <StyledTableCell align="center">Ação</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {chamados.map((chamado) => (
                            <StyledTableRow key={chamado.id}>
                                <StyledTableCell component="th" scope="row">
                                    {chamado.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{chamado.titulo}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <Select
                                        required                                        
                                        defaultValue={chamado.status}
                                        id="status"
                                        variant="outlined"
                                        //value={status}
                                        // onChange={() => handleUpdateChamado(chamado.id, "TESTE")}
                                        >
                                        <MenuItem value={'Aberto'}>Aberto</MenuItem>
                                        <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                                        <MenuItem value={'Finalizado'}>Finalizado</MenuItem>
                                    </Select>
                                </StyledTableCell>
                                <StyledTableCell align="left">{chamado.categoria}</StyledTableCell>
                                <StyledTableCell align="left">{chamado.email}</StyledTableCell>
                                <StyledTableCell align="left">{chamado.prioridade}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleDeleteChamado(chamado.id)}
                                    >Deletar</Button>
                                    <Button className={classes.submit}
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        type="submit"
                                        className={classes.button}
                                        onClick={() => handleUpdateChamado(chamado.id, "status: teste")}
                                        startIcon={<SaveIcon />}
                                    >Salvar</Button>
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