import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Customers from './pages/Customers/Customers';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
	const [user, setUser] = useState(null);
	
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/LoginPage" element={<LoginPage setUser={setUser} />} />
			<Route path="/Customers" element={<Customers setUser={setUser} user={user}/>} />
		</Routes>
	);
};

export default App;
