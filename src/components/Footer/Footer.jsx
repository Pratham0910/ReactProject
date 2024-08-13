import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
	const navigate = useNavigate();
	return (
		<footer className="footer">
			<ul className="menu">
				<li className="menu__item"><button className="btn home" onClick={() => navigate('/Customers')}>Home</button></li>
			</ul>
			<p>© | All Rights Reserved 2024</p>
		</footer>
	)
}

export default Footer
