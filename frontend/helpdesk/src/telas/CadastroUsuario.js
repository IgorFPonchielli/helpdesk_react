import React, {useState} from 'react';
import api from '../services/api';
import validator from 'validator';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nome: Yup.string().required(),
    email: Yup.string().required(),
    endereco: Yup.string().required(),
    telefone: Yup.number().min(13).required(),
    senha: Yup.string().required()
})

function CadastroUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [erroEmail, setErroEmail] = useState('')
    const validarEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
            setErroEmail('E-mail válido')
        } else {
            setErroEmail('Entre um E-mail válido!')
        }
    }
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            email,
            endereco,
            telefone,
            senha
        };

        try {
            console.log(dados);
            const response = await api.post('usuário', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do usuário é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar usuário " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Usuário</h1>

                <Formik
                    validationSchema= {schema}
                    initialValues= {{
                        nome: '',
                        email: '',
                        endereco: '',
                        telefone: '',
                        senha: ''
                    }}>
                    {({ errors }) => (
                        <Form onSubmit={handleCadastro}>
                            <div classname="form-control">
                                <label htmlFor="nome">Nome do usuário</label>
                                <Field name="nome" type="text"
                                placeholder="Nome do usuário"
                                value={nome}
                                onChange={e => setNome(e.target.value)}/>
                                {errors.nome && (
                                    <div class="alert alert-danger" role="alert">
                                    {errors.nome} </div>
                                )}
                            </div>
                            <div classname="form-control">
                                <label htmlFor="email"></label>
                                <Field name="email" type="email"
                                placeholder="E-mail do usuário"
                                value={email}
                                onBlur={e => {validarEmail(e)}}
                                onChange={e => setEmail(e.target.value)}/>
                                <span style={{
                                fontWeight: 'bold', 
                                color: 'red'}}>{erroEmail}</span>
                            </div>
                            <div classname="form-control">
                                <label htmlFor="endereco"></label>
                                <Field name="endereco" type="text"
                                placeholder="Endereço"
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}/>
                            </div>
                            <div classname="form-control">
                                <label htmlFor="telefone"></label>
                                <Field name="telefone" type="number"
                                pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}/>
                            </div>
                            <div classname="form-control">
                                <label htmlFor="senha"></label>
                                <Field name="senha" type=""
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}/>
                            </div>
                        </Form>
                    )}
                </Formik>
                {/* <form onSubmit={handleCadastro}>
                    <input  
                        placeholder="Nome do usuário"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>

                    <input 
                        type="email"
                        placeholder="E-mail do usuário"
                        value={email}
                        onBlur={e => {validarEmail(e)}}
                        onChange={e => setEmail(e.target.value)}/>
                        <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{erroEmail}</span>

                    <input 
                        placeholder="Endereço"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}/> 

                    <input 
                        placeholder="Telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}/> 
                    
                    <input 
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}/> 

                    <button className="button" type="submit">Cadastrar Usuário</button>
                </form> */}
            </div>
        </div>

    );
}

export default CadastroUsuario;