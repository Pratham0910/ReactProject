import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-vmlwk0qwh38lucwh.us.auth0.com';
const clientId = '2s9FjHG4qXn2sOwTsIMGoIxkJKdFVDKJ';

const Auth0ProviderWithHistory = ({ children }) => {
	const navigate = useNavigate();

	const onRedirectCallback = (appState) => {
		const targetUrl = appState?.targetUrl || '/';
		console.log('Redirect callback target URL:', targetUrl);
		navigate(targetUrl);
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{ redirect_uri: window.location.origin }}
			onRedirectCallback={onRedirectCallback}
			audience="https://dev-vmlwk0qwh38lucwh.us.auth0.com/api/v2/"
			scope="read:current_user update:current_user_metadata"
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithHistory;
