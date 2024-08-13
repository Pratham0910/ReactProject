import React from 'react'
import './RetailerLogin.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RetailerLogin() {

	var [password, setPassword] = useState('');

	function submitForm(event) {
		if (password === "prathamesh") {
			navi("/Retailers")
		}
		else {
			alert("Password Invalid! Try Again");
		}
	}

	function getPass(event) {
		setPassword(event.target.value);
	}

	const navigate = useNavigate();
	function navi(path) {
		navigate(path);
	}
	return (
		<>
			<div className="retBG"></div>
			<button onClick={() => navi("/")} className="homeBtn btn">Back to Home</button>
			<div className="loginBox">

				<h1 className="title">Retailer Login Page</h1>

				<form id="login">

					<div className="form-group email">
						<label htmlFor="Email">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
					</div>

					<div className="form-group password">
						<label htmlFor="Password">Password</label>
						<input type="password" value={password} onChange={getPass} className="form-control" id="password" aria-activedescendant='password' placeholder="Password" minLength="8" required />
					</div>

					<div className="retLogin">
						<button onClick={submitForm} type="submit" className="login btn btn-lg" id="logBtn">Login as a Retailer</button>
					</div>
				</form>
			</div>
		</>
	)
}
