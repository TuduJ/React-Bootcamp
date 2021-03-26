import React, { Component } from 'react'
import './Brokenclick.css'


class Brokenclick extends Component {
    constructor(props){
        super(props); 
        this.state = {
            clicked : false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({clicked : true});
    }

    render(){
        let status;
        if(this.state.clicked){
            status = <h1 className="Brokenclick-green">Clicked..!!</h1>
        }else{
            status = <h1 className="Brokenclick-red">Not Clicked !!</h1>
        }
        return(
            <div>
                {status}
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default Brokenclick;