import React, { Component } from 'react'

class Game extends Component{
    constructor (props) {
        super(props);
        this.state = {
            score : 99,
            gameover : false
        };
    }
    render(){
        return(
            <div>
                <h1>Your score is: {this.state.score}</h1>
                <h3>Color : {this.props.color}</h3>
            </div>
        )
    }
}

export default Game;