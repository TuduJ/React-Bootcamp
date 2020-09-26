// Class Component
class Hello extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}



// Function Component
function HelloWorld(){
    return(
        <div>
            <h1>Hello World!!</h1>
            <h1>Hello World!!</h1>
            <h1>Hello World!!</h1>
        </div>
    );
}

ReactDOM.render(<Hello/>, document.getElementById('class'));
ReactDOM.render(<HelloWorld/>, document.getElementById('function'));