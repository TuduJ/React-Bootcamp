import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        let title;
        if (this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winner!</h1>
        } else{
            title = <h1 className="Pokedex-looser">Looser...!</h1>
        }
        return(
            <div className="Pokedex">
                <h2 className="Pokedex-title">Team {this.props.team}</h2>
                {title}
                <h4 className="Pokedex-score">Total Score : {this.props.score}</h4>
                <div className="Pokedex-card">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;