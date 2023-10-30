import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="left-content">
                <Link to="/">
                    <img className="logo-icon" src="path_to_logo_image" alt="Home Logo" />
                </Link>
            </div>

            <nav className="navigation">
                <Link className="nav-link" to="/teams">Équipes</Link>
                <Link className="nav-link" to="/rules">Règlement</Link>
                <Link className="nav-link" to="/results">Résultat</Link>
            </nav>

            <div className="right-content">
                <Link to="/profile">
                    <img className="profile-icon" src="path_to_profile_icon" alt="Profile" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
