import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                {location.pathname === '/' && <h1>Page d'accueil</h1>}
                {location.pathname === '/counter' && <h1>Page conteur</h1>}
                {location.pathname === '/user' && <h1>Page des produits</h1>}
            </div>
        </div>
    );
};

export default Navigation;
