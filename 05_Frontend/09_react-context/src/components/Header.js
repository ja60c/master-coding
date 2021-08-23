import { useContext } from 'react';

import { themeContext } from '../contexts/themeContext'

function Header() {
    const { toggle, toggleFunction } = useContext(themeContext);
    return (
        <div className={ `header ${toggle ? 'dark' : 'light'}` }>
            <h1>Soy el header! 🎩</h1>
            <button className={ `boton ${toggle ? 'dark' : 'light'}` } onClick={ toggleFunction }>Cambiar tema: {toggle ? 'Dark' : 'Light'}</button>
        </div>
    );
}

export default Header;