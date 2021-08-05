import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
            <NavLink exact to="nouvelles" activeClassName="nav-active">Nouvelles</NavLink>
            <NavLink exact to="a-propos" activeClassName="nav-active">A propos</NavLink>
            
        </div>
    );
};

export default Navigation;