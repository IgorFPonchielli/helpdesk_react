import React, { useState } from 'react';
import api from '../../Services/api';
import ImgNoProfile from '../Media/no_profile.png';
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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

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
export default function CadastroUsuario() {

    const classes = useStyles();
    const [NOME, setNome] = useState('');
    const [SOBRENOME, setSobrenome] = useState('');
    const [EMAIL, setEmail] = useState('');
    const [SENHA, setSenha] = useState('');
    const [TELEFONE, setTelefone] = useState('');
    const [id_tpouser, setTipo] = useState('');
    const [AREA, setArea] = useState('');
    const [LOCAL, setLocal] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            NOME,
            SOBRENOME,
            EMAIL,
            SENHA,
            TELEFONE,
            id_tpouser,
            AREA,
            LOCAL
        };

        try {
            console.log(dados);
            const response = await api.post('usuario', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do usuario é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar usuario " + error.message);
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <h1>Cadastrar Usuario</h1>
                <form onSubmit={handleCadastro}>
                    <Grid container spacing={2}>
                        <Grid item>
                            {/* <Grid item xs={12} sm={3} display="flex" justifyContent="flex-start"> */}
                            <Card className={classes.margin} variant="outlined">
                                <CardContent>
                                    <img src={ImgNoProfile} alt="Imagem de Perfil" width="120px" height="120px" />
                                </CardContent>
                                <Box display="flex" justifyContent="center">
                                    <CardActions >
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="UploadImage"
                                            type="file"
                                            size="small"
                                        />
                                        <label htmlFor="UploadImage">
                                            <Button justifyContent="center" variant="contained" color="primary" component="span">
                                                Upload
                                            </Button>
                                        </label>
                                    </CardActions>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        id="Nome"
                                        label="Nome"
                                        placeholder="Digite o primeiro nome"
                                        multiline
                                        variant="outlined"
                                        value={NOME}
                                        onChange={e => setNome(e.target.value)}
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        id="Sobrenome"
                                        label="Sobrenome"
                                        placeholder="Digite apenas o Sobrenome"
                                        multiline
                                        variant="outlined"
                                        value={SOBRENOME}
                                        onChange={e => setSobrenome(e.target.value)}
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        id="Email"
                                        label="E-mail"
                                        placeholder="meuemail@email.com"
                                        multiline
                                        variant="outlined"
                                        value={EMAIL}
                                        onChange={e => setEmail(e.target.value)}
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        id="Senha"
                                        label="Senha"
                                        placeholder="Digite uma senha para seu usuario"
                                        multiline
                                        variant="outlined"
                                        value={SENHA}
                                        onChange={e => setSenha(e.target.value)}
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth variant="outlined" margin="normal" className={classes.margin}>
                                    <InputLabel id="Tipo">Tipo de Usuario</InputLabel>
                                    <Select
                                        labelId="Tipo"
                                        id="TipoUsuario"
                                        multiline
                                        variant="outlined"
                                        value={id_tpouser}
                                        onChange={e => setTipo(e.target.value)}
                                        label="Tipo de Usuario"
                                        margin="normal"
                                    >
                                        <MenuItem value={1}>Administrador</MenuItem>
                                        <MenuItem value={2}>Operador</MenuItem>
                                        <MenuItem value={3}>Cliente</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        id="Telefone"
                                        label="Telefone"
                                        placeholder="+55 00 999999999"
                                        multiline
                                        variant="outlined"
                                        value={TELEFONE}
                                        onChange={e => setTelefone(e.target.value)}
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        id="Area"
                                        label="Área"
                                        placeholder="Área de Atuação"
                                        multiline
                                        variant="outlined"
                                        value={AREA}
                                        onChange={e => setArea(e.target.value)}
                                        margin="normal"
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth className={classes.margin}>
                                    <TextField
                                        id="Local"
                                        label="Local"
                                        placeholder="Preencha caso seja necessario contato presencial"
                                        multiline
                                        variant="outlined"
                                        value={LOCAL}
                                        onChange={e => setLocal(e.target.value)}
                                        margin="normal"
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
            </Container>
        </React.Fragment>
    );
}

