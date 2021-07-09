import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Header from '../../Main/Header';
import Footer from '../../Main/Footer';
//import Form from 'react-bootstrap/Form';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: {
        display: 'none',
    },
}));

export default function CadastroChamado() {

    const classes = useStyles();
    const [idcategoria, setCategoria] = useState('');
    const [id_usuario, setUsuario] = useState('');
    const [id_prioridade, setPrioridade] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categorias, setCategorias] = useState([]);

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            idcategoria,
            id_usuario,
            id_prioridade,
            titulo,
            descricao
        };

        try {
            console.log(dados);
            const response = await api.post('chamado', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do chamado é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar chamado " + error.message);
        }
    }

    useEffect(() => {
        api.get('categorias', {}).then(response => {
            setCategorias(response.data);
        });
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">            
            <Header title="Cadastrar Chamado"/> 
                <form onSubmit={handleCadastro}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        required
                                        id="Titulo"
                                        label="Titulo"
                                        placeholder="Digite uma breve descrição"
                                        multiline
                                        variant="outlined"
                                        value={titulo}
                                        onChange={e => setTitulo(e.target.value)}
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        required
                                        id="usuario"
                                        label="E-mail"
                                        placeholder="meuemail@email.com"
                                        multiline
                                        variant="outlined"
                                        value={id_usuario}
                                        onChange={e => setUsuario(e.target.value)}
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth variant="outlined" margin="normal" className={classes.margin}>
                                    <InputLabel id="Prioridade">Prioridade</InputLabel>
                                    <Select
                                        required
                                        labelId="Prioridade"
                                        id="PrioridadeChamado"
                                        multiline
                                        variant="outlined"
                                        value={id_prioridade}
                                        onChange={e => setPrioridade(e.target.value)}
                                        label="Prioridade do chamado"
                                        margin="normal"
                                    >
                                        <MenuItem value={1}>Alta</MenuItem>
                                        <MenuItem value={2}>Média</MenuItem>
                                        <MenuItem value={3}>Baixa</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth variant="outlined" margin="normal" className={classes.margin}>
                                    <InputLabel id="Categoria">Categoria</InputLabel>
                                    <Select
                                        required
                                        labelId="Categoria"
                                        id="CategoriaChamado"
                                        multiline
                                        variant="outlined"
                                        value={idcategoria}
                                        onChange={e => setCategoria(e.target.value)}
                                        label="Categoria do chamado"
                                        margin="normal"
                                    >
                                        {categorias.map((categoria) => (
                                            <MenuItem value={categoria.id}>{categoria.categoria}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                            <FormControl fullWidth variant="outlined" margin="normal" className={classes.margin}>
                                <TextareaAutosize
                                    rows="6"
                                    placeholder="Descreva seu chamado aqui"
                                    variant="outlined"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                    label="Descrição"
                                />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl>
                                    <Button className={classes.submit}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        className="button"
                                        startIcon={<SaveIcon />}
                                    >
                                        Cadastrar
                                    </Button>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>

                </form>
                <Footer />
            </Container>
        </React.Fragment>
    );
}

