import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: props.name,
            especie: props.species,
            origen: props.origin,
            imagen: props.imagen,
        }
    }
    render (){
        return(
            <div className="card-personaje">
                <img src={ this.state.imagen } alt={ this.state.imagen } />  
                <h4>Nombre: { this.state.nombre }</h4>
                <p>Especie: { this.state.especie }</p>
                <p>Origen: { this.state.origen }</p>
            </div>
        );
    }
}

export default Card;