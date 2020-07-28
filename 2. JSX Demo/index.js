class JSXDemo1 extends React.Component {
    render(){
        return React.createElement('h1', null, 'I am an H1 tag');
    }
}


function getMood(){
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}


// We can embed Javascript in JSX using '{}'
class JSXDemo2 extends React.Component {
    render(){
        return(
            <div>
                <h1>My current mood is: {getMood()}</h1>
                <h3>My number is: {2 * 3 + 4}</h3>
            </div>
        );
    }
}


ReactDOM.render(<JSXDemo1/>, document.getElementById('root1'));
ReactDOM.render(<JSXDemo2/>, document.getElementById('root2'));