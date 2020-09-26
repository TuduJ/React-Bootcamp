function getNum(){
    return Math.floor((Math.random()*10))+1;
}

class NumPicker extends React.Component {
    render(){
        const num = getNum();
        let msg;
        if(num === 7){
            msg = 
                <div>
                    <h2>Congrats you win</h2>
                    <img src="https://media.giphy.com/media/30pjt9I0SDs7R4ghlp/giphy.gif"></img>
                </div>
        }else{
            msg = <h2>Sorry you loose</h2>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {msg}
            </div>
        );
    }
}