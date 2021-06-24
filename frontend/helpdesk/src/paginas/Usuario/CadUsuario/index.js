import React, { useState } from 'react';
import api from '../../Services/api';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));
export default function CadastroLivro() {

    const classes = useStyles();
    const [NOME, setNome] = useState('');
    const [SOBRENOME, setSobrenome] = useState('');
    const [EMAIL, setEmail] = useState('');
    const [SENHA, setSenha] = useState('');
    const [TELEFONE, setTelefone] = useState('');
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
            AREA,
            LOCAL
        };

        try {
            console.log(dados);
            const response = await api.post('user', dados);
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
                <Grid item xs={12}>
                    <form onSubmit={handleCadastro}>
                        {/* <Grid item>
                        <img className={classes.img} alt="Perfil" src="#" />
                        <Button variant="outlined" className="button" type="submit">Adicionar Imagem</Button>
                        </Grid> */}
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
                        <FormControl fullWidth className={classes.margin}>
                            <TextField
                                id="Area"
                                label="Área"
                                placeholder="Digite a descrição do seu departamento"
                                multiline
                                variant="outlined"
                                value={AREA}
                                onChange={e => setArea(e.target.value)}
                                margin="normal"
                            />
                        </FormControl>
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
                        <FormControl>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="button"
                                startIcon={<SaveIcon />}
                            >
                                Cadastrar
                            </Button>
                            </FormControl>
                    </form>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

