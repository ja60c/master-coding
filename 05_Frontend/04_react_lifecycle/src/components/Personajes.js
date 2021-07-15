import React from 'react';
import Card from './Card';
import axios from 'axios';

class Personajes extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            personajes: [],
        }
    }
    render (){
        return <h1>Aquí se van a renderizar los personajes</h1>        
    }
}

export default Personajes;