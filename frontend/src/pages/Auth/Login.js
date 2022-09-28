import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "./auth.css";

import { accountService } from '../../_services/account.service';

const Login = () => {
    let navigate = useNavigate();
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({
        email: 'test@test.fr',
        password: 'test'
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        axios.post('http://localhost:5000/login', credentials)
            .then(res => {
                console.log(res)
                accountService.saveToken(res.data.accessToken)
                navigate('/admin')
            })
            .catch(error => console.log(error))
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <div className="group">
                <label htmlFor="login">Identifiant</label>
                <input type="text" name="email" value={credentials.email} onChange={onChange} />
            </div>
            <div className="group">
                <label htmlFor="password">Mot de passe</label>
                <input type="text" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <div className="group">
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Login;