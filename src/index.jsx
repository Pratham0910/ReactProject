import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {UserProvider} from './components/User/UserContext'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<UserProvider>
			<Router>
				<App />
			</Router>
		</UserProvider>
	</React.StrictMode>
);


reportWebVitals();
