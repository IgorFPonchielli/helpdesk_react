import React, {useState} from 'react';
import api from '../services/api';
import validator from 'validator';

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

                <form onSubmit={handleCadastro}>
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
                </form>
    

            </div>
        </div>

    );
}

export default CadastroUsuario;