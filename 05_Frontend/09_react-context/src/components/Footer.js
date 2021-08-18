import { useContext } from 'react';

import { themeContext } from '../contexts/themeContext'
function Footer() {
    const { toggle, toggleFunction } = themeContext;

    return (
        <div className={ `footer ${toggle ? 'dark' : 'light'}` }>
            <h1>Soy el footer! 🦶</h1>
        </div>
    )
}

export default Footer
