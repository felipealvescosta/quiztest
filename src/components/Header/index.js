import React from 'react';

import './styles.css';

import Logo from '../../assets/images/logo-sas-branca.svg';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="Logo" />
            <h2>Dev Front End</h2>
        </div>
    );
};

export default Header;
