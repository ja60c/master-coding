// COMPONENTES CLASE
// Están basados en programación orientada a objetos y usan sintaxis ES6 para ser declarados

import React from 'react';
import './style.css';

class Subtitulos extends React.Component {

  // PROPS
  // Propiedades que se pueden pasar y renderizar en nuestro componente

  // INICIAMOS EL STATE
  state = {
    nombre: this.props.nombre,
  }

  render() {
    return <div className="subtitulos">
              <p>Nombre: { this.state.nombre }</p>
           </div>
  }
}

export default Subtitulos;