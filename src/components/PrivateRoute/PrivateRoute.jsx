import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ element: Element, role }) => {
	const audienceKey = 'https://dev-vmlwk0qwh38lucwh.us.auth0.com/api/v2/'
	const { isAuthenticated, user } = useAuth0();
	console.log(Element, role)

	if (!isAuthenticated || !user || !user[audienceKey]?.includes(role)) {
		return <Navigate to="/" />;
	}

	return Element;
};

export default PrivateRoute;
