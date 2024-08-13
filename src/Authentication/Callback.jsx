import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
	const { handleRedirectCallback } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		const processAuth = () => {
			handleRedirectCallback()
				.then(result => {
					try {
						const appState = result.appState;
						const targetUrl = appState?.targetUrl || '/';
						console.log('Target URL:', targetUrl);
						navigate(targetUrl);
					}
					catch (error) {
						console.error('Error parsing state:', error);
						navigate('/');
					}
				})
				.catch(error => {
					console.error('Error during handleRedirectCallback:', error);
					navigate('/');
				});
		};

		processAuth();
	}, [handleRedirectCallback, navigate]);

	return <div>Loading...</div>;
};

export default Callback;
