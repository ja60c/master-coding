import { useContext } from 'react';

import { themeContext } from '../contexts/themeContext'
function Main() {
    const { toggle, toggleFunction } = themeContext;

    return (
        <div className={ `main ${toggle ? 'dark' : 'light'}` }>
            <h2>Soy el main! 🧥</h2>
            <p>holaholahola</p>
        </div>
    )
}

export default Main