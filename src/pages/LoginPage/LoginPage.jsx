import React from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../../components/User/UserContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const [pass, setPass] = useState('');
    const [email, setMail] = useState('');
    const { loginUser } = useUser();

    function handleEmail(event) {
        setMail(event.target.value)
        console.log(email)
    }

    function handlePass(event) {
        setPass(event.target.value)
        console.log(pass)
    }

    function verify(event) {
        event.preventDefault();

        fetch('http://localhost:9000/credentials')
            .then(response => { return response.json() })
            .then((data) => {
                if (Array.isArray(data)) {
                    const user = (data.find(cred => cred.mail === email && cred.password === pass))
                    if (user) {
                        loginUser(user)
                        alert('Login Successful!');
                        navigate('/Customers');
                    }
                    if (!user) {
                        alert('Wrong Credentials');
                    }
                }
            });
    }

    return (
        <div>
            <div className="BG"></div>
            <div className="content">
                <button onClick={() => navigate('/')} className="homeBtn btn">Back to Home</button>

                <h1 className="title">Login Page</h1>

                <div className="loginBox">
                    <form id="login" onSubmit={verify}>
                        <div className="form-group email">
                            <label htmlFor="email">Email address</label>
                            <input
                                value={email}
                                onChange={handleEmail}
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        <div className="form-group password">
                            <label htmlFor="password">Password</label>
                            <input
                                value={pass}
                                onChange={handlePass}
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                minLength="8"
                                required
                            />
                        </div>

                        <div className="submit">
                            <button
                                type="submit"
                                className="login btn btn-lg btn-primary"
                                id="logBtn"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
