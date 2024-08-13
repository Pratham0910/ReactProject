import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/User/UserContext';

function NavBar() {
    const navigate = useNavigate();
    const { logoutUser } = useUser();

    const handleLogout = (event) => {
        event.preventDefault();
        logoutUser();
        navigate('/LoginPage');
    };

    return (
        <div>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand compName" href="/"><img src="/favicon.png" className='logo' alt="" /></a>

                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Expand
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link navHome" href="/">Home</a>
                        </li>
                    </ul>
                    <button onClick={handleLogout} className="btn btn-light custLogout">Log Out</button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
