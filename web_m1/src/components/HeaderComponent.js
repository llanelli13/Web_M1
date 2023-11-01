import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Style/Header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="left-content">
                <Link to="/">
                    <img className="logo-icon" src="path_to_logo_image" alt="Home Logo" />
                </Link>
            </div>

            <button className="menu-btn" onClick={toggleMenu}>☰</button>

            <nav className={isOpen ? "drawer open" : "drawer"}>
                <Link className="nav-link" to="/teams">Équipes</Link>
                <Link className="nav-link" to="/rules">Règlement</Link>
                <Link className="nav-link" to="/results">Résultat</Link>
                <Link className="nav-link" to="/Choice"> Choix</Link>
            </nav>

            <nav className="navigation">
                <Link className="nav-link" to="/teams">Équipes</Link>
                <Link className="nav-link" to="/rules">Règlement</Link>
                <Link className="nav-link" to="/results">Résultat</Link>
                <Link className="nav-link" to="/Choice"> Choix</Link>
            </nav>
        </header>
    );
}

export default Header;