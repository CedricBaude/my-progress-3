import axios from 'axios';
import React, { useState } from 'react';
import "./auth.css";

const Login = () => {
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({
        email: 'myrl51@hotmail.com',
        password: ''
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
        axios.post(' https://api.fake-rest.refine.dev/users/1', credentials)
            .then(res => console.log(res))
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