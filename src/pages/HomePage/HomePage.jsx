import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	const navigate = useNavigate();

	const handleLogin = (role) => {
		navigate(`/${role}`);
	};

	return (
		<>
			<div className="bgImage"></div>
			<div className="Hmain">
				<div className="header">
					<h1 className="HPTitle">Welcome to RestWell Pharma</h1>
				</div>
				<div className="login_button">
					<button
						onClick={() => handleLogin('LoginPage')}
						id="CustomerLogin"
						type="button"
						className="customer btn btn-info btn-lg">
						Customer Login
					</button>
				</div>
			</div>
		</>
	);
}
