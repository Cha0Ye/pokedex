import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    
    render(){
        const { id, name, type, base_experience } = this.props;
        return (<div className="Pokecard">
                    <h2> {name} </h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=''/>
                    <h3> {`Type: ${type}`}</h3>
                    <h3>EXP: <span>{base_experience}</span></h3>
               </div>);
    }

}

export default Pokecard;