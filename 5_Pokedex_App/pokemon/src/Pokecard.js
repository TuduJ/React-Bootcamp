import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padtoThree = (number) => (
    number <= 999 ? `00${number}`.slice(-3) : number
);

class Pokecard extends Component{
    render() {
        let img_src = `${POKE_API}${padtoThree(this.props.id)}.png`;
        const props = this.props;
        return (
            <div className="Pokecard">
                <div className="Pokecard-image">
                    <img src={img_src} alt={props.name}/>
                </div>
                <h1 className="Pokecard-title">{props.name}</h1>
                <div className="Pokecard-data">TYPE : {props.type}</div>
                <div className="Pokecard-data">EXP : {props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;
